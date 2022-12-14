import React from 'react';

export const MenuIcon = ({ handleMenu }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="20"
      viewBox="0 0 28 20"
      onClick={handleMenu}
    >
      <g fill="#191919">
        <rect width="28" height="2.857" y="17.143" rx="1.429" />
        <rect width="28" height="2.857" y="8.571" rx="1.429" />
        <rect width="28" height="2.857" rx="1.429" />
      </g>
    </svg>
  );
};
