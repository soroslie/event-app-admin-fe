import React from 'react';

function PageHeader({ title }) {
  return (
    <div>
      <h1 className="text-center text-xl text-orange-600">{title}</h1>
      <hr className="my-1 h-px bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
}

export default PageHeader;
