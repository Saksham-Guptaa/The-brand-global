export interface Blog {
  id?: string;
  title: string;
  content: string;
  cover_image?: string;
  tags: string[];
  genre: string;
  author_id: string;
  status: "draft" | "pending" | "published" | "rejected" | "needs_revision";
  review_comment?: string;
  created_at?: string;
  updated_at?: string;
  likes_count?: number;
  comments_count?: number;
  is_featured?: boolean;
}

export interface BlogComment {
  id?: string;
  blog_id: string;
  user_id: string;
  content: string;
  created_at?: string;
  user?: {
    name: string;
    email: string;
  };
}

export interface BlogLike {
  blog_id: string;
  user_id: string;
  created_at?: string;
}

export interface BlogFormData {
  title: string;
  content: string;
  tags: string[];
  genre: string;
  coverImage?: File;
}
