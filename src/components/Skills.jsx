import React from "react";
import {
	SiHtml5,
	SiCss3,
	SiTailwindcss,
	SiJavascript,
	SiReact,
	SiCsharp,
	SiExpress,
	SiDotnet,
} from 'react-icons/si';

function Skills() {

  const skills = {
		Html5: <SiHtml5 color='#f06529' className='cards_logo' />,
		Css3: <SiCss3 color='#1d4ed8' className='cards_logo' />,
		Tailwindcss: <SiTailwindcss color='#61DBFB' className='cards_logo' />,
		Javascript: <SiJavascript color='#FFFF00' className='cards_logo' />,
		React: <SiReact color='#61DBFB' className='cards_logo' />,
		Express: <SiExpress className='mx-auto text-4xl' />,
		Csharp: <SiCsharp color='#6d28d9' className='cards_logo' />,
		NET: <SiDotnet className='cards_logo' />
	};
  
  const skillsList = Object.keys(skills).map((skill) => {
    return (
      <div className='cards'>
        {skills[skill]}
        <p className='cards_text'>{skill}</p>
      </div>
    );
  });

  return (
		<div className='cards_container' id='tech'>
			<p className=' text-black text-center text-4xl pt-4 font-bold'>
				🛠️ Mes outils
			</p>
			<div className='flex flex-wrap justify-center pt-8'>
				{skillsList}
			</div>
		</div>
	);
}

export default Skills;