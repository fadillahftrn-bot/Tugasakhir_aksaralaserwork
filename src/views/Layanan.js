import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

// Pastikan kamu punya file video di folder: src/assets/videos/
import laserMarking from "../assets/img/Foto Product Aksara Laserwork/lasermarking.mp4";
import laserCutting from "../assets/img/Foto Product Aksara Laserwork/lasercutting.mp4";
import laserEngraving from "../assets/img/Foto Product Aksara Laserwork/laserengraving.mp4";
import customDesign from "../assets/img/Foto Product Aksara Laserwork/custom design.mp4";

function Layanan() {
  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <h2 className="fw-bold text-uppercase">Layanan Kami</h2>
          <p className="text-muted">
            Kami menyediakan berbagai layanan berbasis teknologi laser untuk memenuhi kebutuhan industri dan personal Anda.
          </p>
        </Col>
      </Row>

      <Row>
        {/* Layanan 1 - Laser Marking */}
        <Col md={6} lg={3} className="mb-4">
          <Card className="shadow-sm border-0 h-100 text-center">
            <video
              src={laserMarking}
              autoPlay
              loop
              muted
              playsInline
              className="w-100 rounded-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <h5 className="fw-bold mt-2">Laser Marking</h5>
              <p className="text-muted">
                Proses penandaan permanen pada berbagai material seperti logam,
                plastik, atau kaca dengan hasil presisi tinggi dan daya tahan lama.
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Layanan 2 - Laser Cutting */}
        <Col md={6} lg={3} className="mb-4">
          <Card className="shadow-sm border-0 h-100 text-center">
            <video
              src={laserCutting}
              autoPlay
              loop
              muted
              playsInline
              className="w-100 rounded-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <h5 className="fw-bold mt-2">Laser Cutting</h5>
              <p className="text-muted">
                Pemotongan material dengan sinar laser berkecepatan tinggi untuk
                hasil potongan presisi, bersih, dan tanpa kontak fisik.
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Layanan 3 - Laser Engraving */}
        <Col md={6} lg={3} className="mb-4">
          <Card className="shadow-sm border-0 h-100 text-center">
            <video
              src={laserEngraving}
              autoPlay
              loop
              muted
              playsInline
              className="w-100 rounded-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <h5 className="fw-bold mt-2">Laser Engraving</h5>
              <p className="text-muted">
                Pengukiran detail menggunakan laser untuk menciptakan desain artistik,
                logo, atau teks pada berbagai permukaan dengan akurasi tinggi.
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Layanan 4 - Custom Design */}
        <Col md={6} lg={3} className="mb-4">
          <Card className="shadow-sm border-0 h-100 text-center">
            <video
              src={customDesign}
              autoPlay
              loop
              muted
              playsInline
              className="w-100 rounded-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <h5 className="fw-bold mt-2">Custom Design</h5>
              <p className="text-muted">
                Kami membantu mewujudkan desain unik Anda dengan layanan desain khusus,
                mulai dari konsep hingga produk akhir sesuai kebutuhan.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Layanan;
