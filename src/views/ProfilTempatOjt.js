import React from "react";
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Layers,
  Scissors,
  Printer,
} from "lucide-react";
import imgLogo from "../assets/img/Foto Product Aksara Laserwork/aksara laserwork.png"; 
 

export default function ProfilTempatOjt() {
  return (
    <Container fluid className="mt-4 mb-4 profil-container">
      {/* ===== Header Section ===== */}
      <Row className="justify-content-center mb-4 header-section">
        <Col md="8" className="text-center">
          <Image
            src={imgLogo}
            alt="Logo Aksara Laserwork"
            roundedCircle
            fluid
            className="logo-image"
          />
          <h2 className="company-name">Aksara Laserwork</h2>
          <p className="company-tagline">
            Inovasi dalam Seni Ukir dan Teknologi Laser Presisi
          </p>
        </Col>
      </Row>

      {/* ===== Tentang Perusahaan ===== */}
      <Row className="justify-content-center">
        <Col md="10">
          <Card className="info-card mb-4">
            <Card.Body>
              <h4 className="section-title">Tentang Perusahaan</h4>
              <p className="text-content">
                <b>Aksara Laserwork</b> adalah perusahaan jasa yang bergerak di bidang
                pemotongan, penandaan, dan pengukiran berbasis teknologi laser modern.
                Berdiri dengan semangat untuk memberikan hasil presisi dan detail tinggi,
                Aksara Laserwork melayani berbagai kebutuhan pelanggan seperti souvenir,
                merchandise, plat nama, nomor meja, medali, serta custom design untuk
                kebutuhan pribadi maupun industri.
              </p>
              <p className="text-content">
                Dengan tim profesional dan mesin laser berteknologi tinggi, kami berkomitmen
                untuk menghadirkan hasil terbaik dengan ketepatan, kecepatan, dan estetika
                yang tinggi. Kami percaya bahwa setiap detail memiliki makna — dan laser
                adalah alat kami untuk mewujudkan keindahan dalam ketepatan.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* ===== Visi dan Misi ===== */}
      <Row className="justify-content-center">
        <Col md="10">
          <Card className="info-card mb-4">
            <Card.Body>
              <h4 className="section-title">Visi dan Misi</h4>
              <Row>
                <Col md="6">
                  <h5 className="visi-misi-title">Visi</h5>
                  <p className="text-content">
                    Menjadi perusahaan jasa laser cutting dan engraving terbaik di Indonesia
                    yang mengedepankan kualitas, presisi, dan kepuasan pelanggan.
                  </p>
                </Col>
                <Col md="6">
                  <h5 className="visi-misi-title">Misi</h5>
                  <ul>
                    <li>Menyediakan layanan berkualitas tinggi dengan hasil presisi maksimal.</li>
                    <li>Mengembangkan inovasi desain dan teknologi laser secara berkelanjutan.</li>
                    <li>Membangun hubungan jangka panjang dengan pelanggan melalui kepercayaan dan pelayanan terbaik.</li>
                    <li>Mendukung industri kreatif lokal melalui kolaborasi desain dan produksi.</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* ===== Layanan ===== */}
      <Row className="justify-content-center">
        <Col md="10">
          <Card className="info-card mb-4">
            <Card.Body>
              <h4 className="section-title">Layanan</h4>
              <Row>
                <Col md="4" className="text-center mb-3">
                  <div className="service-icon-wrapper">
                    <Scissors size={36} />
                  </div>
                  <h6 className="service-title">Laser Cutting</h6>
                  <p className="service-description">
                    Pemotongan presisi tinggi untuk berbagai material seperti kayu, akrilik, MDF, dan stainless steel.
                  </p>
                </Col>

                <Col md="4" className="text-center mb-3">
                  <div className="service-icon-wrapper">
                    <Printer size={36} />
                  </div>
                  <h6 className="service-title">Laser Engraving</h6>
                  <p className="service-description">
                    Ukiran permanen dengan detail tinggi untuk plat nama, medali, suvenir, dan produk custom lainnya.
                  </p>
                </Col>

                <Col md="4" className="text-center mb-3">
                  <div className="service-icon-wrapper">
                    <Layers size={36} />
                  </div>
                  <h6 className="service-title">Custom Design</h6>
                  <p className="service-description">
                    Pembuatan desain sesuai permintaan pelanggan, baik untuk personal maupun kebutuhan bisnis.
                  </p>
                </Col>

                <Col md="4" className="text-center mb-3">
                  <div className="service-icon-wrapper">
                    <Layers size={36} />
                  </div>
                  <h6 className="service-title">Laser Marking</h6>
                  <p className="service-description">
                    Pembuatan tanda atau logo permanen di berbagai permukaan material dengan presisi tinggi.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* ===== Informasi Kontak ===== */}
      <Row className="justify-content-center">
        <Col md="10">
          <Card className="info-card">
            <Card.Body>
              <h4 className="section-title">Informasi Kontak</h4>
              <Row>
                <Col md="6">
                  <div className="contact-item">
                    <div className="contact-icon"><MapPin size={18} /></div>
                    <p className="contact-text">
                      Jl. Jend. Sudirman No. 45, Cirebon, Jawa Barat
                    </p>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon"><Phone size={18} /></div>
                    <p className="contact-text">0812-3456-7890</p>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon"><Mail size={18} /></div>
                    <p className="contact-text">aksaralaserwork@gmail.com</p>
                  </div>
                </Col>

                <Col md="6">
                  <div className="contact-item">
                    <div className="contact-icon"><Clock size={18} /></div>
                    <p className="contact-text">Senin - Sabtu: 08.00 - 17.00 WIB</p>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon"><Award size={18} /></div>
                    <p className="contact-text">Mitra Produksi & Desain Kreatif Lokal</p>
                  </div>
                  <Button
                    variant="primary"
                    href="https://maps.google.com"
                    target="_blank"
                    className="btn-primary"
                  >
                    Lihat di Google Maps
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
