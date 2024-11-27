import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const Dashboard = () => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Welcome!</h3>
                  </div>
                  <div className="card-body">
                    Content here...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
