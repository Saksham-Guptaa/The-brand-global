import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getActiveAds } from "@/lib/ads";
import { Ad } from "@/types/ad";
import { useNavigate } from "react-router-dom";
import { Blog } from "@/types/blog";
import {
  getAllPublishedBlogs,
  likeBlog,
  unlikeBlog,
  getBlogLikes,
} from "@/lib/blog";
import { getCurrentUser } from "@/lib/auth";
import { Heart, MessageCircle } from "lucide-react";
import { useToast } from "./ui/use-toast";

function Home() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filter, setFilter] = useState<
    "latest" | "featured" | "most_liked" | "oldest" | "least_liked"
  >("latest");
  const [searchTerm, setSearchTerm] = useState("");
  const [userLikes, setUserLikes] = useState<Set<string>>(new Set());
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    loadBlogs();
    checkCurrentUser();
    loadAds();
  }, [filter]);

  const loadAds = async () => {
    const { ads: activeAds } = await getActiveAds();
    if (activeAds) setAds(activeAds);
  };

  const checkCurrentUser = async () => {
    const { user } = await getCurrentUser();
    setCurrentUser(user);
    if (user) {
      const { likes } = await getBlogLikes(user.id);
      setUserLikes(new Set(likes?.map((like: any) => like.blog_id)));
    }
  };

  const loadBlogs = async () => {
    const { blogs: fetchedBlogs } = await getAllPublishedBlogs(filter);
    if (fetchedBlogs) setBlogs(fetchedBlogs);
  };

  const handleLike = async (blogId: string) => {
    if (!currentUser) {
      toast({
        title: "Authentication Required",
        description: "Please log in to like blogs",
        variant: "destructive",
      });
      return;
    }

    try {
      if (userLikes.has(blogId)) {
        await unlikeBlog(blogId, currentUser.id);
        setUserLikes((prev) => {
          const newLikes = new Set(prev);
          newLikes.delete(blogId);
          return newLikes;
        });
      } else {
        await likeBlog(blogId, currentUser.id);
        setUserLikes((prev) => new Set([...prev, blogId]));
      }
      loadBlogs(); // Reload to update likes count
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update like",
        variant: "destructive",
      });
    }
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  return (
    <div className="container mx-auto p-6">
      {/* Ads Section - Top */}
      {ads.length > 0 && (
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ads.slice(0, 3).map((ad) => (
            <a
              key={ad.id}
              href={ad.link_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={ad.image_url}
                  alt={ad.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <p className="font-medium">{ad.title}</p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      )}
      <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0 mb-6">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <div className="flex gap-4 items-center">
          <Input
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-xs"
          />
          {!currentUser && (
            <Button onClick={() => navigate("/auth")} variant="outline">
              Sign In
            </Button>
          )}
        </div>
      </div>

      <Tabs
        defaultValue="latest"
        className="w-full"
        onValueChange={(v) => setFilter(v as any)}
      >
        <TabsList className="grid w-full grid-cols-5 max-w-3xl mx-auto mb-6">
          <TabsTrigger value="latest">Latest</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="most_liked">Most Liked</TabsTrigger>
          <TabsTrigger value="least_liked">Least Liked</TabsTrigger>
          <TabsTrigger value="oldest">Oldest</TabsTrigger>
        </TabsList>

        <TabsContent value={filter} className="space-y-6">
          {filteredBlogs.length === 0 ? (
            <Card className="p-6 text-center text-muted-foreground">
              No blogs found
            </Card>
          ) : (
            filteredBlogs.map((blog) => (
              <Card key={blog.id} className="p-6">
                {blog.cover_image && (
                  <img
                    src={blog.cover_image}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h2
                        className="text-2xl font-semibold hover:text-primary cursor-pointer"
                        onClick={() => navigate(`/blog/${blog.id}`)}
                      >
                        {blog.title}
                      </h2>
                      {blog.is_featured && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {blog.content.substring(0, 200)}...
                    </p>
                    <div className="flex gap-2 flex-wrap mb-4">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-secondary px-2 py-1 rounded text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => handleLike(blog.id!)}
                  >
                    <Heart
                      className={`w-4 h-4 ${userLikes.has(blog.id!) ? "fill-current text-red-500" : ""}`}
                    />
                    {blog.likes_count || 0}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => navigate(`/blog/${blog.id}`)}
                  >
                    <MessageCircle className="w-4 h-4" />
                    {blog.comments_count || 0}
                  </Button>
                </div>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Home;
