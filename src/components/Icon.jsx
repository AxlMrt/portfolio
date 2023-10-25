import React from "react";

function Icon({ name, iconRef, iconClass, socialIcon }) {
  return (
    <a
			href={iconRef}
			className={iconClass}
		>
      { socialIcon }
			<span className='sr-only'>{ name }</span>
		</a>
  )
}

export default Icon;
