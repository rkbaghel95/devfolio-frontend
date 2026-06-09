import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/public/HomePage";
import ProjectsPage from "../pages/public/ProjectsPage";
import BlogsPage from "../pages/public/BlogsPage";
import ContactPage from "../pages/public/ContactPage";
import AdminLoginPage from "../pages/admin/AdminLoginPage";

import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />

        <Route
          path="/projects"
          element={
            <MainLayout>
              <ProjectsPage />
            </MainLayout>
          }
        />

        <Route
          path="/blogs"
          element={
            <MainLayout>
              <BlogsPage />
            </MainLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <MainLayout>
              <ContactPage />
            </MainLayout>
          }
        />

        <Route path="/admin/login" element={<AdminLoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;