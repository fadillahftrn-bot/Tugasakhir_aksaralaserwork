// src/routes.js
import Dashboard from "views/Dashboard.js";
import Pelanggan from "views/Pelanggan.js";
import GaleriProduk from "views/GaleriProduk";
import Layanan from "views/Layanan.js";
import Laporan from "views/Laporan.js";
import ProfilTempatOjt from "views/ProfilTempatOjt.js";
import Pesanan from "views/Pesanan.js"; // Sesuaikan dengan nama file sebenarnya

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fas fa-home",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/pelanggan",
    name: "Profil Pelanggan",
    icon: "fas fa-users",
    component: Pelanggan,
    layout: "/admin",
  },
  {
    path: "/galeri-produk",
    name: "Galeri Produk",
    icon: "fas fa-images",
    component: GaleriProduk,
    layout: "/admin",
  },
  {
    path: "/layanan",
    name: "Layanan",
    icon: "fas fa-concierge-bell",
    component: Layanan,
    layout: "/admin",
  },
  {
    path: "/pesanan",
    name: "Paket & Harga",
    icon: "fas fa-tags",
    component: Pesanan,
    layout: "/admin",
  },
  {
    path: "/laporan",
    name: "Laporan",
    icon: "fas fa-chart-line",
    component: Laporan,
    layout: "/admin",
  },
  {
    path: "/profil-perusahaan",
    name: "Profil Perusahaan",
    icon: "fas fa-building",
    component: ProfilTempatOjt,
    layout: "/admin",
  },
];

export default dashboardRoutes;
