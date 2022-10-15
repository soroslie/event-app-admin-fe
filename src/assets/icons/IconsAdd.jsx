import React from 'react';

function IconsAdd({ color, size }) {
  return (
    <svg
      enableBackground="new 0 0 50 50"
      height={size}
      width={size}
      id="Layer_1"
      version="1.1"
      viewBox="0 0 50 50"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="none" height={size} width={size} />
      <line
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="5"
        x1="9"
        x2="41"
        y1="25"
        y2="25"
      />
      <line
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="5"
        x1="25"
        x2="25"
        y1="9"
        y2="41"
      />
    </svg>
  );
}

export default IconsAdd;
