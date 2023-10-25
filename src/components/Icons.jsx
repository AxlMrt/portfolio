import React from "react";
import ReactDomServer from "react-dom/server";
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";
import Icon from './Icon.jsx';

const social = [
  {
    ref: 'https://github.com/AxlMrt',
    class: 'text-xl m-1 p-1 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300',
    icon: <FaGithub />,
  },
  {
    ref: 'https://www.linkedin.com/in/axel-martin-0660b0253/',
    class: 'text-xl m-1 p-1 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300',
    icon: <FaLinkedin />,
  },
  {
    ref: 'mailto:axel-mrt@axel-martin.fr',
    class: 'text-xl m-1 p-1 sm:p-2 text-black-900 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300',
    icon: <FaEnvelope />,
  },
]

function Icons() {

  return (
    <div className='flex items-center justify-center mt-4'>
      {
        social.map((anchor, index) => {
          return (
            <Icon name={anchor.name} iconRef={anchor.ref} iconClass={anchor.class} socialIcon={anchor.icon} key={index} />
          )
        })
      }
    </div>
  )
}

export default Icons;
