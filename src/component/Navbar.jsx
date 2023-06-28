import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const { Nav } = Layout;

const Navbar = () => {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: " center",
        margin: 10,
        gap: 40,
      }}
    >
      <Link to="/" >All</Link>
      <Link to="/Active">Active</Link>
      <Link to="/Completed">Completed</Link>
    </div>
  );
};

export default Navbar;
