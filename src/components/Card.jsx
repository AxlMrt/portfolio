import React from "react";
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";
import Icons from "./Icons.jsx";

function Card() {
  return (
		<div className='w-full'>
			<div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5'>
        <div className="w-32 h-32 mx-auto shadow-xl rounded-full drop-shadow-sm overflow-hidden">
          <img
            src='./image/axel-profil.png'
            alt='profil'
            className='w-full '
          />
        </div>
				<div className='text-center mt-5'>
					<p className='text-xl sm:text-2xl text-gray-900'> Axel Martin </p>
					<p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
						{' '}
						Développeur FullStack JS
					</p>
				</div>
        <Icons />
			</div>
		</div>
	);
}

export default Card;
