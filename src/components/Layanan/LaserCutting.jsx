import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Play, X } from "lucide-react";
import "./lasercutting.css";

function LaserCutting() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Path video di folder public
  const videoUrl = "/Lasercutting.mp4";

  const openVideoModal = () => setIsModalOpen(true);
  const closeVideoModal = () => setIsModalOpen(false);

  return (
    <div className="pesanan-container">
      <Container className="py-5">
        {/* Judul */}
        <Row className="mb-5">
          <Col>
            <h1 className="text-center pesanan-title">
              LASER CUTTING
            </h1>

            {/* Gambar di bawah judul */}
            <img
              src="/paket.jpg"
              alt="Laser Cutting"
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
                  <b>Apa Itu Laser Cutting?</b>
                  <p>
                    Laser cutting adalah proses pemotongan material menggunakan sinar laser
                    berenergi tinggi yang difokuskan pada titik tertentu. Sinar laser ini
                    dapat memotong berbagai jenis material seperti kayu, acrylic, kain,
                    kertas, dan logam dengan presisi tinggi dan hasil yang bersih.
                  </p>

                  <p>
                    Teknologi ini sangat cocok untuk pembuatan prototipe, kerajinan,
                    dekorasi, dan produksi massal dengan tingkat akurasi yang tinggi.
                  </p>

                  <p className="text-primary fw-bold">
                    Berikut video proses Laser Cutting menggunakan mesin laser:
                  </p>
                </div>

                {/* Video player */}
                <div className="video-container mb-4">
                  <video
                    src={videoUrl}
                    className="video-player"
                    controls
                    width="100%"
                    poster="/paket.jpg"
                  />
                </div>

                {/* Tombol untuk membuka modal */}
                <div className="text-center">
                  <Button
                    className="btn-display-modal"
                    onClick={openVideoModal}
                  >
                    <Play size={18} className="me-2" />
                    Tampilkan Video Proses Laser Cutting (Fullscreen)
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

export default LaserCutting;