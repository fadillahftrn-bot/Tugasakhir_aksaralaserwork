import React, { useState, useRef, useEffect } from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

export default function Pelanggan() {
  const defaultProfile = {
    nama: "Fadillah Fitriani Supriatna",
    email: "fadillah@email.com",
    telepon: "+62 812-3456-7890",
    alamat: "Kp.Situgirang Rt 03 Rw 10 Desa Cintarakyat",
    tentang: "Saya pelanggan setia layanan laser cutting dan custom design di sini.",
    memberSejak: "Januari 2022",
    pesanan: 25,
    rating: 4.9,
    avatar: null, // avatar base64 disimpan di sini
  };

  const [profile, setProfile] = useState(defaultProfile);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(profile);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  // Load data from LocalStorage saat pertama kali buka halaman
  useEffect(() => {
    const saved = localStorage.getItem("profile");
    if (saved) {
      setProfile(JSON.parse(saved));
      setDraft(JSON.parse(saved));
    }
  }, []);

  // Convert file ke base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const handleEditToggle = () => {
    setDraft(profile);
    setEditing(true);
  };

  const handleCancel = () => {
    setPreview(null);
    setDraft(profile);
    setEditing(false);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const newProfile = { ...draft };
    if (preview) {
      newProfile.avatar = preview; // simpan base64
    }
    setProfile(newProfile);
    localStorage.setItem("profile", JSON.stringify(newProfile));
    setEditing(false);
    setPreview(null);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const base64 = await toBase64(file);
    setPreview(base64);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDraft((d) => ({ ...d, [name]: value }));
  };

  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Profil Pelanggan</Card.Title>
              <p className="card-category">Kelola data pribadi Anda</p>
            </Card.Header>
            <Card.Body>
              <Row className="align-items-center">
                {/* Avatar */}
                <Col md="3" className="text-center">
                  <img
                    alt="avatar"
                    className="avatar border-gray"
                    src={editing ? (preview || draft.avatar) : profile.avatar || require("assets/img/faces/foto2.jpg")}
                    style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "50%" }}
                  />

                  {editing && (
                    <div style={{ marginTop: 8 }}>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => fileInputRef.current.click()}
                      >
                        Ganti Foto
                      </Button>
                    </div>
                  )}
                </Col>

                {/* Form */}
                <Col md="6">
                  <Form onSubmit={handleSave}>
                    <Form.Group className="mb-2">
                      <Form.Label>Nama Lengkap</Form.Label>
                      <Form.Control
                        name="nama"
                        type="text"
                        value={editing ? draft.nama : profile.nama}
                        onChange={handleInputChange}
                        readOnly={!editing}
                      />
                    </Form.Group>

                    <Form.Group className="mb-2">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        name="email"
                        type="email"
                        value={editing ? draft.email : profile.email}
                        onChange={handleInputChange}
                        readOnly={!editing}
                      />
                    </Form.Group>

                    <Form.Group className="mb-2">
                      <Form.Label>Nomor Telepon</Form.Label>
                      <Form.Control
                        name="telepon"
                        type="text"
                        value={editing ? draft.telepon : profile.telepon}
                        onChange={handleInputChange}
                        readOnly={!editing}
                      />
                    </Form.Group>

                    <Form.Group className="mb-2">
                      <Form.Label>Alamat</Form.Label>
                      <Form.Control
                        name="alamat"
                        type="text"
                        value={editing ? draft.alamat : profile.alamat}
                        onChange={handleInputChange}
                        readOnly={!editing}
                      />
                    </Form.Group>

                    <Form.Group className="mb-2">
                      <Form.Label>Tentang Saya</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="tentang"
                        value={editing ? draft.tentang : profile.tentang}
                        onChange={handleInputChange}
                        readOnly={!editing}
                      />
                    </Form.Group>

                    <div className="mt-3">
                      {!editing ? (
                        <>
                          <Button variant="outline-info" size="sm" onClick={handleEditToggle}>
                            Edit Profil
                          </Button>{" "}
                          <Button variant="outline-danger" size="sm">
                            Logout
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button variant="info" size="sm" type="submit">
                            Simpan
                          </Button>{" "}
                          <Button variant="secondary" size="sm" onClick={handleCancel}>
                            Batal
                          </Button>{" "}
                          <Button variant="outline-danger" size="sm">
                            Logout
                          </Button>
                        </>
                      )}
                    </div>
                  </Form>
                </Col>

                {/* Info samping */}
                <Col md="3" className="text-center">
                  <h5 className="mt-2">@fadillah</h5>
                  <p className="text-muted mb-1">
                    Member sejak: <strong>{profile.memberSejak}</strong>
                  </p>
                  <p className="text-secondary">
                    Pelanggan aktif dengan {profile.pesanan}+ pesanan dan rating layanan <strong>{profile.rating}/5</strong>.
                  </p>
                </Col>

              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
