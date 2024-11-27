import React from "react";

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4"
    style={{ backgroundColor: "#007bff", color: "#fff" }}>
      {/* Brand Logo */}
      <a href="/" className="brand-link">
        
        <span className="brand-text font-weight-light"><i class="fas fa-graduation-cap"></i> UJIAN ONLINE</span>
      </a>

      {/* Sidebar */}
      <div className="sidebar">

        {/* Sidebar Menu */}
        <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>Dashboard</p>
            </a>
          </li>
          <hr />
          <li className="nav-item">
            <a href="/mata-pelajaran" className="nav-link">
              <i className="nav-icon fas fa-book"></i>
              <p>Mata Pelajaran</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/kelas" className="nav-link">
              <i className="nav-icon fas fa-school"></i>
              <p>Kelas</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/siswa" className="nav-link">
              <i className="nav-icon fas fa-user-friends"></i>
              <p>Siswa</p>
            </a>
          </li>
          <hr />
          <li className="nav-item">
            <a href="/ujian" className="nav-link">
              <i className="nav-icon fas fa-user-edit"></i>
              <p>Ujian</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/sesi-ujian" className="nav-link">
              <i className="nav-icon fas fa-edit"></i>
              <p>Sesi Ujian</p>
            </a>
          </li>
          <hr />
          <li className="nav-item">
            <a href="/laporan-ujian" className="nav-link">
              <i className="nav-icon fas fa-copy"></i>
              <p>Laporan Nilai</p>
            </a>
          </li>
          <hr />
          <li className="nav-item">
            <a href="/login" className="nav-link">
              <i className="nav-icon fas fa-sign-in-alt"></i>
              <p>Login</p>
            </a>
          </li>

          <hr />
          <li className="nav-item">
            <a href="/login-siswa" className="nav-link">
              <i className="nav-icon fas fa-sign-in-alt"></i>
              <p>Login Siswa</p>
            </a>
          </li>
        </ul>

        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Sidebar;
