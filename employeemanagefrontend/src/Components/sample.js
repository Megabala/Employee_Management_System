import React from 'react';
import './sample.css';

const ImageWithText = () => {
  const text = 'Sample Text';
  const imageSource = './images/dept5.jpg';

  return (
    <div className="image-container">
      <div className="text-overlay">{text}</div>
      <img src={imageSource} alt="Image" />
    </div>
  );
};

export default ImageWithText;
