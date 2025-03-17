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

// Page imports
import Video from "./components/pages/Video";
import Podcasts from "./components/pages/Podcasts";
import About from "./components/pages/about";
import WhoWeAre from "./components/pages/about/WhoWeAre";
import OurTeam from "./components/pages/about/OurTeam";
import OurCulture from "./components/pages/about/OurCulture";
import ContactUs from "./components/pages/about/ContactUs";
import Industries from "./components/pages/industries/Industries";
import IndustryDetail from "./components/pages/industries/IndustryDetail";
import Associates from "./components/pages/associates/Associates";
import ChannelPartners from "./components/pages/associates/ChannelPartners";
import MagazineList from "./components/magazine/MagazineList";
import MagazineViewer from "./components/magazine/MagazineViewer";
import Investors from "./components/pages/investors/Investors";
import Angel from "./components/pages/investors/Angel";
import VentureCapitals from "./components/pages/investors/VentureCapitals";
import AdvertiseWithUs from "./components/pages/AdvertiseWithUs";
import Search from "./components/pages/Search";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthTester />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          {/* Page routes */}
          <Route path="/video" element={<Video />} />
          <Route path="/podcasts" element={<Podcasts />} />

          {/* About routes */}
          <Route path="/about" element={<About />} />
          <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/about/our-team" element={<OurTeam />} />
          <Route path="/about/our-culture" element={<OurCulture />} />
          <Route path="/about/contact-us" element={<ContactUs />} />

          {/* Industries routes */}
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />

          {/* Associates routes */}
          <Route path="/associates" element={<Associates />} />
          <Route
            path="/associates/channel-partners"
            element={<ChannelPartners />}
          />

          {/* Magazine routes */}
          <Route path="/magazine" element={<MagazineList />} />
          <Route path="/magazine/brand-india" element={<MagazineList />} />
          <Route path="/magazine/:id" element={<MagazineViewer />} />

          {/* Investors routes */}
          <Route path="/investors" element={<Investors />} />
          <Route path="/investors/angel" element={<Angel />} />
          <Route
            path="/investors/venture-capitals"
            element={<VentureCapitals />}
          />

          {/* Advertise route */}
          <Route path="/advertise-with-us" element={<AdvertiseWithUs />} />

          {/* Search route */}
          <Route path="/search" element={<Search />} />

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
