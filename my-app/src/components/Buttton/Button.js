import React from 'react';
import './Button.css';  // Import the CSS for styling

function Button({ children, onClick, style={}, type = "button", className}) {
  return (
    <button className={className?className+" custom-button":"custom-button"} onClick={onClick} type={type} style={style}>
      {children}  {/* Render the children passed to the button */}
    </button>
  );
}

export default Button;
