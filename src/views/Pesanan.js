import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form, Modal, Image } from "react-bootstrap";
import "../assets/css/GaleriProyek.css";

function Pesanan() {
  const [paket, setPaket] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showStruk, setShowStruk] = useState(false);
  const [selectedPaket, setSelectedPaket] = useState(null);
  const [jumlah, setJumlah] = useState(1);
  const [lapisan, setLapisan] = useState("");
  const [nama, setNama] = useState("");
  const [metodeBayar, setMetodeBayar] = useState("");

  // 🔹 Ambil data dari public/db.json
  useEffect(() => {
    fetch("/db.json")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data paket");
        return res.json();
      })
      .then((data) => setPaket(data.paket || []))
      .catch((err) => console.error("Error:", err));
  }, []);

  const handlePesan = (item) => {
    setSelectedPaket(item);
    setShowModal(true);
  };

  // 🔹 Hitung total harga
  const totalHarga = selectedPaket
    ? parseInt(selectedPaket.harga.replace(/\D/g, "")) * jumlah
    : 0;

  const handleBayar = () => {
    if (!metodeBayar || !nama) {
      alert("Harap isi semua data dan pilih metode pembayaran.");
      return;
    }
    setShowModal(false);
    setShowStruk(true);
  };

  const handleKonsultasi = () => {
    const pesan = encodeURIComponent("Halo, saya ingin konsultasi tentang paket laser cutting.");
    window.open(`https://wa.me/6282240063446?text=${pesan}`, "_blank");
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString("id-ID", { dateStyle: "full", timeStyle: "short" });
  };

  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Card className="shadow-sm border-0">
            <Card.Header className="bg-white border-bottom">
              <Card.Title as="h4" className="mb-0 fw-bold">
                Paket & Harga
              </Card.Title>
              <p className="text-muted small mb-0">
                Data diambil dari <code>public/db.json</code>
              </p>
            </Card.Header>

            <Card.Body className="product-grid-container">
              <div className="product-grid">
                {paket.length > 0 ? (
                  paket.map((item) => (
                    <div key={item.id} className="product-card">
                      <div className="product-image-wrapper">
                        <img
                          src={item.foto}
                          alt={item.nama_paket}
                          className="product-image"
                        />
                      </div>

                      <div className="product-content">
                        <h5 className="product-title">{item.nama_paket}</h5>
                        <p className="product-description">{item.deskripsi}</p>
                        {item.harga && (
                          <div className="product-price">{item.harga}</div>
                        )}
                        <div className="d-flex justify-content-between mt-3">
                          <Button
                            variant="outline-success"
                            size="sm"
                            onClick={handleKonsultasi}
                          >
                            💬 Konsultasi
                          </Button>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => handlePesan(item)}
                          >
                            🛒 Pesan Sekarang
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="loading-state">
                    <p>Memuat data paket...</p>
                  </div>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* 🔹 Modal Pemesanan */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Form Pemesanan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPaket && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Paket Dipilih</Form.Label>
                <Form.Control type="text" value={selectedPaket.nama_paket} readOnly />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Jumlah Paket</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  value={jumlah}
                  onChange={(e) => setJumlah(parseInt(e.target.value))}
                />
              </Form.Group>

              {selectedPaket.id === 1 && (
                <Form.Group className="mb-3">
                  <Form.Label>Pilih Lapisan</Form.Label>
                  <Form.Select
                    value={lapisan}
                    onChange={(e) => setLapisan(e.target.value)}
                  >
                    <option value="">Pilih lapisan</option>
                    <option value="1">Lapisan 1</option>
                    <option value="2">Lapisan 2</option>
                    <option value="3">Lapisan 3</option>
                    <option value="4">Lapisan 4</option>
                  </Form.Select>
                </Form.Group>
              )}

              <Form.Group className="mb-3">
                <Form.Label>Harga Satuan</Form.Label>
                <Form.Control type="text" value={selectedPaket.harga} readOnly />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Total Harga</Form.Label>
                <Form.Control
                  type="text"
                  value={`Rp ${totalHarga.toLocaleString()}`}
                  readOnly
                />
              </Form.Group>

              {/* 🔹 Metode Pembayaran */}
              <Form.Group className="mb-3">
                <Form.Label>Metode Pembayaran</Form.Label>
                <Form.Select
                  value={metodeBayar}
                  onChange={(e) => setMetodeBayar(e.target.value)}
                >
                  <option value="">Pilih metode pembayaran</option>
                  <option value="bri">Transfer Bank (BRI)</option>
                  <option value="qris">QRIS (Barcode)</option>
                  <option value="shopeepay">E-Wallet (ShopeePay)</option>
                </Form.Select>
              </Form.Group>

              {/* 🔹 Info tambahan per metode */}
              {metodeBayar === "bri" && (
                <div className="alert alert-info">
                  💳 Silakan transfer ke rekening <b>BRI 1234-5678-9999 a.n. PT Laserindo</b>
                </div>
              )}
              {metodeBayar === "qris" && (
                <div className="text-center">
                  <p>🧾 Scan QRIS berikut untuk melakukan pembayaran:</p>
                  <Image src="/images/qris-barcode.png" alt="QRIS Barcode" fluid className="mb-3" />
                </div>
              )}
              {metodeBayar === "shopeepay" && (
                <div className="alert alert-warning">
                  📱 Kirim pembayaran ke akun ShopeePay:
                  <b> 0812-3456-7890 (PT Laserindo)</b>
                </div>
              )}

              <Button
                variant="success"
                className="w-100 mt-3"
                onClick={handleBayar}
                disabled={!nama || !metodeBayar}
              >
                💳 Bayar Sekarang
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>

      {/* 🔹 Modal Struk Pembayaran */}
      <Modal show={showStruk} onHide={() => setShowStruk(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>🧾 Struk Pembayaran</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h5 className="fw-bold">PT LASERINDO DESIGN</h5>
          <hr />
          <p><b>Nama:</b> {nama}</p>
          <p><b>Paket:</b> {selectedPaket?.nama_paket}</p>
          <p><b>Jumlah:</b> {jumlah}</p>
          <p><b>Total:</b> Rp {totalHarga.toLocaleString()}</p>
          <p><b>Metode Bayar:</b> {metodeBayar.toUpperCase()}</p>
          <p><b>Tanggal:</b> {getCurrentDateTime()}</p>
          <hr />
          <p className="text-success fw-bold">✅ Pembayaran Berhasil</p>
          <Button variant="outline-primary" onClick={() => setShowStruk(false)}>
            Tutup
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Pesanan;
