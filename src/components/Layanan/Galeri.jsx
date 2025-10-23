import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import { X } from "lucide-react";
import "./galeri.css";

function Galeri() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Daftar gambar galeri dari folder public
  const galleryImages = [
    "/engraving.jpg",
    "/laserengraving-1.jpg",
    "/paket.jpg",
    "/paket 2.jpg",
    "/dompet.jpg",
    "/dompet hitam.jpg",
    "/ganci.jpg",
    "/ganci2.jpg",
    "/gantungan kunci hitam.jpg",
    "/gantungan kunci mobil.jpg",
    "/holder polos.jpg",
    "/holder ukir.jpg",
    "/id holder.jpg",
    "/medali.jpg",
    "/no meja.jpg",
    "/piagam.jpg",
    "/pin.jpg",
    "/plakat.jpg",
    "/plakat 2.jpg",
    "/softcase.jpg",
    "/softcase ukir.jpg",
    "/case hp dompet.jpg",
    "/ganci buled.jpg",
    "/ganci motor.jpg",
    "/ganci motor (2).jpg",
    "/ganci motor (3).jpg",
    "/ganci segitiga.jpg"
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage("");
  };

  return (
    <div className="galeri-container">
      <Container className="py-5">
        <Row className="mb-5">
          <Col>
            <h1 className="text-center galeri-title">
              GALERI PRODUK AKSARA LASERWORK
            </h1>
            <p className="text-center galeri-subtitle">
              Koleksi hasil karya jasa laser cutting, engraving, dan marking kami
            </p>
          </Col>
        </Row>

        <Row>
          {galleryImages.map((image, index) => (
            <Col lg={3} md={4} sm={6} xs={12} key={index} className="mb-4">
              <Card className="gallery-card" onClick={() => openModal(image)}>
                <Card.Img
                  variant="top"
                  src={image}
                  className="gallery-image"
                  alt={`Produk ${index + 1}`}
                />
                <Card.Body className="p-2">
                  <Card.Title className="gallery-title-small text-center">
                    Produk {index + 1}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal untuk menampilkan gambar fullscreen */}
      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Body className="p-0">
          <Button
            variant="light"
            className="modal-close-btn-custom"
            onClick={closeModal}
          >
            <X size={24} />
          </Button>
          <img
            src={selectedImage}
            alt="Produk fullscreen"
            className="modal-image"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Galeri;