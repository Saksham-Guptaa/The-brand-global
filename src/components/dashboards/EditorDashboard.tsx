import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBlogsByStatus, updateBlogStatus } from "@/lib/blog";
import { Blog } from "@/types/blog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function EditorDashboard() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<{ [key: string]: Blog[] }>({
    pending: [],
    needs_revision: [],
    published: [],
    rejected: [],
  });
  const [loading, setLoading] = useState(true);
  const [reviewComment, setReviewComment] = useState("");
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadAllBlogs();
  }, []);

  const loadAllBlogs = async () => {
    setLoading(true);
    const statuses: Blog["status"][] = [
      "pending",
      "needs_revision",
      "published",
      "rejected",
    ];
    const blogsByStatus: { [key: string]: Blog[] } = {};

    for (const status of statuses) {
      const { blogs, error } = await getBlogsByStatus(status);
      if (error) {
        toast({
          title: "Error",
          description: `Failed to load ${status} blogs`,
          variant: "destructive",
        });
      } else {
        blogsByStatus[status] = blogs || [];
      }
    }

    setBlogs(blogsByStatus);
    setLoading(false);
  };

  const handleStatusUpdate = async (
    blogId: string,
    status: Blog["status"],
    comment?: string,
    isFeatured?: boolean,
  ) => {
    try {
      const { success, error } = await updateBlogStatus(
        blogId,
        status,
        comment,
        isFeatured,
      );
      if (error) throw error;
      if (success) {
        toast({
          title: "Success",
          description:
            isFeatured !== undefined
              ? `Blog ${isFeatured ? "featured" : "unfeatured"} successfully`
              : `Blog ${status === "published" ? "published" : status === "rejected" ? "rejected" : "sent back for revision"}`,
        });
        loadAllBlogs();
        setReviewComment("");
        setSelectedBlog(null);
      } else {
        toast({
          title: "Error",
          description: "Failed to update blog status",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  const BlogCard = ({ blog }: { blog: Blog }) => (
    <Card className="p-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h2
              className="text-xl font-semibold hover:text-blue-600 cursor-pointer"
              onClick={() => navigate(`/editor/blog/${blog.id}`)}
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
          {blog.review_comment && (
            <div className="bg-muted p-3 rounded mb-4">
              <p className="text-sm font-medium">Previous Review:</p>
              <p className="text-sm text-muted-foreground">
                {blog.review_comment}
              </p>
            </div>
          )}
        </div>
        <div className="flex gap-2 ml-4">
          {(blog.status === "pending" || blog.status === "needs_revision") && (
            <>
              <Button
                variant="default"
                onClick={() => handleStatusUpdate(blog.id!, "published")}
              >
                Approve
              </Button>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedBlog(blog);
                      setDialogOpen(true);
                    }}
                  >
                    Request Changes
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Review Comments</DialogTitle>
                  </DialogHeader>
                  <Textarea
                    placeholder="Enter your review comments..."
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <div className="flex justify-end gap-2 mt-4">
                    <Button
                      variant="destructive"
                      onClick={() => {
                        if (selectedBlog) {
                          handleStatusUpdate(
                            selectedBlog.id!,
                            "rejected",
                            reviewComment,
                          );
                          setDialogOpen(false);
                        }
                      }}
                    >
                      Reject
                    </Button>
                    <Button
                      variant="default"
                      onClick={() => {
                        if (selectedBlog) {
                          handleStatusUpdate(
                            selectedBlog.id!,
                            "needs_revision",
                            reviewComment,
                          );
                          setDialogOpen(false);
                        }
                      }}
                    >
                      Send for Revision
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </>
          )}
          {blog.status === "published" && (
            <div className="flex gap-2">
              <Button
                variant="destructive"
                onClick={() => handleStatusUpdate(blog.id!, "rejected")}
              >
                Unpublish
              </Button>
              <Button
                variant={blog.is_featured ? "destructive" : "outline"}
                onClick={() =>
                  handleStatusUpdate(
                    blog.id!,
                    "published",
                    undefined,
                    !blog.is_featured,
                  )
                }
              >
                {blog.is_featured ? "Unfeature" : "Feature"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Editor Dashboard</h1>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="pending">
            Pending ({blogs.pending?.length || 0})
          </TabsTrigger>
          <TabsTrigger value="needs_revision">
            Needs Revision ({blogs.needs_revision?.length || 0})
          </TabsTrigger>
          <TabsTrigger value="published">
            Published ({blogs.published?.length || 0})
          </TabsTrigger>
          <TabsTrigger value="rejected">
            Rejected ({blogs.rejected?.length || 0})
          </TabsTrigger>
        </TabsList>

        {Object.entries(blogs).map(([status, statusBlogs]) => (
          <TabsContent key={status} value={status} className="space-y-4">
            {statusBlogs.length === 0 ? (
              <Card className="p-6 text-center text-muted-foreground">
                No {status.replace("_", " ")} blogs
              </Card>
            ) : (
              statusBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
