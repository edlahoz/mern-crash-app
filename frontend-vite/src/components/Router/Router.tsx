import React from "react";
import { BrowserRouter as ReactRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Clients from "@/pages/Clients";
import Projects from "@/pages/Projects";
import NotFound from "@/pages/NotFound";

type RouterProps = {
  children: React.ReactNode;
};

export default function Router({ children }: RouterProps) {
  return (
    <ReactRouter>
      {children}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ReactRouter>
  );
}
