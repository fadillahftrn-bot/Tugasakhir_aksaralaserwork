// src/pages/CompanyProfile.js
import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const logoAksara = "/logoaksara.png";
const heroImage = "layanan/laser-marking.jpg";

const serviceImages = [
  { img: "layanan/laser-marking.jpg", title: "Laser Marking", desc: "Menandai permukaan material dengan hasil tajam dan presisi tanpa merusak struktur." },
  { img: "layanan/grafir.jpg", title: "Laser Engraving", desc: "Mengukir detail halus pada kayu, akrilik, dan logam dengan hasil premium." },
  { img: "layanan/customdesign.jpg", title: "Custom Design", desc: "Melayani desain khusus sesuai kebutuhan branding atau personal project Anda." },
  { img: "layanan/lasercutting.jpg", title: "Laser Cutting", desc: "Pemotongan presisi tinggi untuk material kayu, kulit, akrilik, hingga logam tipis." },
];

const galleryImages = [
  { img: "tambahan/bulde.jpg", title: "Gantungan Kunci Akrilik", desc: "Gantungan kunci akrilik hasil laser cutting dengan desain minimalis dan elegan." },
  { img: "tambahan/cardholder.jpg", title: "Card Holder Custom", desc: "Tempat kartu nama berbahan logam dengan ukiran nama perusahaan Anda." },
  { img: "tambahan/docil.jpg", title: "Name Tag Kayu", desc: "Ukiran laser pada kayu alami, cocok untuk souvenir dan keperluan kantor." },
  { img: "tambahan/dompet.jpg", title: "Ukiran Dompet Kulit", desc: "Personalisasi dompet kulit dengan inisial atau logo menggunakan laser engraving." },
  { img: "tambahan/pggg.jpg", title: "Plakat Akrilik Premium", desc: "Plakat penghargaan dengan ukiran detail halus dan tampilan profesional." },
  { img: "tambahan/kalungmedali.jpg", title: "Kalung & Medali Custom", desc: "Desain medali dan kalung dengan detail presisi tinggi untuk event atau kompetisi." },
];

