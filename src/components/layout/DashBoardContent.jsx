import React from 'react';
import PageHeader from '../PageHeader';

function DashBoardContent({ title, children }) {
  return (
    <div className="dashboard-content px-7 py-4">
      <PageHeader title={title} />
      {children}
    </div>
  );
}

export default DashBoardContent;
