import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button, Form } from "react-bootstrap";
import routes from "routes.js";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    const node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  // 🔹 Fungsi logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // 🔹 Navigasi ke halaman pelanggan
  const handleGoToPelanggan = () => {
    navigate("/admin/pelanggan");
  };

  // 🔹 Fungsi pencarian
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/admin/cari?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // 🔹 Navigasi ke halaman layanan (pakai slug sesuai routes.js)
  const goToLayanan = (slug) => {
    navigate(`/admin/layanan/${slug}`);
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button>
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="fw-bold text-dark mr-2"
          >
            {getBrandText()}
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" navbar>
            {/* 🔔 Notifikasi */}
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                as={Nav.Link}
                id="dropdown-67443507"
                variant="default"
                className="m-0"
              >
                <i className="nc-icon nc-bell-55"></i>
                <span className="notification">5</span>
                <span className="d-lg-none ml-1">Notifikasi</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Pesanan Masuk</Dropdown.Item>
                <Dropdown.Item>Akun Instagram Terhubung</Dropdown.Item>
                <Dropdown.Item>Pembayaran Dikonfirmasi</Dropdown.Item>
                <Dropdown.Item>Produk Dikirim</Dropdown.Item>
                <Dropdown.Item>Lihat Selengkapnya</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          {/* 🔍 Kolom Pencarian */}
          <Form className="d-flex mx-auto" onSubmit={handleSearchSubmit}>
            <Form.Control
              type="search"
              placeholder="Cari produk, pelanggan, atau jasa..."
              className="me-2 rounded-pill px-3"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Button variant="outline-dark" type="submit" className="rounded-pill px-3">
              <i className="nc-icon nc-zoom-split"></i>
            </Button>
          </Form>

          {/* 🔹 Kanan navbar */}
          <Nav className="ml-auto" navbar>
            <Nav.Item>
              <Nav.Link className="m-0" onClick={handleGoToPelanggan}>
                <span className="no-icon">Profil</span>
              </Nav.Link>
            </Nav.Item>

            {/* 🔹 Dropdown Jasa */}
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                as={Nav.Link}
                id="navbarDropdownMenuLink"
                variant="default"
                className="m-0"
              >
                <span className="no-icon">Jasa</span>
              </Dropdown.Toggle>
              <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                <Dropdown.Item onClick={() => goToLayanan("laser-cutting")}>
                  Laser Cutting
                </Dropdown.Item>
                <Dropdown.Item onClick={() => goToLayanan("laser-engraving")}>
                  Laser Engraving
                </Dropdown.Item>
                <Dropdown.Item onClick={() => goToLayanan("laser-marking")}>
                  Laser Marking
                </Dropdown.Item>
                <Dropdown.Item onClick={() => goToLayanan("custom-design")}>
                  Custom Design
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* 🔹 Logout */}
            <Nav.Item>
              <Nav.Link className="m-0 text-danger" onClick={handleLogout}>
                <span className="no-icon">Keluar</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
