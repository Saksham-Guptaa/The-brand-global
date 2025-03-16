export interface Ad {
  id?: string;
  title: string;
  image_url: string;
  link_url: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface AdFormData {
  title: string;
  image: File;
  link_url: string;
}
