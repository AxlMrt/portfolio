import React from "react";
import Skill from "./Skill.jsx";
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

const skills = [
  {
    name: "Html5",
    skillIcon: <SiHtml5 color='#f06529' className='cards_logo' />,
  },
  {
    name: "Css3",
    skillIcon: <SiCss3 color='#1d4ed8' className='cards_logo' />,
  },
  {
    name: "Tailwindcss",
    skillIcon: <SiTailwindcss color='#61DBFB' className='cards_logo' />,
  },
  {
    name: "Javascript",
    skillIcon: <SiJavascript color='#FFFF00' className='cards_logo' />,
  },
  {
    name: "React",
    skillIcon: <SiReact color='#61DBFB' className='cards_logo' />,
  },
  {
    name: "Express",
    skillIcon: <SiExpress className='mx-auto text-4xl' />,
  },
  {
    name: "Csharp",
    skillIcon: <SiCsharp color='#6d28d9' className='cards_logo' />,
  },
  {
    name: ".NET",
    skillIcon: <SiDotnet className='cards_logo' />,
  },
]

function Skills() {
  
  return (
		<div className='cards_container' id='tech'>
			<p className=' text-black text-center text-4xl pt-4 font-bold'>
				🛠️ Mes outils
			</p>
			<div className='flex flex-wrap justify-center pt-8'>
				{
          skills.map((skill, index) => {
            return (
              <Skill name={skill.name} skillIcon={skill.skillIcon} key={index}/>   
            )
          })
        }
			</div>
		</div>
	);
}

export default Skills;
