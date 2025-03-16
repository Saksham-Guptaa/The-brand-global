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
import Header from "./Header";
import Carousel from "./Carousel";
import PostAndVideo from "./PostAndVideo";
import TopStories from "./Stories";
import CategoriesSection from "./Categories";
import ArticleCard from "./ArticleCard";
import AdvertisementBanner from "./AdvertisemnetBanner";

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
    <>
      <Header />
      <Carousel />
      <PostAndVideo />
      <TopStories />
      <CategoriesSection />
      <div className="container mx-auto px-4 md:px-6 lg:px-40">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Articles Section */}
          <div className="flex-1 space-y-6">
            <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0 mb-6">
              <h1 className="text-2xl md:text-4xl font-bold">Blog Posts</h1>
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
                    <div
                      key={blog.id}
                      onClick={() => navigate(`/blog/${blog.id}`)}
                      className="cursor-pointer"
                    >
                      <ArticleCard
                        image={blog.cover_image}
                        title={blog.title}
                        description={blog.content.substring(0, 200) + "..."}
                      />
                      <div className="flex items-center gap-4 mt-2 ml-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLike(blog.id!);
                          }}
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              userLikes.has(blog.id!)
                                ? "fill-current text-red-500"
                                : ""
                            }`}
                          />
                          {blog.likes_count || 0}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          {blog.comments_count || 0}
                        </Button>
                        {blog.is_featured && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                            Featured
                          </span>
                        )}
                        <div className="flex gap-2 flex-wrap">
                          {blog.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="bg-secondary px-2 py-1 rounded text-sm"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))
                )}
                {filteredBlogs.length > 0 && (
                  <button className="mt-4 mx-auto block bg-primary hover:bg-primary/80 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-full">
                    Load More
                  </button>
                )}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar Section */}
          <aside className="w-full lg:w-1/4 space-y-6">
            {/* Social Follow */}
            <div className="bg-blue-100 rounded-lg p-6">
              <h3 className="font-bold text-lg">Follow us</h3>
              <div className="flex items-center justify-start gap-4 mt-4">
                {[
                  { bgColor: "bg-blue-700", icon: "facebook" },
                  { bgColor: "bg-red-600", icon: "youtube" },
                  { bgColor: "bg-blue-500", icon: "instagram" },
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`${social.bgColor} text-white p-3 rounded-full flex items-center justify-center`}
                  >
                    {social.icon === "facebook" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-facebook"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    )}
                    {social.icon === "youtube" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-youtube"
                      >
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                        <path d="m10 15 5-3-5-3z" />
                      </svg>
                    )}
                    {social.icon === "instagram" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Advertisement Section */}
            {ads.length > 0 && (
              <div className="mb-6">
                <AdvertisementBanner
                  advertisements={ads.map((ad) => ({
                    imageUrl: ad.image_url,
                    altText: ad.title,
                    link: ad.link_url,
                  }))}
                />
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}

export default Home;
