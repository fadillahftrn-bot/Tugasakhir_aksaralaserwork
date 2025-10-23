import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/css/GaleriProduk.css"; // gunakan CSS lama

function GaleriProduk() {
  const [produk, setProduk] = useState([]);

  // 🔹 Ambil data dari public/db.json
  useEffect(() => {
    fetch("/db.json")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data produk");
        return res.json();
      })
      .then((data) => setProduk(data.produk || []))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Card className="shadow-sm border-0">
            <Card.Header className="bg-white border-bottom">
              <Card.Title as="h4" className="mb-0 fw-bold">
                Galeri Produk
              </Card.Title>
              <p className="text-muted small mb-0">
                Data diambil dari <code>public/db.json</code>
              </p>
            </Card.Header>

            <Card.Body className="product-grid-container">
              <div className="product-grid">
                {produk.length > 0 ? (
                  produk.map((item) => (
                    <div key={item.id} className="product-card">
                      <div className="product-image-wrapper">
                        <img
                          src={item.foto}
                          alt={item.nama_produk}
                          className="product-image"
                        />
                      </div>

                      <div className="product-content">
                        <h5 className="product-title">{item.nama_produk}</h5>
                        <p className="product-description">{item.deskripsi}</p>
                        {item.harga && (
                          <div className="product-price">{item.harga}</div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="loading-state">
                    <p>Memuat data produk...</p>
                  </div>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default GaleriProduk;
