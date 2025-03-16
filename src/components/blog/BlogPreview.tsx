import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById } from "@/lib/blog";
import { Blog } from "@/types/blog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function BlogPreview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) loadBlog(id);
  }, [id]);

  const loadBlog = async (blogId: string) => {
    const { blog, error } = await getBlogById(blogId);
    if (blog) setBlog(blog);
    setLoading(false);
  };

  if (loading) return <div>Loading...</div>;
  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Button variant="ghost" className="mb-6" onClick={() => navigate(-1)}>
        <ArrowLeft className="w-4 h-4 mr-2" /> Back
      </Button>

      <Card className="overflow-hidden">
        {blog.cover_image && (
          <img
            src={blog.cover_image}
            alt={blog.title}
            className="w-full h-[300px] object-cover"
          />
        )}

        <div className="p-6">
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

          <div className="prose max-w-none">
            {blog.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
