import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Contact() {
  return (
		<div className='max-w-lg w-full text-center m-auto pt-36 pb-10'>
			<h1 className='text-2xl sm:text-4xl'>
				Intéressé(e) par une éventuelle collaboration ?
			</h1>
			<a
				href='mailto:axel-mrt@axel-martin.fr'
				className='text-blue-500 mx-2 hover:underline'
			>
				<span className='mt-10 inline-block w-auto bg-black font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer'>
					<div className='flex flex-row items-center'>
						<span className='mx-3'>Contactez-moi</span>
						<FaArrowRight color='white' />
					</div>
				</span>
			</a>
		</div>
	);
}

export default Contact;
