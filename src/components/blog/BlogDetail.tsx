import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  MessageCircle,
  Send,
  Share2,
  Bookmark,
  Calendar,
  Clock,
  User,
  ChevronLeft,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
} from "lucide-react";
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
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [bookmarked, setBookmarked] = useState<boolean>(false);
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
    if (blogs) {
      const filtered = blogs.filter((b) => b.id !== id);
      setFeaturedBlogs(filtered.slice(0, 3));

      // Get related blogs based on tags
      if (blog && blog.tags) {
        const related = filtered
          .filter((b) => b.tags.some((tag) => blog.tags.includes(tag)))
          .slice(0, 3);
        setRelatedBlogs(related);
      }
    }
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

  const handleBookmark = () => {
    // In a real app, this would save to a database
    setBookmarked(!bookmarked);
    toast({
      title: bookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      description: bookmarked
        ? "This article has been removed from your bookmarks"
        : "This article has been saved to your bookmarks",
    });
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(blog?.title || "")}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        toast({
          title: "Link copied",
          description: "Article link has been copied to clipboard",
        });
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank");
    }
  };

  if (loading)
    return (
      <div className="container mx-auto p-6 flex justify-center items-center min-h-[50vh]">
        <div className="animate-pulse text-xl">Loading article...</div>
      </div>
    );

  if (!blog)
    return (
      <div className="container mx-auto p-6 flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
        <p className="text-muted-foreground mb-6">
          The article you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/" className="flex items-center text-primary hover:underline">
          <ChevronLeft className="w-4 h-4 mr-2" /> Back to home
        </Link>
      </div>
    );

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Estimate reading time
  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  };

  const readingTime = blog ? calculateReadingTime(blog.content) : 0;

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <Link
          to="/"
          className="flex items-center text-primary hover:underline mb-4"
        >
          <ChevronLeft className="w-4 h-4 mr-2" /> Back to articles
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Blog Content */}
        <div className="lg:col-span-2">
          <article>
            {/* Hero section */}
            <div className="mb-8">
              {blog.cover_image && (
                <img
                  src={blog.cover_image}
                  alt={blog.title}
                  className="w-full h-[400px] object-cover rounded-lg shadow-md mb-6"
                />
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>
                    {formatDate(blog.created_at || new Date().toISOString())}
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{readingTime} min read</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{blog.author?.name || "Anonymous"}</span>
                </div>
              </div>
            </div>

            {/* Author info */}
            <div className="flex items-center p-4 bg-muted rounded-lg mb-8">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage
                  src={blog.author?.avatar || ""}
                  alt={blog.author?.name || "Author"}
                />
                <AvatarFallback>
                  {blog.author?.name?.charAt(0) || "A"}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">
                  {blog.author?.name || "Anonymous"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {blog.author?.bio || "Writer at Business Gazette"}
                </p>
              </div>
            </div>

            {/* Blog content */}
            <div className="prose prose-lg max-w-none mb-8">
              {blog.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap justify-between items-center py-4 border-t border-b mb-8">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={handleLike}
                >
                  <Heart
                    className={`w-5 h-5 ${userLikes ? "fill-current text-red-500" : ""}`}
                  />
                  <span>{blog.likes_count || 0} Likes</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{blog.comments_count || 0} Comments</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={handleBookmark}
                >
                  <Bookmark
                    className={`w-5 h-5 ${bookmarked ? "fill-current" : ""}`}
                  />
                  <span>Save</span>
                </Button>
              </div>

              <div className="flex items-center gap-2 mt-4 sm:mt-0">
                <span className="text-sm text-muted-foreground mr-2">
                  Share:
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleShare("facebook")}
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleShare("twitter")}
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleShare("linkedin")}
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleShare("copy")}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          {relatedBlogs.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedBlogs.map((relatedBlog) => (
                  <Link to={`/blog/${relatedBlog.id}`} key={relatedBlog.id}>
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <div className="p-4">
                        {relatedBlog.cover_image && (
                          <img
                            src={relatedBlog.cover_image}
                            alt={relatedBlog.title}
                            className="w-full h-40 object-cover rounded-md mb-3"
                          />
                        )}
                        <h3 className="font-semibold mb-2">
                          {relatedBlog.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedBlog.content.substring(0, 120)}...
                        </p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Comments Section */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">
              Comments ({comments.length})
            </h2>

            <div className="flex gap-4 mb-8">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={currentUser?.avatar || ""}
                  alt={currentUser?.name || "User"}
                />
                <AvatarFallback>
                  {currentUser?.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea
                  placeholder={
                    currentUser
                      ? "Write a comment..."
                      : "Please login to comment"
                  }
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="mb-2"
                  disabled={!currentUser}
                />
                <Button onClick={handleComment} disabled={!currentUser}>
                  Post Comment
                </Button>
              </div>
            </div>

            <Separator className="my-6" />

            {comments.length > 0 ? (
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={comment.user?.avatar || ""}
                        alt={comment.user?.name || "User"}
                      />
                      <AvatarFallback>
                        {comment.user?.name?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-semibold">
                          {comment.user?.name || "Anonymous"}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {formatDate(
                            comment.created_at || new Date().toISOString(),
                          )}
                        </span>
                      </div>
                      <p className="text-sm">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p>No comments yet. Be the first to share your thoughts!</p>
              </div>
            )}
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Author Card */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">About the Author</h2>
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage
                  src={blog.author?.avatar || ""}
                  alt={blog.author?.name || "Author"}
                />
                <AvatarFallback>
                  {blog.author?.name?.charAt(0) || "A"}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold mb-2">
                {blog.author?.name || "Anonymous"}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {blog.author?.bio ||
                  "Writer at Business Gazette with expertise in business trends and market analysis."}
              </p>
              <Button variant="outline" size="sm" className="w-full">
                View All Articles
              </Button>
            </div>
          </Card>

          {/* Featured Blogs */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Featured Articles</h2>
            <div className="space-y-6">
              {featuredBlogs.map((featuredBlog) => (
                <Link
                  to={`/blog/${featuredBlog.id}`}
                  key={featuredBlog.id}
                  className="block group"
                >
                  <div className="flex gap-4">
                    {featuredBlog.cover_image && (
                      <img
                        src={featuredBlog.cover_image}
                        alt={featuredBlog.title}
                        className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                      />
                    )}
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {featuredBlog.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {formatDate(
                          featuredBlog.created_at || new Date().toISOString(),
                        )}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Button variant="outline" size="sm" className="w-full">
                View All Featured
              </Button>
            </div>
          </Card>

          {/* Popular Tags */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Popular Tags</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Business",
                "Technology",
                "Finance",
                "Marketing",
                "Leadership",
                "Startups",
                "Innovation",
                "Economy",
              ].map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="cursor-pointer hover:bg-secondary transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Newsletter Signup */}
          <Card className="p-6 bg-primary/5">
            <h2 className="text-xl font-bold mb-2">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest articles and business updates delivered to your
              inbox.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 border rounded-md text-sm"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
