// src/layouts/Admin.js

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "components/Sidebar/Sidebar.js";
import AdminNavbar from "components/Navbars/AdminNavbar"; // ✅ tampilkan navbar
import routes from "routes.js";
import "assets/css/custom-sidebar.css";
import bgImage from "assets/img/sidebar-5.jpg";
import Footer from "components/Footer/Footer";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

function Admin() {
  return (
    <div className="wrapper">
      {/* ✅ Sidebar */}
      <Sidebar routes={routes} image={bgImage} color="black" />

      {/* ✅ MAIN PANEL */}
      <div className="main-panel">
        
        {/* ✅ NAVBAR FIX */}
        <AdminNavbar />

        {/* ✅ CONTENT AREA */}
        <div className="content p-4">
          <Routes>
            {routes.map((prop, key) => (
              <Route
                path={prop.path}
                element={<prop.component />}
                key={key}
              />
            ))}
            <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
          </Routes>
        </div>

      </div>
    </div>
  );
}

export default Admin;
