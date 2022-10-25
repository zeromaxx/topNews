import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ borderBottom:'1px solid #ccc' }}>
      <div className="navbar">
        <Link to='/'>
          <h1>
            <span>Greece</span> News
          </h1>
        </Link>
        <ul>
          <li><Link to='/health'>Υγεία</Link></li>
          <li>οικονομία</li>
          <li>διεθνή</li>
          <li>αθλητισμός</li>
        </ul>
      </div>
    </nav>
  );
}
