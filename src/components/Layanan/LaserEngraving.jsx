import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Play, X } from "lucide-react";
import "./Laserengraving.css";

function LaserEngraving() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🔹 Path video di folder public
  const videoUrl = "/laserengraving.mp4";

  const openVideoModal = () => setIsModalOpen(true);
  const closeVideoModal = () => setIsModalOpen(false);

  return (
    <div className="pesanan-container">
      <Container className="py-5">
        {/* Judul */}
        <Row className="mb-5">
          <Col>
            <h1 className="text-center pesanan-title">
              LASER ENGRAVING (GRAFIR)
            </h1>

            {/* 🔹 Gambar di bawah judul */}
            <img
              src="/laserengraving-1.jpg"
              alt="Laser Engraving"
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
                  <b>Apa Itu Laser Engraving?</b>
                  <p>
                    Laser engraving (bahasa Indonesianya: ukir laser atau grafir
                    laser) adalah proses mengukir permukaan benda menggunakan
                    sinar laser berenergi tinggi. Laser diarahkan secara presisi
                    ke material, membakar atau melelehkan sebagian permukaannya
                    untuk membentuk pola permanen seperti tulisan, logo, gambar,
                    atau nomor seri. Berbeda dari laser marking, proses ini
                    mengikis sebagian material untuk menghasilkan ukiran yang
                    lebih dalam dan permanen.
                  </p>

                  <p className="text-primary fw-bold">
                    Berikut video proses Laser Engraving menggunakan mesin laser:
                  </p>
                </div>

                {/* Video player */}
                <div className="video-container mb-4">
                  <video
                    src={videoUrl}
                    className="video-player"
                    controls
                    width="100%"
                    poster="/holder ukir.jpg" // opsional: tambahkan gambar cover
                  />
                </div>

                {/* Tombol untuk membuka modal */}
                <div className="text-center">
                  <Button
                    className="btn-display-modal"
                    onClick={openVideoModal}
                  >
                    <Play size={18} className="me-2" />
                    Tampilkan Video Proses Laser Engraving (Fullscreen)
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

export default LaserEngraving;
