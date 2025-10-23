import React, { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Table,
} from "react-bootstrap";

function Pelanggan() {
  const [saldo, setSaldo] = useState(1500000);
  const [keranjang, setKeranjang] = useState([
    { id: 1, produk: "Laser Cutting Acrylic", qty: 2, harga: 250000 },
    { id: 2, produk: "Laser Engraving Kayu", qty: 1, harga: 300000 },
    { id: 3, produk: "Custom Design Logo", qty: 1, harga: 150000 },
  ]);

  const totalKeranjang = keranjang.reduce((a, b) => a + b.qty * b.harga, 0);

  const tambahSaldo = () => {
    setSaldo(saldo + 100000);
  };

  return (
    <Container fluid>
      <Row>
        {/* FORM PROFIL */}
        <Col md="8">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Profil Pelanggan</Card.Title>
              <p className="card-category">Kelola data pribadi Anda</p>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col md="6">
                    <Form.Group>
                      <label>Nama Lengkap</label>
                      <Form.Control defaultValue="Fadillah Fitriani Supriatna" type="text" />
                    </Form.Group>
                  </Col>
                  <Col md="6">
                    <Form.Group>
                      <label>Email</label>
                      <Form.Control
                        defaultValue="fadillah@email.com"
                        type="email"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <Form.Group>
                      <label>Nomor Telepon</label>
                      <Form.Control
                        defaultValue="+62 812-3456-7890"
                        type="text"
                      />
                    </Form.Group>
                  </Col>
                  <Col md="6">
                    <Form.Group>
                      <label>Alamat</label>
                      <Form.Control
                        defaultValue="Kp.Situgirang Rt 03 Rw 10 Desa Cintarakyat "
                        type="text"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md="12">
                    <Form.Group>
                      <label>Tentang Saya</label>
                      <Form.Control
                        as="textarea"
                        rows="3"
                        defaultValue="Saya pelanggan setia layanan laser cutting dan custom design di sini."
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Button className="btn-fill pull-right" type="submit" variant="info">
                  Perbarui Profil
                </Button>
                <div className="clearfix"></div>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* SALDO & KERANJANG */}
        <Col md="4">
          <Card className="card-user">
            <div className="card-image">
              <img
                alt="..."
                src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
              ></img>
            </div>
            <Card.Body>
              <div className="author text-center">
                <img
                  alt="..."
                  className="avatar border-gray"
                  src={require("assets/img/faces/foto2.jpg")}
                ></img>
                <h5 className="title mt-2">Fadillah Fitriani</h5>
                <p className="description text-muted">@fadillah</p>
              </div>

              <div className="text-center mt-3">
                <h6>
                  Saldo:
                  <Badge bg="success" className="ms-2">
                    Rp {saldo.toLocaleString("id-ID")}
                  </Badge>
                </h6>
                <Button
                  variant="outline-success"
                  size="sm"
                  className="mt-2"
                  onClick={tambahSaldo}
                >
                  + Tambah Saldo
                </Button>
              </div>

              <hr />

              <div>
                <h6 className="text-center mb-3">🛒 Keranjang Belanja</h6>
                <Table size="sm" responsive bordered>
                  <thead>
                    <tr>
                      <th>Produk</th>
                      <th>Qty</th>
                      <th>Total (Rp)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {keranjang.map((item) => (
                      <tr key={item.id}>
                        <td>{item.produk}</td>
                        <td>{item.qty}</td>
                        <td>{(item.harga * item.qty).toLocaleString("id-ID")}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <h6 className="text-end">
                  <Badge bg="primary">
                    Total: Rp {totalKeranjang.toLocaleString("id-ID")}
                  </Badge>
                </h6>
                <div className="text-center mt-2">
                  <Button variant="info" size="sm">
                    Lanjut ke Pembayaran
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* PROFIL TAMBAHAN DI BAWAH */}
      <Row className="mt-4">
        <Col md="12">
          <Card className="card-user text-center p-4">
            <Row className="align-items-center">
              <Col md="3">
                <img
                  alt="..."
                  className="avatar border-gray"
                  src={require("assets/img/faces/foto2.jpg")}
                  style={{ width: "120px", borderRadius: "50%" }}
                />
              </Col>
              <Col md="6">
                <h4>Fadillah Fitriani Supriatna</h4>
                <p className="text-muted mb-1">@fadillah</p>
                <p className="text-secondary">
                  Member sejak: <strong>Januari 2022</strong>
                </p>
                <p>
                  Pelanggan aktif dengan 25+ pesanan dan rating layanan <strong>4.9/5</strong>.
                </p>
              </Col>
              <Col md="3">
                <Button variant="outline-info" className="mb-2" size="sm">
                  Edit Profil
                </Button>
                <Button variant="outline-danger" size="sm">
                  Logout
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Pelanggan;
