import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import {
  Draft,
  Upload,
  Home,
  Font,
  Resources,
  Theme,
  Transcribe,
  Collaborate,
  Ebook,
  Instagram,
  LinkedIn,
  Youtube,
  ProductDesc,
  ContentRephraser,
  ArticleBlog,
  BlogWriter,
  BlogIntro,
  BlogSection,
  ParagraphWriter,
  Tweets,
  PDFDownload,
  MSDownload,
  Profile,
  Notification,
  Password,
  Preference,
} from "../src/components/index";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="font" element={<Font />} />
        <Route path="resources" element={<Resources />} />
        <Route path="theme" element={<Theme />} />
        <Route path="transcribe" element={<Transcribe />} />
        <Route path="draft" element={<Draft />} />
        <Route path="collaborate" element={<Collaborate />} />
        <Route path="ebook" element={<Ebook />} />
        <Route path="blog-intro-generator" element={<BlogIntro />} />
        <Route path="blog-section-generator" element={<BlogSection />} />
        <Route path="instagram" element={<Instagram />} />
        <Route path="short-LinkedIn-posts" element={<LinkedIn />} />
        <Route path="blog-article-writer" element={<BlogWriter />} />
        <Route path="content-rephraser" element={<ContentRephraser />} />
        <Route path="youtube-intro-generator" element={<Youtube />} />
        <Route path="product" element={<ProductDesc />} />
        <Route path="article-blog-conclusion" element={<ArticleBlog />} />
        <Route path="paragraph-writer" element={<ParagraphWriter />} />
        <Route path="tweets-generation" element={<Tweets />} />
        <Route path="pdf-download" element={<PDFDownload />} />
        <Route path="MSword-download" element={<MSDownload />} />
        <Route path="profile" element={<Profile />} />
        <Route path="notification" element={<Notification />} />
        <Route path="password" element={<Password />} />
        <Route path="preference" element={<Preference />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
