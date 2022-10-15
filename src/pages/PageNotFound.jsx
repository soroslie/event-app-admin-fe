import React from 'react';
import image from '../assets/images/page_not_found.png';

function PageNotFound() {
  return (
    <div className="w-100 flex flex-col">
      <img className="mx-auto" src={image} alt="" />
      <h1 className="mx-auto text-4xl font-bold text-orange-600">Page Not Found</h1>
    </div>
  );
}

export default PageNotFound;
