export type UserRole = "editor" | "writer" | "admin" | "reader";

export interface SignUpData {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: UserRole;
  adminCode?: string;
}

export interface LoginData {
  email: string;
  password: string;
}
