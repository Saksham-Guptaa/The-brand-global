import { supabase } from "./supabase";
import { Blog, BlogFormData, BlogComment, BlogLike } from "@/types/blog";
import { uploadToCloudinary } from "./cloudinary";

export const getBlogById = async (
  id: string,
): Promise<{ blog: Blog | null; error: any }> => {
  try {
    const { data: blogData, error } = await supabase
      .from("blogs")
      .select(
        `
        *,
        likes_count: blog_likes(count),
        comments_count: blog_comments(count)
      `,
      )
      .eq("id", id)
      .single();

    if (error) throw error;

    // Transform the data to match the Blog interface
    const blog = blogData
      ? {
          ...blogData,
          likes_count: blogData.likes_count?.[0]?.count || 0,
          comments_count: blogData.comments_count?.[0]?.count || 0,
        }
      : null;

    return { blog, error: null };
  } catch (error) {
    return { blog: null, error };
  }
};

export const getBlogComments = async (
  blogId: string,
): Promise<{ comments: BlogComment[] | null; error: any }> => {
  try {
    const { data: comments, error } = await supabase
      .from("blog_comments")
      .select(`*, user:profiles(name, email)`)
      .eq("blog_id", blogId)
      .order("created_at", { ascending: true });

    if (error) throw error;
    return { comments, error: null };
  } catch (error) {
    return { comments: null, error };
  }
};

export const addComment = async (
  blogId: string,
  userId: string,
  content: string,
): Promise<{ comment: BlogComment | null; error: any }> => {
  try {
    const { data: comment, error } = await supabase
      .from("blog_comments")
      .insert({ blog_id: blogId, user_id: userId, content })
      .select(`*, user:profiles(name, email)`)
      .single();

    if (error) throw error;
    return { comment, error: null };
  } catch (error) {
    return { comment: null, error };
  }
};

export const likeBlog = async (
  blogId: string,
  userId: string,
): Promise<{ success: boolean; error: any }> => {
  try {
    const { error } = await supabase
      .from("blog_likes")
      .insert({ blog_id: blogId, user_id: userId });

    if (error) throw error;
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error };
  }
};

export const unlikeBlog = async (
  blogId: string,
  userId: string,
): Promise<{ success: boolean; error: any }> => {
  try {
    const { error } = await supabase
      .from("blog_likes")
      .delete()
      .eq("blog_id", blogId)
      .eq("user_id", userId);

    if (error) throw error;
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error };
  }
};

export const getBlogLikes = async (
  userId: string,
): Promise<{ likes: BlogLike[] | null; error: any }> => {
  try {
    const { data: likes, error } = await supabase
      .from("blog_likes")
      .select("*")
      .eq("user_id", userId);

    if (error) throw error;
    return { likes, error: null };
  } catch (error) {
    return { likes: null, error };
  }
};

export const createBlog = async (
  blogData: BlogFormData,
  authorId: string,
): Promise<{ blog: Blog | null; error: any }> => {
  try {
    let coverImageUrl = "";
    if (blogData.coverImage) {
      coverImageUrl = await uploadToCloudinary(blogData.coverImage);
    }

    const { data: blog, error } = await supabase
      .from("blogs")
      .insert({
        title: blogData.title,
        content: blogData.content,
        cover_image: coverImageUrl,
        tags: blogData.tags,
        genre: blogData.genre,
        author_id: authorId,
        status: "pending",
      })
      .select()
      .single();

    if (error) throw error;
    return { blog, error: null };
  } catch (error) {
    return { blog: null, error };
  }
};

export const updateBlog = async (
  id: string,
  blogData: BlogFormData,
): Promise<{ blog: Blog | null; error: any }> => {
  try {
    let coverImageUrl;
    if (blogData.coverImage) {
      coverImageUrl = await uploadToCloudinary(blogData.coverImage);
    }

    const updateData: Partial<Blog> = {
      title: blogData.title,
      content: blogData.content,
      tags: blogData.tags,
      genre: blogData.genre,
      status: "pending", // Reset to pending when updated
    };

    if (coverImageUrl) {
      updateData.cover_image = coverImageUrl;
    }

    const { data: blog, error } = await supabase
      .from("blogs")
      .update(updateData)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return { blog, error: null };
  } catch (error) {
    return { blog: null, error };
  }
};

