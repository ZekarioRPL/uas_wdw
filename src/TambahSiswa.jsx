import React from "react";

const TambahSiswa = () => {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <button className="btn btn-sm btn-secondary">
            <i className="fas fa-arrow-left"></i> Kembali
          </button>
          <span className="ml-2">Tambah Siswa</span>
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="nis">NISN</label>
                  <input
                    type="text"
                    id="nis"
                    className="form-control"
                    placeholder="Masukkan NISN Siswa"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="kelas">Kelas</label>
                  <select id="kelas" className="form-control">
                    <option value="">Pilih Kelas</option>
                    <option value="1">Kelas 1</option>
                    <option value="2">Kelas 2</option>
                    <option value="3">Kelas 3</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Masukkan Password"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="nama">Nama Lengkap</label>
                  <input
                    type="text"
                    id="nama"
                    className="form-control"
                    placeholder="Masukkan Nama Siswa"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="jenisKelamin">Jenis Kelamin</label>
                  <select id="jenisKelamin" className="form-control">
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="L">Laki-Laki</option>
                    <option value="P">Perempuan</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="konfirmasiPassword">Konfirmasi Password</label>
                  <input
                    type="password"
                    id="konfirmasiPassword"
                    className="form-control"
                    placeholder="Masukkan Konfirmasi Password"
                  />
                </div>
              </div>
            </div>
            <div className="form-group d-flex justify-content-between">
              <button type="reset" className="btn btn-warning">
                Reset
              </button>
              <button type="submit" className="btn btn-primary">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TambahSiswa;
