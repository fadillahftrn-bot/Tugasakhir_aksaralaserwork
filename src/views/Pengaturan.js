import React from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Form,
  Image,
} from "react-bootstrap";
import whatsappLogo from "../assets/img/whatsapp logo.png"; // pastikan path gambarnya benar

function Pengaturan() {
  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm border-0 p-4">
            <div className="text-center mb-4">
              <h4 className="fw-bold text-uppercase">Kritik dan Saran</h4>
              <p className="text-muted">
                Kami menghargai setiap masukan Anda untuk membantu kami menjadi lebih baik.
              </p>
            </div>

            {/* Form Kritik & Saran */}
            <Form>
              <Form.Group className="mb-3" controlId="nama">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Masukkan nama Anda" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Masukkan email Anda" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="pesan">
                <Form.Label>Kritik / Saran</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Tulis pesan Anda di sini..."
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" className="me-3 px-4">
                  Kirim
                </Button>

                {/* Tombol WhatsApp dengan logo manual */}
                <Button
                  variant="success"
                  href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memberikan%20masukan%20tentang%20layanan%20Anda."
                  target="_blank"
                  className="d-inline-flex align-items-center px-3"
                >
                  <Image
                    src={whatsappLogo}
                    alt="WhatsApp"
                    style={{ width: "24px", height: "24px", marginRight: "8px" }}
                  />
                  Hubungi via WhatsApp
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Pengaturan;
