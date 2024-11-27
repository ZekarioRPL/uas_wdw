import React from "react";

const Dashboard = () => {
  return (
    <div className="content-wrapper">
      {/* Content Header */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Dashboard</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {/* Card for Kelas */}
            <div className="col-lg-3 col-6">
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>0</h3>
                  <p>Kelas</p>
                </div>
                <div className="icon">
                  <i className="fas fa-school"></i>
                </div>
              </div>
            </div>
            {/* Card for Siswa */}
            <div className="col-lg-3 col-6">
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>0</h3>
                  <p>Siswa</p>
                </div>
                <div className="icon">
                  <i className="fas fa-users"></i>
                </div>
              </div>
            </div>
            {/* Card for Ujian */}
            <div className="col-lg-3 col-6">
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>0</h3>
                  <p>Ujian</p>
                </div>
                <div className="icon">
                  <i className="fas fa-edit"></i>
                </div>
              </div>
            </div>
            {/* Card for Sesi Ujian */}
            <div className="col-lg-3 col-6">
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>0</h3>
                  <p>Sesi Ujian</p>
                </div>
                <div className="icon">
                  <i className="fas fa-clock"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
