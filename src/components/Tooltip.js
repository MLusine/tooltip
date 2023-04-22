import React, { useState } from 'react';



const Tooltip = ({ children, text }) => {
  const [show, setShow] = useState(false);

  const handleMouse = (event) => {
    setShow(event.type === "mouseenter");
  };


  return (
    <div onMouseEnter={handleMouse} onMouseLeave={handleMouse}>
      {children}
      {show && <div className="tooltip">{text}</div>}
    </div>
  );
};

export default Tooltip;
