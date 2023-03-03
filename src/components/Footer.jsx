import React from "react";
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";

function Footer() {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
        <a href="https://github.com/AxlMrt" className="text-xl m-1 p-1 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300">
            <FaGithub />
            <span className="sr-only">Github</span>
          </a>
          <a href="https://www.linkedin.com/in/axel-martin-0660b0253/" className="text-xl m-1 p-1 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300">
            <FaLinkedin />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:axel-mrt@axel-martin.fr" className="text-xl m-1 p-1 sm:p-2 text-black-900 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300">
            <FaEnvelope />
            <span className="sr-only">Mail</span>
          </a>
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
    </div>
  );
}

export default Footer;