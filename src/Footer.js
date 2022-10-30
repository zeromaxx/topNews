import React from "react";
import {AiFillLinkedin} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/aris-lamprinidis-aa7b81236/"
        >
          <AiFillLinkedin className="linkedIn"/>
        </a>
        <p>&copy; 2022 Aristeidis Lamprinidis</p>
      </div>
    </footer>
  );
}
