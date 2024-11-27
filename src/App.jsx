import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
// import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      {/* <Dashboard /> */}
      <Footer />
    </div>
  );
};

export default App;