export default function CompanyProfile() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [activeId, setActiveId] = useState("beranda");
  const overlayRef = useRef(null);

  const sections = [
    { id: "beranda", label: "Beranda" },
    { id: "layanan", label: "Layanan" },
    { id: "galeri", label: "Galeri" },
    { id: "tentangkami", label: "Tentang Kami" },
    { id: "kontak", label: "Kontak" },
  ];

  // Smooth scroll helper
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    // close overlay if open (mobile)
    setOverlayOpen(false);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Close overlay on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOverlayOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close when clicking outside overlay content (only when open)
  useEffect(() => {
    const onDocClick = (e) => {
      if (!overlayOpen) return;
      if (overlayRef.current && e.target === overlayRef.current) {
        setOverlayOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [overlayOpen]);

  // IntersectionObserver for active menu underline
  useEffect(() => {
    const obsOptions = {
      root: null,
      rootMargin: "0px 0px -40% 0px", // trigger earlier
      threshold: 0,
    };
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(callback, obsOptions);
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Inline CSS */}
      <style>{`
        :root{
          --nav-bg: #003049;
          --accent: #f77f00;
        }

        /* NAVBAR */
        .main-nav {
          background: var(--nav-bg);
          color: white;
        }
        .main-nav .brand {
          color: #ffd580;
          font-weight: 700;
          display: flex;
          align-items: center;
        }
        .main-nav .brand img { width: 36px; height:auto; margin-right:10px; }

        .nav-links {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .nav-links a {
          color: rgba(255,255,255,0.95);
          text-decoration: none;
          padding: 0.5rem 0.25rem;
          position: relative;
          font-weight: 500;
        }
        .nav-links a:hover { color: #ffd580; }
        /* underline active (desktop) */
        .nav-links a.active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          height: 3px;
          background: var(--accent);
          border-radius: 2px;
        }

        /* LOGIN link style (desktop) */
        .nav-login {
          margin-left: 1rem;
          color: #fff;
          font-weight: 700;
          text-decoration: underline;
        }

        /* HAMBURGER - display on small screens */
        .hamburger {
          display: none;
          background: transparent;
          border: none;
          color: white;
          font-size: 22px;
        }

        /* Fullscreen overlay menu (mobile) - O3 white minimal */
        .overlay {
          position: fixed;
          inset: 0;
          background: #ffffff; /* O3: white */
          z-index: 2000;
          display: none;
          align-items: center;
          justify-content: center;
        }
        .overlay.open { display: flex; }
        .overlay-inner {
          text-align: center;
          width: 100%;
          padding: 2rem;
        }
        .overlay-inner nav a {
          display: block;
          font-size: 1.5rem;
          color: #111; /* black text */
          padding: 0.75rem 0;
          text-decoration: none;
        }
        .overlay-inner nav a:hover {
          color: var(--accent);
        }
        .overlay-close {
          position: absolute;
          top: 18px;
          right: 18px;
          background: transparent;
          border: none;
          font-size: 28px;
          color: #111;
        }

        /* HERO */
        #beranda {
          background: linear-gradient(135deg, rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url("${heroImage}") center/cover no-repeat;
          min-height: calc(100vh - 72px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5rem 1rem;
          color: #fff;
          text-align: center;
        }
        .hero-title { font-size: clamp(26px, 4vw, 48px); font-weight:700; }
        .hero-sub { font-size: clamp(14px, 2vw, 20px); color: rgba(255,255,255,0.9); }

        /* Sections */
        section { padding: 3rem 0; }
        .service-card { border-top: 4px solid var(--accent); border-radius: 10px; overflow:hidden; }
        .gallery-card img { border-radius: 8px; }

        /* Footer */
        footer { background-color: #001f3f; }

        /* Responsive */
        @media (max-width: 991px) {
          .nav-links { display: none; }
          .hamburger { display: block; }
          .nav-login { display:none; } /* login will be inside overlay */
        }
        @media (min-width: 992px) {
          .overlay { display: none !important; }
        }

        /* small tweaks */
        .container { max-width: 1100px; }
      `}</style>

      {/* NAVBAR */}
      <header className="main-nav fixed-top">
        <div className="container d-flex align-items-center justify-content-between py-2">
          <a className="brand" href="#beranda" onClick={(e) => { e.preventDefault(); scrollToId("beranda"); }}>
            <img src={logoAksara} alt="Logo" />
            <span>AKSARA LASERWORK</span>
          </a>

          {/* desktop links */}
          <div className="nav-links">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={activeId === s.id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(s.id);
                }}
              >
                {s.label}
              </a>
            ))}
            {/* Login (L2: normal anchor to another page) */}
            <a className="nav-login" href="/login">Login</a>
          </div>

          {/* hamburger for mobile */}
          <button
            className="hamburger"
            aria-label="Open menu"
            onClick={() => setOverlayOpen(true)}
          >
            {/* simple 3-line icon */}
            <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0" width="26" height="2" rx="1" fill="currentColor" />
              <rect y="7" width="26" height="2" rx="1" fill="currentColor" />
              <rect y="14" width="26" height="2" rx="1" fill="currentColor" />
            </svg>
          </button>
        </div>
      </header>

      {/* FULLSCREEN OVERLAY (O3 - white minimal) */}
      <div
        ref={overlayRef}
        className={`overlay ${overlayOpen ? "open" : ""}`}
        aria-hidden={!overlayOpen}
      >
        <div className="overlay-inner" role="dialog" aria-modal="true">
          <button className="overlay-close" aria-label="Close menu" onClick={() => setOverlayOpen(false)}>
            &times;
          </button>

          <nav>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(s.id);
                }}
              >
                {s.label}
              </a>
            ))}

            {/* Login link in overlay */}
            <a href="/login" onClick={() => setOverlayOpen(false)}>Login</a>
          </nav>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <main>
        {/* Hero */}
        <section id="beranda" aria-label="Beranda">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 text-center">
                <h1 className="hero-title mb-3">Selamat Datang di Aksara Laserwork</h1>
                <p className="hero-sub mb-4">Solusi presisi dan estetika untuk setiap karya Anda.</p>
                <button className="btn btn-lg btn-warning fw-semibold" onClick={() => scrollToId("layanan")}>Jelajahi Layanan Kami</button>
              </div>
            </div>
          </div>
        </section>

        {/* Layanan */}
        <section id="layanan" className="bg-white" aria-label="Layanan">
          <div className="container">
            <h2 className="text-center fw-bold mb-4">Layanan Kami</h2>
            <div className="row">
              {serviceImages.map((s, i) => (
                <div key={i} className="col-12 col-sm-6 col-md-3 mb-4">
                  <div className="card h-100 shadow-sm border-0 p-3 service-card">
                    <img src={s.img} alt={s.title} style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 8 }} />
                    <div className="card-body">
                      <h5 className="fw-bold text-primary">{s.title}</h5>
                      <p className="text-muted small">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galeri */}
        <section id="galeri" className="py-5" style={{ backgroundColor: "#eaeaea" }} aria-label="Galeri">
          <div className="container">
            <h2 className="text-center fw-bold mb-4">Galeri Produk Kami</h2>
            <div className="row">
              {galleryImages.map((g, i) => (
                <div key={i} className="col-12 col-sm-6 col-md-4 mb-4">
                  <div className="card shadow-sm border-0 h-100 gallery-card">
                    <img src={g.img} alt={g.title} className="card-img-top" style={{ height: 250, objectFit: "cover" }} />
                    <div className="card-body">
                      <h5 className="fw-bold text-primary">{g.title}</h5>
                      <p className="text-muted small">{g.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tentang Kami */}
        <section id="tentangkami" className="container text-center" aria-label="Tentang Kami">
          <h2 className="fw-bold mb-4">Tentang Kami</h2>
          <img src="/tambahan/logoal.png" alt="Tentang Aksara Laserwork" className="img-fluid rounded shadow-sm mb-4" style={{ maxWidth: 700 }} />
          <p className="text-muted fs-5">
            <strong>Aksara Laserwork</strong> adalah perusahaan yang bergerak di bidang jasa laser cutting, engraving, dan marking. Kami mengutamakan presisi, kualitas, dan kepuasan pelanggan.
          </p>
        </section>

        {/* Kontak */}
        <section id="kontak" className="py-5 text-white" style={{ background: "linear-gradient(135deg, #003049, #1d3557)" }} aria-label="Kontak">
          <div className="container text-center">
            <h2 className="fw-bold mb-3">Hubungi Kami</h2>
            <p><strong>Alamat:</strong> QWHC+H8M, Suci, Kec. Karangpawitan, Kabupaten Garut, Jawa Barat</p>
            <p><strong>Email:</strong> aksaralaserwork@gmail.com</p>
            <p><strong>Telepon:</strong> +62 812-3456-7890</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-3 text-light" style={{ backgroundColor: "#001f3f" }}>
          <p className="mb-0">&copy; 2025 Aksara Laserwork — Industri Kreatif & Presisi.</p>
        </footer>
      </main>
    </div>
  );
}
