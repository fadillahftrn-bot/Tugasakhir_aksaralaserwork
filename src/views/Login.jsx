import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Asumsi: Jika Anda memiliki file logo, letakkan di folder public/ atau import di sini.
// Contoh jika logo ada di public/logo.png:
// const logoAksara = "/logo.png"; 
// Anda perlu memastikan jalur ini benar di proyek Anda.
const logoAksara = "/logoaksara.png"; // Ganti dengan jalur logo Anda

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Username dan password tidak boleh kosong!");
      return;
    }

    try {
      const url = `http://localhost:3001/akun?username=${username}&password=${password}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Gagal menghubungi server: Status ${response.status}`);
      }

      const data = await response.json();

      if (data.length === 1) {
        alert("Login berhasil!");
        // Tambahkan logika penyimpanan sesi/token jika diperlukan di sini
        navigate("/admin/dashboard");
      } else {
        alert("Username atau password salah!");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert(`Terjadi kesalahan saat login. Pastikan JSON Server berjalan di port 3001.`);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        // Warna background yang lebih gelap
        background: "linear-gradient(135deg, #1d3557, #011627)",
        color: "white",
      }}
    >
      <div
        className="p-5 rounded shadow-lg"
        style={{ 
          background: "white", 
          color: "#333", 
          width: "400px", 
          // Style untuk kartu login
          border: "2px solid #457b9d", // Tambahkan border
          borderRadius: "15px" // Sudut yang lebih membulat
        }}
      >
        
        {/* Konten Baru: Logo dan Teks Sambutan */}
        <div className="text-center mb-4">
          {/* Tambahkan logo di sini. Pastikan logoAksara menunjuk ke path yang benar */}
          <img 
            src={logoAksara} 
            alt="Aksara Laserwork Logo" 
            style={{ 
              width: "80px", // Ukuran logo
              height: "auto", 
              marginBottom: "10px" 
            }} 
          />
          <h2 style={{ color: "#1d3557", marginBottom: "5px", fontWeight: "700" }}>
            Selamat Datang
          </h2>
          <p style={{ color: "#457b9d", fontSize: "1rem" }}>
            di **Aksara Laserwork**
          </p>
          <hr className="my-3" /> {/* Garis pemisah */}
        </div>
        
        <h4 className="text-center mb-4" style={{ color: "#333" }}>Login Pelanggan</h4>
        
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              style={{ borderColor: "#457b9d" }} // Warna border input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              style={{ borderColor: "#457b9d" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              required
            />
          </div>
          <button 
            type="submit" 
            className="btn w-100"
            style={{ 
              backgroundColor: "#1d3557", // Warna tombol utama
              borderColor: "#1d3557",
              color: "white",
              fontWeight: "600"
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}