import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Blog } from "@/types/blog";
import { getCurrentUser } from "@/lib/auth";
import { getBlogsByAuthor } from "@/lib/blog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function WriterDashboard() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<{ [key: string]: Blog[] }>({
    draft: [],
    pending: [],
    needs_revision: [],
    published: [],
    rejected: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWriterBlogs();
  }, []);

  const loadWriterBlogs = async () => {
    const { user } = await getCurrentUser();
    if (!user) return;

    const { blogs: authorBlogs } = await getBlogsByAuthor(user.id);
    if (!authorBlogs) return;

    // Group blogs by status
    const grouped = authorBlogs.reduce(
      (acc, blog) => {
        const status = blog.status;
        if (!acc[status]) acc[status] = [];
        acc[status].push(blog);
        return acc;
      },
      {} as { [key: string]: Blog[] },
    );

    setBlogs(grouped);
    setLoading(false);
  };

  const BlogCard = ({ blog }: { blog: Blog }) => (
    <Card className="p-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
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
              <p className="text-sm font-medium">Editor's Review:</p>
              <p className="text-sm text-muted-foreground">
                {blog.review_comment}
              </p>
            </div>
          )}
          <div className="text-sm text-muted-foreground">
            Status:{" "}
            <span className="capitalize">{blog.status.replace("_", " ")}</span>
          </div>
        </div>
        {blog.status === "needs_revision" && (
          <Button
            onClick={() => navigate(`/writer/blog/edit/${blog.id}`)}
            className="ml-4"
          >
            Edit Blog
          </Button>
        )}
      </div>
    </Card>
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Writer Dashboard</h1>
        <Button
          onClick={() => navigate("/writer/blog/new")}
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Write New Blog
        </Button>
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
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
          <TabsTrigger value="draft">
            Drafts ({blogs.draft?.length || 0})
          </TabsTrigger>
        </TabsList>

        {Object.entries(blogs).map(([status, statusBlogs]) => (
          <TabsContent key={status} value={status} className="space-y-4">
            {statusBlogs?.length === 0 ? (
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
