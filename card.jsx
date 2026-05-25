import React from 'react';
import Button from './Button';

const Card = ({ title, description, image, buttonText, onBtnClick }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Button 
          text={buttonText} 
          variant="secondary" 
          onClick={onBtnClick} 
        />
      </div>
    </div>
  );
};

export default Card;