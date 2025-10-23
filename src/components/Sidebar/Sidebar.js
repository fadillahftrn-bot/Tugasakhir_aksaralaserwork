// src/components/Sidebar/Sidebar.js

import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";
import logo from "assets/img/Foto Product Aksara Laserwork/aksara laserwork.png";


function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const activeRoute = (routeName) =>
    location.pathname.indexOf(routeName) > -1 ? "active" : "";

  const [collapsed, setCollapsed] = useState(false);

  const normalRoutes = routes.filter((prop) => !prop.upgrade && !prop.redirect);
  const upgradeRoutes = routes.filter((prop) => prop.upgrade && !prop.redirect);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`} data-image={image} data-color={color}>
      <div className="sidebar-background" style={{ backgroundImage: "url(" + image + ")" }} />

      {/* Toggle Button */}
      <div className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
        <i className={`fas ${collapsed ? "fa-chevron-right" : "fa-chevron-left"}`}></i>
      </div>

      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center">
          <div className="logo-img">
            <img src={logo} alt="Logo" />
          </div>
          {!collapsed && <p className="simple-text ml-2">AKSARA LASERWORK</p>}
        </div>

        <Nav>
          {normalRoutes.map((prop, key) => (
            <li className={activeRoute(prop.layout + prop.path)} key={key}>
              <NavLink to={prop.layout + prop.path} className="nav-link">
                <i className={prop.icon}></i>
                {!collapsed && <p>{prop.name}</p>}
              </NavLink>
            </li>
          ))}
        </Nav>

        {/* CTA (Metode Pembayaran) */}
        <Nav className="active-pro-container">
          {upgradeRoutes.map((prop, key) => (
            <li className="active-pro" key={key}>
              <NavLink to={prop.layout + prop.path} className="nav-link">
                <i className={prop.icon}></i>
                {!collapsed && <p>{prop.name}</p>}
              </NavLink>
            </li>
          ))}
        </Nav>
      </div>

      {/* ✅ Floating WA Button */}
      <a
        href="https://wa.me/6287830617650"
        className="wa-floating"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default Sidebar;
