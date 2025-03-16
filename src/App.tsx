import { Suspense } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import EditorDashboard from "./components/dashboards/EditorDashboard";
import WriterDashboard from "./components/dashboards/WriterDashboard";
import AdminDashboard from "./components/dashboards/AdminDashboard";
import BlogEditor from "./components/blog/BlogEditor";
import BlogPreview from "./components/blog/BlogPreview";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthTester from "./components/AuthTester";
import BlogDetail from "./components/blog/BlogDetail";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthTester />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          {/* Editor routes */}
          <Route
            path="/editor"
            element={
              <ProtectedRoute allowedRoles={["editor", "admin"]}>
                <EditorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/editor/blog/:id"
            element={
              <ProtectedRoute allowedRoles={["editor", "admin"]}>
                <BlogPreview />
              </ProtectedRoute>
            }
          />

          {/* Writer routes */}
          <Route
            path="/writer"
            element={
              <ProtectedRoute allowedRoles={["writer", "admin"]}>
                <WriterDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/writer/blog/new"
            element={
              <ProtectedRoute allowedRoles={["writer", "admin"]}>
                <BlogEditor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/writer/blog/edit/:id"
            element={
              <ProtectedRoute allowedRoles={["writer", "admin"]}>
                <BlogEditor />
              </ProtectedRoute>
            }
          />

          {/* Admin routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </div>
    </Suspense>
  );
}

export default App;