export const getBlogsByAuthor = async (
  authorId: string,
): Promise<{ blogs: Blog[] | null; error: any }> => {
  try {
    const { data: blogsData, error } = await supabase
      .from("blogs")
      .select(
        `
        *,
        likes_count: blog_likes(count),
        comments_count: blog_comments(count)
      `,
      )
      .eq("author_id", authorId)
      .order("created_at", { ascending: false });

    if (error) throw error;

    // Transform the data to match the Blog interface
    const blogs = blogsData?.map((blog) => ({
      ...blog,
      likes_count: blog.likes_count?.[0]?.count || 0,
      comments_count: blog.comments_count?.[0]?.count || 0,
    }));

    return { blogs, error: null };
  } catch (error) {
    return { blogs: null, error };
  }
};

export const getBlogsByStatus = async (
  status: Blog["status"],
): Promise<{ blogs: Blog[] | null; error: any }> => {
  try {
    const { data: blogsData, error } = await supabase
      .from("blogs")
      .select(
        `
        *,
        likes_count: blog_likes(count),
        comments_count: blog_comments(count)
      `,
      )
      .eq("status", status)
      .order("created_at", { ascending: false });

    if (error) throw error;

    // Transform the data to match the Blog interface
    const blogs = blogsData?.map((blog) => ({
      ...blog,
      likes_count: blog.likes_count?.[0]?.count || 0,
      comments_count: blog.comments_count?.[0]?.count || 0,
    }));

    return { blogs, error: null };
  } catch (error) {
    return { blogs: null, error };
  }
};

export const updateBlogStatus = async (
  blogId: string,
  status: Blog["status"],
  reviewComment?: string,
  isFeatured?: boolean,
): Promise<{ success: boolean; error: any }> => {
  try {
    const updateData: any = {
      status,
      updated_at: new Date().toISOString(),
    };

    if (reviewComment !== undefined) {
      updateData.review_comment = reviewComment;
    }

    if (isFeatured !== undefined) {
      updateData.is_featured = isFeatured;
    }

    const { error } = await supabase
      .from("blogs")
      .update(updateData)
      .eq("id", blogId);

    if (error) throw error;
    return { success: true, error: null };
  } catch (error) {
    console.error("Error updating blog status:", error);
    return { success: false, error };
  }
};

export const getAllPublishedBlogs = async (
  filter:
    | "latest"
    | "featured"
    | "most_liked"
    | "oldest"
    | "least_liked" = "latest",
): Promise<{ blogs: Blog[] | null; error: any }> => {
  try {
    let query = supabase
      .from("blogs")
      .select(
        `
        *,
        likes_count: blog_likes(count),
        comments_count: blog_comments(count)
      `,
      )
      .eq("status", "published");

    switch (filter) {
      case "featured":
        query = query.eq("is_featured", true);
        break;
      case "most_liked":
        query = query.order("likes_count", { ascending: false });
        break;
      case "least_liked":
        query = query.order("likes_count", { ascending: true });
        break;
      case "oldest":
        query = query.order("created_at", { ascending: true });
        break;
      default: // latest
        query = query.order("created_at", { ascending: false });
    }

    const { data: blogsData, error } = await query;

    if (error) throw error;

    // Transform the data to match the Blog interface
    const blogs = blogsData?.map((blog) => ({
      ...blog,
      likes_count: blog.likes_count?.[0]?.count || 0,
      comments_count: blog.comments_count?.[0]?.count || 0,
    }));

    return { blogs, error: null };
  } catch (error) {
    return { blogs: null, error };
  }
};
