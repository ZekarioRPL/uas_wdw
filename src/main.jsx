
import "./index.css";

// AdminLTE dan Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "admin-lte/dist/css/adminlte.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min";
import "admin-lte/dist/js/adminlte.min";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Halaman
import Login from "./Login.jsx";
import LoginSiswa from "./LoginSiswa.jsx";

import Dashboard from "./Dashboard.jsx";
import MataPelajaran from "./MataPelajaran.jsx";
import TambahPelajaran from "./TambahPelajaran.jsx";
import Kelas from "./Kelas.jsx";
import TambahKelas from "./TambahKelas.jsx";
import Siswa from "./Siswa.jsx";
import TambahSiswa from "./TambahSiswa.jsx";
import Ujian from "./Ujian.jsx";
import DetailSoalUjian from "./DetailSoalUjian.jsx";
import SesiUjian from "./SesiUjian.jsx";
import LaporanUjian from "./LaporanUjian.jsx";
import DashboardSiswa from "./DashboardSiswa.jsx";
import KonfirmasiUjian from "./KonfirmasiUjian.jsx";
import UjianSiswa from "./UjianSiswa.jsx";
import UjianSelesai from "./UjianSelesai.jsx";

// Import Layouts
import MainLayout from "./components/MainLayout.jsx";

// Import Header Siswa
import HeaderSiswa from "./components/HeaderSiswa.jsx";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Halaman Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/login-siswa" element={<LoginSiswa />} />

        {/* Halaman dengan MainLayout untuk Admin */}
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/mata-pelajaran" element={<MataPelajaran />} />
                <Route path="/tambah-pelajaran" element={<TambahPelajaran />} />
                <Route path="/kelas" element={<Kelas />} />
                <Route path="/tambah-kelas" element={<TambahKelas />} />
                <Route path="/siswa" element={<Siswa />} />
                <Route path="/tambah-siswa" element={<TambahSiswa />} />
                <Route path="/ujian" element={<Ujian />} />
                <Route
                  path="/detail-soal-ujian"
                  element={<DetailSoalUjian />}
                />
                <Route path="/sesi-ujian" element={<SesiUjian />} />
                <Route path="/laporan-ujian" element={<LaporanUjian />} />
              </Routes>
            </MainLayout>
          }
        />

        <Route path="/dashboard-siswa" element={ <> <HeaderSiswa /> <DashboardSiswa /> </>}/>
        <Route path="/dashboard-siswa/konfirmasi-ujian" element={ <> <HeaderSiswa /> <KonfirmasiUjian /> </>}/>
        <Route path="/dashboard-siswa/ujian-siswa" element={ <> <HeaderSiswa /> <UjianSiswa /> </>}/>
        <Route path="/dashboard-siswa/ujian-selesai" element={ <> <HeaderSiswa /> <UjianSelesai /> </>}/>
        
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
