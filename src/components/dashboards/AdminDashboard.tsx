import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { getAllUsers, updateUserStatus } from "@/lib/auth";
import { getBlogsByStatus } from "@/lib/blog";
import { createAd, updateAd, deleteAd, getAllAds } from "@/lib/ads";
import { Ad, AdFormData } from "@/types/ad";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserRole } from "@/types/auth";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  is_active: boolean;
  created_at: string;
}

interface Stats {
  totalUsers: number;
  activeUsers: number;
  totalBlogs: number;
  pendingBlogs: number;
  publishedBlogs: number;
}

export default function AdminDashboard() {
  const [ads, setAds] = useState<Ad[]>([]);
  const [newAd, setNewAd] = useState<AdFormData>({
    title: "",
    image: null as unknown as File,
    link_url: "",
  });
  const [adDialogOpen, setAdDialogOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [stats, setStats] = useState<Stats>({
    totalUsers: 0,
    activeUsers: 0,
    totalBlogs: 0,
    pendingBlogs: 0,
    publishedBlogs: 0,
  });
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadDashboardData();
    loadAds();
  }, []);

  const loadAds = async () => {
    const { ads: fetchedAds } = await getAllAds();
    if (fetchedAds) setAds(fetchedAds);
  };

  const handleCreateAd = async () => {
    if (!newAd.title || !newAd.image || !newAd.link_url) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const { ad, error } = await createAd(newAd);
    if (error) {
      toast({
        title: "Error",
        description: "Failed to create ad",
        variant: "destructive",
      });
      return;
    }

    if (ad) {
      setAds([ad, ...ads]);
      setNewAd({ title: "", image: null as unknown as File, link_url: "" });
      setAdDialogOpen(false);
      toast({
        title: "Success",
        description: "Ad created successfully",
      });
    }
  };

  const handleToggleAdStatus = async (ad: Ad) => {
    try {
      const { success, error } = await updateAd(ad.id!, {
        is_active: !ad.is_active,
      });
      if (error) throw error;
      if (success) {
        await loadAds(); // Reload all ads to get fresh data
        toast({
          title: "Success",
          description: `Ad ${ad.is_active ? "deactivated" : "activated"} successfully`,
        });
      }
    } catch (error) {
      console.error("Error toggling ad status:", error);
      toast({
        title: "Error",
        description: "Failed to update ad status",
        variant: "destructive",
      });
    }
  };

  const handleDeleteAd = async (id: string) => {
    try {
      const { success, error } = await deleteAd(id);
      if (error) throw error;
      if (success) {
        await loadAds(); // Reload all ads to get fresh data
        toast({
          title: "Success",
          description: "Ad deleted successfully",
        });
      }
    } catch (error) {
      console.error("Error deleting ad:", error);
      toast({
        title: "Error",
        description: "Failed to delete ad",
        variant: "destructive",
      });
    }
  };

  const loadDashboardData = async () => {
    try {
      // Load users
      const { users: usersList, error: usersError } = await getAllUsers();
      if (usersError) throw usersError;

      if (usersList) {
        setUsers(usersList);
        setStats((prev) => ({
          ...prev,
          totalUsers: usersList.length,
          activeUsers: usersList.filter((u) => u.is_active).length,
        }));
      }

      // Load blog stats
      const [pendingResponse, publishedResponse] = await Promise.all([
        getBlogsByStatus("pending"),
        getBlogsByStatus("published"),
      ]);

      setStats((prev) => ({
        ...prev,
        pendingBlogs: pendingResponse.blogs?.length || 0,
        publishedBlogs: publishedResponse.blogs?.length || 0,
        totalBlogs:
          (pendingResponse.blogs?.length || 0) +
          (publishedResponse.blogs?.length || 0),
      }));
    } catch (error) {
      console.error("Error loading dashboard data:", error);
      toast({
        title: "Error",
        description: "Failed to load dashboard data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUserStatusUpdate = async (userId: string, isActive: boolean) => {
    try {
      const { success, error } = await updateUserStatus(userId, isActive);
      if (error) throw error;

      if (success) {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === userId ? { ...user, is_active: isActive } : user,
          ),
        );

        toast({
          title: "Success",
          description: `User ${isActive ? "activated" : "deactivated"} successfully`,
        });

        // Update stats
        setStats((prev) => ({
          ...prev,
          activeUsers: isActive ? prev.activeUsers + 1 : prev.activeUsers - 1,
        }));
      }
    } catch (error) {
      console.error("Error updating user status:", error);
      toast({
        title: "Error",
        description: "Failed to update user status",
        variant: "destructive",
      });
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="p-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            Users
          </h3>
          <div className="text-2xl font-bold">{stats.totalUsers}</div>
          <p className="text-sm text-muted-foreground">
            {stats.activeUsers} active
          </p>
        </Card>

        <Card className="p-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            Total Blogs
          </h3>
          <div className="text-2xl font-bold">{stats.totalBlogs}</div>
          <p className="text-sm text-muted-foreground">
            {stats.pendingBlogs} pending review
          </p>
        </Card>

        <Card className="p-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            Published Blogs
          </h3>
          <div className="text-2xl font-bold">{stats.publishedBlogs}</div>
        </Card>
      </div>

      {/* User Management */}
      <Card className="mt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="capitalize">{user.role}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.is_active
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.is_active ? "Active" : "Inactive"}
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    variant={user.is_active ? "destructive" : "default"}
                    onClick={() =>
                      handleUserStatusUpdate(user.id, !user.is_active)
                    }
                    size="sm"
                  >
                    {user.is_active ? "Deactivate" : "Activate"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Ad Management */}
      <Card className="mt-6 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Ad Management</h2>
          <Dialog open={adDialogOpen} onOpenChange={setAdDialogOpen}>
            <DialogTrigger asChild>
              <Button>Create New Ad</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Ad</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  placeholder="Ad Title"
                  value={newAd.title}
                  onChange={(e) =>
                    setNewAd((prev) => ({ ...prev, title: e.target.value }))
                  }
                />
                <Input
                  placeholder="Link URL"
                  value={newAd.link_url}
                  onChange={(e) =>
                    setNewAd((prev) => ({ ...prev, link_url: e.target.value }))
                  }
                />
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setNewAd((prev) => ({ ...prev, image: file }));
                    }
                  }}
                />
                <Button onClick={handleCreateAd}>Create Ad</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ads.map((ad) => (
            <Card key={ad.id} className="p-4">
              <img
                src={ad.image_url}
                alt={ad.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold mb-2">{ad.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {ad.link_url}
              </p>
              <div className="flex justify-between items-center">
                <Button
                  variant={ad.is_active ? "destructive" : "default"}
                  onClick={() => handleToggleAdStatus(ad)}
                >
                  {ad.is_active ? "Deactivate" : "Activate"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleDeleteAd(ad.id!)}
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
