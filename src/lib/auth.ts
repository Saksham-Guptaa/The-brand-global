import { supabase } from "./supabase";
import { SignUpData, LoginData } from "@/types/auth";

export const signUp = async ({
  name,
  email,
  phone,
  password,
  role,
  adminCode,
}: SignUpData) => {
  // Check admin code if role is admin
  if (role === "admin" && adminCode !== "tbgadminaccess") {
    return {
      user: null,
      error: new Error("Invalid admin access code"),
    };
  }
  try {
    // 1. Create auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          phone,
          role,
        },
      },
    });

    if (authError) throw authError;

    // 2. Create user profile in profiles table
    if (authData.user) {
      const { error: profileError } = await supabase.from("profiles").upsert([
        {
          id: authData.user.id,
          name,
          email,
          phone,
          role,
          is_active: true,
        },
      ]);

      if (profileError) {
        console.error("Profile creation error:", profileError);
        throw profileError;
      }
    }

    return { user: authData.user, error: null };
  } catch (error) {
    return { user: null, error };
  }
};

export const login = async ({ email, password }: LoginData) => {
  try {
    // First check if the user exists and is active
    const { data: profiles, error: profileError } = await supabase
      .from("profiles")
      .select("is_active")
      .eq("email", email)
      .single();

    if (profileError && profileError.code !== "PGRST116") {
      console.error("Profile check error:", profileError);
      throw profileError;
    }

    // If profile exists and is not active, prevent login
    if (profiles && !profiles.is_active) {
      return {
        user: null,
        error: new Error(
          "Your account has been deactivated. Please contact an administrator.",
        ),
      };
    }

    // Proceed with login
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    // Sync profile data
    if (data.user) {
      const { error: syncError } = await supabase.from("profiles").upsert([
        {
          id: data.user.id,
          email: data.user.email,
          role: data.user.user_metadata.role,
        },
      ]);

      if (syncError) {
        console.error("Profile sync error:", syncError);
        throw syncError;
      }
    }

    return { user: data.user, error: null };
  } catch (error) {
    return { user: null, error };
  }
};

export const logout = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { error: null };
  } catch (error) {
    return { error };
  }
};

export const updateUserStatus = async (userId: string, isActive: boolean) => {
  try {
    const { error } = await supabase
      .from("profiles")
      .update({ is_active: isActive })
      .eq("id", userId);

    if (error) throw error;
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error };
  }
};

export const getAllUsers = async () => {
  try {
    const { data: users, error } = await supabase
      .from("profiles")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return { users, error: null };
  } catch (error) {
    return { users: null, error };
  }
};

export const getCurrentUser = async () => {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error) throw error;
    return { user, error: null };
  } catch (error) {
    return { user: null, error };
  }
};
