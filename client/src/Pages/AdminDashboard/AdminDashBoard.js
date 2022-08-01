import "./AdminDashboard.css";
import React from "react";
import Users from "./Users List/Users";

const AdminDashBoard = () => {
  
  return (
    <div style={{ backgroundColor: "#4950578a" }}>

      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="stylesheet" href="css/style.css" />
      <div className="wrapper d-flex align-items-stretch">
      
<Users/>
        {/* Page Content  */}
        
      </div>
    </div>
  );
};

export default AdminDashBoard;
