import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BlogFormData } from "@/types/blog";
import { createBlog, getBlogById, updateBlog } from "@/lib/blog";
import { getCurrentUser } from "@/lib/auth";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BlogEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [blogData, setBlogData] = useState<BlogFormData>({
    title: "",
    content: "",
    tags: [],
    genre: "",
  });

  useEffect(() => {
    const loadBlog = async () => {
      if (!id) return;

      try {
        const { blog, error } = await getBlogById(id);
        if (error) throw error;
        if (blog) {
          setBlogData({
            title: blog.title,
            content: blog.content,
            tags: blog.tags || [],
            genre: blog.genre || "",
          });
        }
      } catch (error) {
        console.error("Error loading blog:", error);
        toast({
          title: "Error",
          description: "Failed to load blog",
          variant: "destructive",
        });
      }
    };

    loadBlog();
  }, [id, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { user, error: userError } = await getCurrentUser();
      if (userError || !user) throw new Error("User not authenticated");

      let response;
      if (id) {
        response = await updateBlog(id, blogData);
      } else {
        response = await createBlog(blogData, user.id);
      }

      if (response.error) throw response.error;

      toast({
        title: "Success",
        description: id
          ? "Blog updated and submitted for review"
          : "Blog submitted for review",
      });

      navigate("/writer");
    } catch (error) {
      console.error("Error saving blog:", error);
      toast({
        title: "Error",
        description: "Failed to save blog",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(",").map((tag) => tag.trim());
    setBlogData((prev) => ({ ...prev, tags }));
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">
          {id ? "Edit Blog" : "Create New Blog"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Title</label>
            <Input
              placeholder="Blog Title"
              value={blogData.title}
              onChange={(e) =>
                setBlogData((prev) => ({ ...prev, title: e.target.value }))
              }
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Genre</label>
            <Select
              value={blogData.genre}
              onValueChange={(value) =>
                setBlogData((prev) => ({ ...prev, genre: value }))
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="lifestyle">Lifestyle</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="health">Health</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Cover Image</label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setBlogData((prev) => ({ ...prev, coverImage: file }));
                }
              }}
              required={!id} // Only required for new blogs
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Tags (comma-separated)
            </label>
            <Input
              placeholder="technology, web, development"
              value={blogData.tags.join(", ")}
              onChange={handleTagsChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Content</label>
            <Textarea
              placeholder="Write your blog content here..."
              value={blogData.content}
              onChange={(e) =>
                setBlogData((prev) => ({ ...prev, content: e.target.value }))
              }
              className="min-h-[300px]"
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit for Review"}
          </Button>
        </form>
      </Card>
    </div>
  );
}
