import React, { useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Table,
  Badge,
  Button,
  Modal,
  Form,
} from "react-bootstrap";

function LaporanTransaksi() {
  const [transaksi, setTransaksi] = useState([
    {
      id: 1,
      tanggal: "05 Jan 2025",
      namaBarang: "Laser Cutting Akrilik",
      kategori: "Jasa Produksi",
      jumlah: 10,
      harga: 150000,
      status: "Selesai",
    },
    {
      id: 2,
      tanggal: "12 Feb 2025",
      namaBarang: "Custom Design Logo",
      kategori: "Desain",
      jumlah: 1,
      harga: 250000,
      status: "Diproses",
    },
    {
      id: 3,
      tanggal: "02 Mar 2025",
      namaBarang: "Engraving Tumbler",
      kategori: "Souvenir",
      jumlah: 20,
      harga: 50000,
      status: "Belum",
    },
  ]);

  // State Modal
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    tanggal: "",
    namaBarang: "",
    kategori: "",
    jumlah: "",
    harga: "",
    status: "Belum",
  });

  // Total keseluruhan
  const totalKeseluruhan = transaksi.reduce(
    (acc, item) => acc + item.jumlah * item.harga,
    0
  );

  // === HANDLER TAMBAH / EDIT / HAPUS ===
  const handleTambah = () => {
    setEditMode(false);
    setFormData({
      id: null,
      tanggal: "",
      namaBarang: "",
      kategori: "",
      jumlah: "",
      harga: "",
      status: "Belum",
    });
    setShowModal(true);
  };

  const handleEdit = (item) => {
    setEditMode(true);
    setFormData(item);
    setShowModal(true);
  };

  const handleHapus = (id) => {
    if (window.confirm("Yakin ingin menghapus transaksi ini?")) {
      setTransaksi(transaksi.filter((t) => t.id !== id));
    }
  };

  const handleSimpan = (e) => {
    e.preventDefault();
    const newData = {
      ...formData,
      jumlah: parseInt(formData.jumlah),
      harga: parseInt(formData.harga),
    };

    if (editMode) {
      setTransaksi(
        transaksi.map((item) => (item.id === formData.id ? newData : item))
      );
    } else {
      newData.id = transaksi.length
        ? transaksi[transaksi.length - 1].id + 1
        : 1;
      setTransaksi([...transaksi, newData]);
    }

    setShowModal(false);
  };

  const getBadgeColor = (status) => {
    switch (status) {
      case "Selesai":
        return "success";
      case "Diproses":
        return "warning";
      case "Belum":
        return "secondary";
      default:
        return "light";
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Card className="shadow-sm">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title as="h4">📜 Riwayat Transaksi</Card.Title>
                <p className="card-category">
                  Laporan transaksi penjualan & jasa produksi
                </p>
              </div>
              <Button variant="primary" onClick={handleTambah}>
                ➕ Tambah Transaksi
              </Button>
            </Card.Header>

            <Card.Body>
              <Table responsive hover bordered>
                <thead className="table-light">
                  <tr>
                    <th>No</th>
                    <th>Tanggal</th>
                    <th>Nama Barang</th>
                    <th>Kategori</th>
                    <th>Jumlah</th>
                    <th>Harga Satuan (Rp)</th>
                    <th>Total Harga (Rp)</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {transaksi.length > 0 ? (
                    transaksi.map((item, idx) => (
                      <tr key={item.id}>
                        <td>{idx + 1}</td>
                        <td>{item.tanggal}</td>
                        <td>{item.namaBarang}</td>
                        <td>{item.kategori}</td>
                        <td>{item.jumlah}</td>
                        <td>{item.harga.toLocaleString("id-ID")}</td>
                        <td>
                          {(item.jumlah * item.harga).toLocaleString("id-ID")}
                        </td>
                        <td>
                          <Badge bg={getBadgeColor(item.status)}>
                            {item.status}
                          </Badge>
                        </td>
                        <td>
                          <Button
                            variant="warning"
                            size="sm"
                            className="me-2"
                            onClick={() => handleEdit(item)}
                          >
                            ✏️ Edit
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleHapus(item.id)}
                          >
                            🗑️ Hapus
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="text-center text-muted">
                        Belum ada transaksi
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>

              <h5 className="text-end mt-3">
                <Badge bg="info">
                  Total Keseluruhan: Rp{" "}
                  {totalKeseluruhan.toLocaleString("id-ID")}
                </Badge>
              </h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* === MODAL TAMBAH / EDIT === */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {editMode ? "Edit Transaksi" : "Tambah Transaksi"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSimpan}>
            <Form.Group className="mb-3">
              <Form.Label>Tanggal</Form.Label>
              <Form.Control
                type="date"
                value={formData.tanggal}
                onChange={(e) =>
                  setFormData({ ...formData, tanggal: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nama Barang</Form.Label>
              <Form.Control
                type="text"
                value={formData.namaBarang}
                onChange={(e) =>
                  setFormData({ ...formData, namaBarang: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Kategori</Form.Label>
              <Form.Control
                type="text"
                value={formData.kategori}
                onChange={(e) =>
                  setFormData({ ...formData, kategori: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Jumlah</Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={formData.jumlah}
                onChange={(e) =>
                  setFormData({ ...formData, jumlah: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Harga Satuan (Rp)</Form.Label>
              <Form.Control
                type="number"
                min="0"
                value={formData.harga}
                onChange={(e) =>
                  setFormData({ ...formData, harga: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status Pesanan</Form.Label>
              <Form.Select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              >
                <option value="Belum">Belum</option>
                <option value="Diproses">Diproses</option>
                <option value="Selesai">Selesai</option>
              </Form.Select>
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              💾 Simpan
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default LaporanTransaksi;
