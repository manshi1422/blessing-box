import React from "react";
import { Routes, Route } from "react-router";
import { About } from "./About";
import Dashboard from "./Dashboard";
import { Contact } from "./Contact";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};
