import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Dashboard from './Dashboard.jsx'

import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "admin-lte/dist/css/adminlte.min.css";  // AdminLTE CSS
import "@fortawesome/fontawesome-free/css/all.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min";
import "admin-lte/dist/js/adminlte.min";


ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./Dashboard";

// // AdminLTE CSS
// import "admin-lte/dist/css/adminlte.min.css";

// // Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";

// // Font Awesome
// import "font-awesome/css/font-awesome.min.css";

// // jQuery and AdminLTE JS
// import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "admin-lte/dist/js/adminlte.min.js";

// ReactDOM.render(<App />, document.getElementById("root"));
