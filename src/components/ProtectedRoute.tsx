import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getCurrentUser } from "@/lib/auth";
import { UserRole } from "@/types/auth";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: UserRole[];
}

export default function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { user, error } = await getCurrentUser();
        if (error || !user) {
          setHasAccess(false);
          setLoading(false);
          return;
        }

        // Check if user is active
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("is_active")
          .eq("id", user.id)
          .single();

        if (profileError) {
          console.error("Error fetching profile:", profileError);
          setHasAccess(false);
          setLoading(false);
          return;
        }

        if (!profile?.is_active) {
          toast({
            title: "Account Deactivated",
            description:
              "Your account has been deactivated. Please contact an administrator.",
            variant: "destructive",
          });
          // Sign out the user
          await supabase.auth.signOut();
          setHasAccess(false);
          setLoading(false);
          return;
        }

        // Check role
        if (allowedRoles.includes(user.user_metadata.role as UserRole)) {
          setHasAccess(true);
        } else {
          setHasAccess(false);
        }
      } catch (error) {
        console.error("Auth check error:", error);
        setHasAccess(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [allowedRoles, toast]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (!hasAccess) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
