import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserRole, SignUpData, LoginData } from "@/types/auth";
import { signUp, login } from "@/lib/auth";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AuthTester() {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState<Partial<SignUpData>>({});
  const [loginData, setLoginData] = useState<Partial<LoginData>>({});
  const [result, setResult] = useState<string>("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await signUp(signUpData as SignUpData);
    setResult(JSON.stringify(response, null, 2));

    if (response.user) {
      const role = response.user.user_metadata.role;
      redirectBasedOnRole(role);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await login(loginData as LoginData);
    setResult(JSON.stringify(response, null, 2));

    if (response.user) {
      const role = response.user.user_metadata.role;
      redirectBasedOnRole(role);
    }
  };

  const redirectBasedOnRole = (role: UserRole) => {
    switch (role) {
      case "editor":
        navigate("/editor");
        break;
      case "writer":
        navigate("/writer");
        break;
      case "admin":
        navigate("/admin");
        break;
      case "reader":
        navigate("/");
        break;
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Auth API Tester</h1>

      <Tabs defaultValue="signup" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>

        <TabsContent value="signup">
          <Card className="p-4">
            <form onSubmit={handleSignUp} className="space-y-4">
              <Input
                placeholder="Name"
                onChange={(e) =>
                  setSignUpData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  setSignUpData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <Input
                placeholder="Phone"
                onChange={(e) =>
                  setSignUpData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setSignUpData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
              <div className="space-y-4">
                <Select
                  onValueChange={(value) =>
                    setSignUpData((prev) => ({
                      ...prev,
                      role: value as UserRole,
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="reader">Reader</SelectItem>
                    <SelectItem value="writer">Writer</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>

                {signUpData.role === "admin" && (
                  <Input
                    type="password"
                    placeholder="Admin Access Code"
                    onChange={(e) =>
                      setSignUpData((prev) => ({
                        ...prev,
                        adminCode: e.target.value,
                      }))
                    }
                    required
                  />
                )}
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="login">
          <Card className="p-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  setLoginData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setLoginData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Card>
        </TabsContent>
      </Tabs>

      {/* {result && (
        <Card className="mt-4 p-4">
          <pre className="whitespace-pre-wrap break-words">{result}</pre>
        </Card>
      )} */}
    </div>
  );
}
