import React from 'react';

function PageHeader({ title }) {
  return (
    <div>
      <h1 className="text-center capitalize text-xl text-orange-600">{title}</h1>
      <hr className="my-1 h-px bg-gray-200 border-0" />
    </div>
  );
}

export default PageHeader;
