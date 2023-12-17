import React, { useEffect, useState } from 'react';

const colors = ['#0b8f65', '#0b408f', '#bb3131', '#752a6f'];

export const Comment = ({ value }) => {
  const [color, setColor] = useState('#0b8f65');
  useEffect(() => {
    setColor(colors[Math.round(Math.random() * colors.length)]);
  }, []);
  return (
    <div className="comment__wrapper">
      <div className="comment__text" style={{ color: color }}>
        {value}
      </div>
    </div>
  );
};
