import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff  } from "react-icons/io";
import './Input.css';  // Importing the CSS file for styling

function Input({value, onChange, placeholder, canBeHidden, maxLength, required}) {
  const [isVisible, setIsVisible] = useState(!canBeHidden);
  const [inputType, setInputType] = useState(canBeHidden?'password':'text');

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setInputType(isVisible ? 'password' : 'text');  // Toggle between 'password' and 'text'
  };

  return (
    <div className="input-container">
      <input 
        value={value}
        onChange={onChange}
        type={inputType} 
        className="styled-input" 
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
      />
      {canBeHidden && <button className="toggle-button" onClick={toggleVisibility}>
        {isVisible ? <IoMdEye/> : <IoMdEyeOff/>}
      </button>}
    </div>
  );
}

export default Input;
