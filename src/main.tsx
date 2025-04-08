import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import AboutUsInfo from "./AboutUs/index.tsx";
import BlogsWithArticles from "./Blogs/index.tsx";
import Articel from "./articles/index.tsx";
import ArticlesById from "./articles/index.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/AboutUs" element={<AboutUsInfo />} />
      <Route path="/Blogs" element={<BlogsWithArticles />} />
      <Route path="/" element={<App />} />
      <Route path="/articles/:id" element={<ArticlesById />} />
      <Route path="/articles" element={<ArticlesById />} />
    </Routes>
  </BrowserRouter>
);
