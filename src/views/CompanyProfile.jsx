import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const logoAksara = "/logoaksara.png";
const heroImage = "layanan/laser-marking.jpg";

// ===== Gambar layanan =====
const serviceImages = [
  {
    img: "layanan/laser-marking.jpg",
    title: "Laser Marking",
    desc: "Menandai permukaan material dengan hasil tajam dan presisi tanpa merusak struktur.",
  },
  {
    img: "layanan/grafir.jpg",
    title: "Laser Engraving",
    desc: "Mengukir detail halus pada kayu, akrilik, dan logam dengan hasil premium.",
  },
  {
    img: "layanan/customdesign.jpg",
    title: "Custom Design",
    desc: "Melayani desain khusus sesuai kebutuhan branding atau personal project Anda.",
  },
  {
    img: "layanan/lasercutting.jpg",
    title: "Laser Cutting",
    desc: "Pemotongan presisi tinggi untuk material kayu, kulit, akrilik, hingga logam tipis.",
  },
];

// ===== Gambar galeri + deskripsi =====
const galleryImages = [
  {
    img: "tambahan/bulde.jpg",
    title: "Gantungan Kunci Akrilik",
    desc: "Gantungan kunci akrilik hasil laser cutting dengan desain minimalis dan elegan.",
  },
  {
    img: "tambahan/cardholder.jpg",
    title: "Card Holder Custom",
    desc: "Tempat kartu nama berbahan logam dengan ukiran nama perusahaan Anda.",
  },
  {
    img: "tambahan/docil.jpg",
    title: "Name Tag Kayu",
    desc: "Ukiran laser pada kayu alami, cocok untuk souvenir dan keperluan kantor.",
  },
  {
    img: "tambahan/dompet.jpg",
    title: "Ukiran Dompet Kulit",
    desc: "Personalisasi dompet kulit dengan inisial atau logo menggunakan laser engraving.",
  },
  {
    img: "tambahan/pggg.jpg",
    title: "Plakat Akrilik Premium",
    desc: "Plakat penghargaan dengan ukiran detail halus dan tampilan profesional.",
  },
  {
    img: "tambahan/kalungmedali.jpg",
    title: "Kalung & Medali Custom",
    desc: "Desain medali dan kalung dengan detail presisi tinggi untuk event atau kompetisi.",
  },
];

export default function CompanyProfile() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* ===== Navbar ===== */}
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow-sm"
        style={{ backgroundColor: "#003049" }}
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#beranda">
            <img
              src={logoAksara}
              alt="Logo"
              style={{ width: "40px", height: "auto", marginRight: "10px" }}
            />
            <span className="fw-bold text-warning">Aksara Laserwork</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {["Beranda", "Layanan", "Galeri", "Tentang Kami", "Kontak"].map(
                (menu, i) => (
                  <li className="nav-item" key={i}>
                    <a
                      className="nav-link text-light fw-semibold"
                      href={`#${menu.toLowerCase().replace(" ", "")}`}
                    >
                      {menu}
                    </a>
                  </li>
                )
              )}
            </ul>
            <button
              className="btn btn-warning ms-3 fw-bold"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* ===== Beranda ===== */}
      <section
        id="beranda"
        className="d-flex flex-column justify-content-center align-items-center text-center text-white"
        style={{
          background: "linear-gradient(135deg, #003049, #1d3557)",
          minHeight: "80vh",
          position: "relative",
        }}
      >
        <img
          src={heroImage}
          alt=" "
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.3,
          }}
        />
        <div style={{ zIndex: 2 }}>
          <h1 className="fw-bold mb-3">Selamat Datang di Aksara Laserwork</h1>
          <p className="lead mb-4">
            Solusi presisi dan estetika untuk setiap karya Anda.
          </p>
          <button
            className="btn btn-warning fw-semibold"
            onClick={() => (window.location.href = "#layanan")}
          >
            Jelajahi Layanan Kami
          </button>
        </div>
      </section>

      {/* ===== Layanan ===== */}
      <section id="layanan" className="container my-5">
        <h2 className="text-center fw-bold text-dark mb-4">Layanan Kami</h2>
        <div className="row">
          {serviceImages.map((item, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div
                className="card h-100 shadow-sm border-0 text-center p-3"
                style={{ borderTop: "5px solid #f77f00" }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "15px",
                  }}
                />
                <h5 className="fw-bold text-primary">{item.title}</h5>
                <p className="text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Galeri ===== */}
      <section
        id="galeri"
        className="py-5"
        style={{ backgroundColor: "#eaeaea" }}
      >
        <div className="container text-center">
          <h2 className="fw-bold text-dark mb-4">Galeri Produk Kami</h2>
          <div className="row">
            {galleryImages.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card shadow-sm border-0 h-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="card-img-top"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      borderTop: "5px solid #f77f00",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="fw-bold text-primary">{item.title}</h5>
                    <p className="text-muted">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Tentang Kami ===== */}
<section id="tentangkami" className="container my-5 text-center">
  <h2 className="fw-bold text-dark mb-4">Tentang Kami</h2>
  
  {/* Gambar Profil Perusahaan */}
  <img
    src="/tambahan/logoal.png"
    alt="Tentang Aksara Laserwork"
    className="img-fluid rounded shadow-sm mb-4"
    style={{
      maxWidth: "700px",
      width: "100%",
      height: "auto",
      borderTop: "5px solid #f77f00",
    }}
  />

  <p className="text-muted fs-5">
    <strong>Aksara Laserwork</strong> adalah perusahaan yang bergerak di bidang jasa 
    <em>laser cutting</em>, <em>engraving</em>, dan <em>marking</em>.  
    Kami berkomitmen memberikan hasil terbaik dengan presisi, keindahan, dan 
    kepuasan pelanggan. Dengan dukungan teknologi laser terkini serta tim 
    profesional yang berpengalaman, kami siap membantu Anda mewujudkan ide 
    kreatif menjadi produk nyata yang bernilai tinggi.
  </p>
</section>


      {/* ===== Kontak ===== */}
      <section
        id="kontak"
        className="py-5 text-center"
        style={{
          background: "linear-gradient(135deg, #003049, #1d3557)",
          color: "white",
        }}
      >
        <div className="container">
          <h2 className="fw-bold mb-3">Hubungi Kami</h2>
          <p>
            <strong>Alamat:</strong> QWHC+H8M, Suci, Kec. Karangpawitan, Kabupaten Garut, Jawa Barat
          </p>
          <p>
            <strong>Email:</strong> aksaralaserwork@gmail.com
          </p>
          <p>
            <strong>Telepon:</strong> +62 812-3456-7890
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer
        className="text-center py-3 text-light"
        style={{ backgroundColor: "#001f3f" }}
      >
        <p className="mb-0">
          &copy; 2025 Aksara Laserwork — Industri Kreatif & Presisi.
        </p>
      </footer>
    </div>
  );
}
