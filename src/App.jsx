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
  Article,
  Facebook,
  Instagram,
  LinkedIn,
  GoogleAdDesc,
  Youtube,
  ProductDesc,
  GoogleAdTitle,
  LinkedInShort,
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
        <Route path="article" element={<Article />} />
        <Route path="facebook" element={<Facebook />} />
        <Route path="instagram" element={<Instagram />} />
        <Route path="linkedIn" element={<LinkedIn />} />
        <Route path="linkedInShort" element={<LinkedInShort />} />
        <Route path="googleDesc" element={<GoogleAdDesc />} />
        <Route path="youtube" element={<Youtube />} />
        <Route path="product" element={<ProductDesc />} />
        <Route path="googleTitle" element={<GoogleAdTitle />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
