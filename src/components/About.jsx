import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";

function About() {
  return (
    <div className="max-w-4xl mt-20 mx-auto">
      <p className="text-center text-2xl text-black md:text-4xl font-bold ">
        Hey 👋
      </p>
      <p className="text-center text-base text-gray-600 sm:text-2xl leading-relaxed mt-10">
        Je suis un développeur frontend passionné, avec un intérêt particulier à rendre les choses simples.
        Tous mes projets sont construits de zéro, de la planification à la conception.
      </p>
    <ScrollIntoView selector="#tech">
      <div className="mx-auto mt-6 p-20">
        <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500" />
      </div>
    </ScrollIntoView>
    </div>
  );
}

export default About;