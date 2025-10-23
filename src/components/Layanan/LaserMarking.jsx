import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Play, X } from "lucide-react";
import "./lasermarking.css";

function LaserMarking() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🔹 Path video di folder public
  const videoUrl = "/lasermarking.mp4";

  const openVideoModal = () => setIsModalOpen(true);
  const closeVideoModal = () => setIsModalOpen(false);

  return (
    <div className="pesanan-container">
      <Container className="py-5">
        {/* Judul */}
        <Row className="mb-5">
          <Col>
            <h1 className="text-center pesanan-title">
              LASER MARKING
            </h1>
            {/* 🔹 Gambar di bawah judul */}
            <img
              src="/lasermarking-1.jpg"
              alt="Laser Marking"
              className="title-image d-block mx-auto"
            />
          </Col>
        </Row>

        {/* Deskripsi */}
        <Row className="mb-5">
          <Col lg={12}>
            <Card className="description-card">
              <Card.Body className="p-5">
                <div className="description-content">
                  <b>Apa Itu Laser Marking?</b>
                  <p>
                    Laser marking (penandaan laser) adalah proses memberikan tanda, tulisan,
                    logo, atau kode pada permukaan benda dengan menggunakan sinar laser
                    berenergi tinggi tanpa mengikis materialnya. Proses ini bekerja dengan
                    mengubah warna atau tekstur permukaan material melalui pemanasan lokal
                    dari laser, sehingga menghasilkan tanda yang presisi, permanen, dan halus.
                  </p>
                  <p>
                    Berbeda dengan <b>laser engraving</b> yang mengikis sebagian material,
                    <b> laser marking</b> hanya menandai permukaan sehingga hasilnya lebih rata
                    dan cocok untuk produk yang membutuhkan tampilan halus seperti logam,
                    plastik, dan komponen elektronik.
                  </p>
                  <p className="text-primary fw-bold">
                    Berikut video proses Laser Marking menggunakan mesin laser:
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Video Section */}
        <Row>
          <Col lg={12}>
            <Card className="video-card">
              <Card.Body className="p-10">
                {/* Video player */}
                <div className="video-container mb-4">
                  <video
                    src={videoUrl}
                    className="video-player"
                    controls
                    width="100%"
                    poster="/holder marking.jpg" // opsional: tambahkan gambar cover
                  />
                </div>

                {/* Tombol untuk membuka modal */}
                <Button
                  className="btn-display-modal"
                  onClick={openVideoModal}
                >
                  <Play size={18} className="me-2" />
                  Tampilkan Video Proses Laser Marking (Fullscreen)
                </Button>
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

export default LaserMarking;
