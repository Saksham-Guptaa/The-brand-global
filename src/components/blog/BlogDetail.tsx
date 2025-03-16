import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Blog, BlogComment } from "@/types/blog";
import {
  getBlogById,
  getBlogComments,
  addComment,
  likeBlog,
  unlikeBlog,
  getAllPublishedBlogs,
} from "@/lib/blog";
import { getCurrentUser } from "@/lib/auth";

export default function BlogDetail() {
  const { id } = useParams();
  const { toast } = useToast();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userLikes, setUserLikes] = useState<boolean>(false);
  const [featuredBlogs, setFeaturedBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadBlogData();
      loadComments();
      checkCurrentUser();
      loadFeaturedBlogs();
    }
  }, [id]);

  const loadBlogData = async () => {
    if (!id) return;
    const { blog: fetchedBlog } = await getBlogById(id);
    if (fetchedBlog) setBlog(fetchedBlog);
    setLoading(false);
  };

  const loadComments = async () => {
    if (!id) return;
    const { comments: fetchedComments } = await getBlogComments(id);
    if (fetchedComments) setComments(fetchedComments);
  };

  const loadFeaturedBlogs = async () => {
    const { blogs } = await getAllPublishedBlogs("featured");
    if (blogs) setFeaturedBlogs(blogs.filter((b) => b.id !== id).slice(0, 3));
  };

  const checkCurrentUser = async () => {
    const { user } = await getCurrentUser();
    setCurrentUser(user);
  };

  const handleComment = async () => {
    if (!currentUser || !id || !newComment.trim()) {
      toast({
        title: "Error",
        description: currentUser
          ? "Please enter a comment"
          : "Please login to comment",
        variant: "destructive",
      });
      return;
    }

    const { comment, error } = await addComment(id, currentUser.id, newComment);
    if (error) {
      toast({
        title: "Error",
        description: "Failed to add comment",
        variant: "destructive",
      });
      return;
    }

    if (comment) {
      setComments([...comments, comment]);
      setNewComment("");
      loadBlogData(); // Refresh comment count
    }
  };

  const handleLike = async () => {
    if (!currentUser || !id) {
      toast({
        title: "Error",
        description: "Please login to like blogs",
        variant: "destructive",
      });
      return;
    }

    try {
      if (userLikes) {
        await unlikeBlog(id, currentUser.id);
        setUserLikes(false);
      } else {
        await likeBlog(id, currentUser.id);
        setUserLikes(true);
      }
      loadBlogData(); // Refresh like count
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update like",
        variant: "destructive",
      });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Blog Content */}
        <div className="md:col-span-2">
          <Card className="p-6">
            {blog.cover_image && (
              <img
                src={blog.cover_image}
                alt={blog.title}
                className="w-full h-[300px] object-cover rounded-md mb-6"
              />
            )}
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

            <div className="flex gap-2 mb-6">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-secondary px-2 py-1 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose max-w-none mb-6">
              {blog.content.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                onClick={handleLike}
              >
                <Heart
                  className={`w-4 h-4 ${userLikes ? "fill-current text-red-500" : ""}`}
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
            </div>
          </Card>

          {/* Comments Section */}
          <Card className="mt-6 p-6">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>

            <div className="flex gap-4 mb-6">
              <Textarea
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <Button className="flex-shrink-0" onClick={handleComment}>
                <Send className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-4">
              {comments.map((comment) => (
                <Card key={comment.id} className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium">{comment.user?.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {new Date(comment.created_at!).toLocaleDateString()}
                    </span>
                  </div>
                  <p>{comment.content}</p>
                </Card>
              ))}
            </div>
          </Card>
        </div>

        {/* Featured Blogs Sidebar */}
        <div>
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Featured Blogs</h2>
            <div className="space-y-4">
              {featuredBlogs.map((blog) => (
                <Card key={blog.id} className="p-4">
                  {blog.cover_image && (
                    <img
                      src={blog.cover_image}
                      alt={blog.title}
                      className="w-full h-32 object-cover rounded-md mb-2"
                    />
                  )}
                  <h3 className="font-semibold mb-2">{blog.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {blog.content.substring(0, 100)}...
                  </p>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
