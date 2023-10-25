import React from "react";

function Skill({ name, skillIcon }) {

  return (
    <div className='cards'>
      {skillIcon}
      <p className='cards_text'>{name}</p>
    </div>

  )
}

export default Skill;
