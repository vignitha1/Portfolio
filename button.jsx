import React from 'react';

const Button = ({ text, variant = 'primary', disabled = false, onClick, type = "button" }) => {
  // Define styles based on the variant prop
  const buttonClass = `btn btn-${variant}`;

  return (
    <button 
      type={type}
      className={buttonClass} 
      onClick={onClick} 
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;