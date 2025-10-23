import React from "react";
import ChartistGraph from "react-chartist";
import {
  Badge,
  Button,
  Navbar,
  Card,
  Container,
  Row,
  Col,
  Table,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        {/* ==== STAT CARDS ==== */}
        <Row>
          {[
            { icon: "nc-chart", color: "text-warning", title: "Pesanan Masuk", value: "250 Item" },
            { icon: "nc-light-3", color: "text-success", title: "Sedang Dikerjakan", value: "8 Proyek" },
            { icon: "nc-vector", color: "text-danger", title: "Pesanan Selesai", value: "202 item" },
            { icon: "nc-favourite-28", color: "text-primary", title: "Total Pendapatan", value: "Rahasia" },
          ].map((item, idx) => (
            <Col lg="3" sm="6" key={idx}>
              <Card className="card-stats">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <div className={`icon-big text-center ${item.color}`}>
                        <i className={`nc-icon ${item.icon}`}></i>
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">{item.title}</p>
                        <Card.Title as="h4">{item.value}</Card.Title>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-redo mr-1"></i> Lihat Selengkapnya
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ==== GRAFIK PENJUALAN (LINE) ==== */}
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Grafik Penjualan 2025</Card.Title>
                <p className="card-category">Januari - September</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep"],
                      series: [
                        [200, 250, 300, 320, 400, 450, 470, 490, 520], // Laser Marking
                        [150, 180, 210, 230, 260, 280, 310, 330, 350], // Laser Cutting
                        [100, 130, 160, 180, 200, 220, 240, 260, 290], // Laser Engraving
                        [120, 150, 190, 220, 250, 280, 310, 340, 370], // Custom Design
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 600,
                      showArea: true,
                      height: "280px",
                      axisX: { showGrid: false },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: { right: 40 },
                    }}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i> Laser Marking{" "}
                  <i className="fas fa-circle text-danger"></i> Laser Cutting{" "}
                  <i className="fas fa-circle text-warning"></i> Laser Engraving{" "}
                  <i className="fas fa-circle text-success"></i> Custom Design
                </div>
                <hr />
                <div className="stats">
                  <i className="fas fa-history"></i> Diperbarui 3 menit lalu
                </div>
              </Card.Footer>
            </Card>
          </Col>

          {/* ==== PIE CHART JASA ==== */}
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Proporsi Jasa</Card.Title>
                <p className="card-category">Distribusi layanan</p>
              </Card.Header>
              <Card.Body>
                <ChartistGraph
                  data={{
                    labels: ["35% Marking", "25% Cutting", "20% Engraving", "20% Custom"],
                    series: [35, 25, 20, 20],
                  }}
                  type="Pie"
                />
              </Card.Body>
              <Card.Footer>
                <hr />
                <div className="stats">
                  <i className="far fa-clock"></i> Diperbarui 5 menit lalu
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

        {/* ==== BAR CHART + KRITIK PELANGGAN ==== */}
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Jumlah Pesanan per Layanan</Card.Title>
                <p className="card-category">Periode 2025</p>
              </Card.Header>
              <Card.Body>
                <ChartistGraph
                  data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep"],
                    series: [
                      [50, 70, 90, 110, 130, 140, 160, 170, 180], // Marking
                      [30, 45, 60, 75, 80, 100, 110, 120, 130], // Cutting
                      [25, 30, 40, 45, 50, 55, 60, 70, 80], // Engraving
                      [20, 25, 30, 35, 40, 50, 60, 65, 75], // Custom
                    ],
                  }}
                  type="Bar"
                  options={{
                    seriesBarDistance: 10,
                    axisX: { showGrid: false },
                    height: "260px",
                  }}
                />
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i> Marking{" "}
                  <i className="fas fa-circle text-danger"></i> Cutting{" "}
                  <i className="fas fa-circle text-warning"></i> Engraving{" "}
                  <i className="fas fa-circle text-success"></i> Custom
                </div>
              </Card.Footer>
            </Card>
          </Col>

          {/* ==== KRITIK & SARAN ==== */}
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Kritik & Saran Pelanggan</Card.Title>
                <p className="card-category">Feedback terbaru</p>
              </Card.Header>
              <Card.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Nama</th>
                      <th>Layanan</th>
                      <th>Pesan</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Andi</td>
                      <td>Laser Cutting</td>
                      <td>Hasil potong rapi dan cepat!</td>
                      <td>⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                      <td>Sinta</td>
                      <td>Laser Engraving</td>
                      <td>Ukiran presisi, tapi waktu agak lama.</td>
                      <td>⭐⭐⭐</td>
                    </tr>
                    <tr>
                      <td>Rafi</td>
                      <td>Custom Design</td>
                      <td>Desain bagus, pelayanan ramah.</td>
                      <td>⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                      <td>Maria</td>
                      <td>Laser Marking</td>
                      <td>Marking cepat dan sesuai request.</td>
                      <td>⭐⭐⭐⭐⭐</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
