import React from "react";
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiReact, SiVite } from "react-icons/si"

function Skills() {
  return (
    <div className="max-w-4xl mx-auto py-12" id="tech">
      <p className="text-2xl text-black text-center md:text-4xl pt-4 font-bold">
      🛠️ Mes outils
      </p>
      <div className="flex flex-wrap justify-center pt-8">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiHtml5 color="f06529" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl text-center sm:text-2xl font-semibold">
            HTML
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiCss3 color="#1d4ed8" className="mx-auto text-4xl"/>
          <p className="mt-6 text-xl text-center sm:text-2xl font-semibold">
            CSS
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiTailwindcss color="#61DBFB" className="mx-auto text-4xl"/>
          <p className="mt-6 text-xl text-center sm:text-2xl font-semibold">
            TailwindCSS
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiJavascript color="#FFFF00" className="mx-auto text-4xl"/>
          <p className="mt-6 text-xl text-center sm:text-2xl font-semibold">
            JavaScript
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiReact color="#61DBFB" className="mx-auto text-4xl"/>
          <p className="mt-6 text-xl text-center sm:text-2xl font-semibold">
            React.JS
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiVite color="#ff7db8" className="mx-auto text-4xl"/>
          <p className="mt-6 text-xl text-center sm:text-2xl font-semibold">
            Vite.JS
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;