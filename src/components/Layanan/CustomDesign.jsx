import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Play, X } from "lucide-react";
import "./customdesign.css";

function CustomDesign() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Path video di folder public
  const videoUrl = "/Customdesign.mp4";

  const openVideoModal = () => setIsModalOpen(true);
  const closeVideoModal = () => setIsModalOpen(false);

  return (
    <div className="pesanan-container">
      <Container className="py-5">
        {/* Judul */}
        <Row className="mb-5">
          <Col>
            <h1 className="text-center pesanan-title">
              CUSTOM DESIGN
            </h1>

            {/* Gambar di bawah judul */}
            <img
              src="/paket 2.jpg"
              alt="Custom Design"
              className="title-image d-block mx-auto"
            />
          </Col>
        </Row>

        {/* Deskripsi + Video Section jadi satu */}
        <Row>
          <Col lg={12}>
            <Card className="description-card">
              <Card.Body className="p-5">
                <div className="description-content mb-4">
                  <b>Apa Itu Custom Design?</b>
                  <p>
                    Custom Design adalah layanan desain khusus yang kami tawarkan
                    untuk memenuhi kebutuhan unik pelanggan. Tim desainer profesional
                    kami akan bekerja sama dengan Anda untuk menciptakan desain
                    yang sesuai dengan visi, brand, dan kebutuhan spesifik Anda.
                  </p>

                  <p>
                    Kami mengkhususkan diri dalam berbagai jenis desain termasuk
                    logo, branding, materi pemasaran, dan desain produk yang
                    dapat diintegrasikan dengan layanan laser cutting dan engraving kami.
                  </p>

                  <p className="text-primary fw-bold">
                    Berikut video proses Custom Design dan implementasinya:
                  </p>
                </div>

                {/* Video player */}
                <div className="video-container mb-4">
                  <video
                    src={videoUrl}
                    className="video-player"
                    controls
                    width="100%"
                    poster="/paket 2.jpg"
                  />
                </div>

                {/* Tombol untuk membuka modal */}
                <div className="text-center">
                  <Button
                    className="btn-display-modal"
                    onClick={openVideoModal}
                  >
                    <Play size={18} className="me-2" />
                    Tampilkan Video Proses Custom Design (Fullscreen)
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modal untuk fullscreen video */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeVideoModal}>
          <div
            className="modal-content-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={closeVideoModal}>
              <X size={28} />
            </button>

            <video
              src={videoUrl}
              className="video-iframe"
              controls
              autoPlay
              width="100%"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomDesign;