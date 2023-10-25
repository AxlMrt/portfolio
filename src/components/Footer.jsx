import React from "react";
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";
import Icons from "./Icons.jsx";

function Footer() {
  return (
    <footer className="py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
        <Icons />
       </div>
      <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
          Made with
          <span className="mx-2" role="link" aria-label="heart">
            💙
          </span>
          by
          <a href="mailto:axel-mrt@axel-martin.fr" className="text-blue-500 mx-2 hover:underline">
            Axel
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
