// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <li>
        <Link to="/"></Link>
      </li>
      <li>
        <Link to="/Contact">Contact</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/Portfolio">Portfolio</Link>
      </li>
    </div>
  );
}
