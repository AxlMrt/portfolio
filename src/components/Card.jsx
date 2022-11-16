import React from "react";
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";

function Card() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="w-32 h-32 mx-auto shadow-xl rounded-full drop-shadow-sm overflow-hidden">
          <img src="./image/axel.jpg" alt="profil" className="img"/>
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl text-gray-900"> Axel Martin </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2"> Développeur Frontend</p>
        </div>
        <div className="flex items-center justify-center mt-4">
          <a href="https://github.com/AxlMrt" className="text-xl m-1 p-1 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300">
            <FaGithub />
            <span className="sr-only">Github</span>
          </a>
          <a href="https://www.linkedin.com/in/axel-martin-0660b0253/" className="text-xl m-1 p-1 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300">
            <FaLinkedin />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:mrt.axl@protonmail.com" className="text-xl m-1 p-1 sm:p-2 text-black-900 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300">
            <FaEnvelope />
            <span className="sr-only">Mail</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;