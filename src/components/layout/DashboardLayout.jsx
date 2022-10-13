import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Sidebar from './Sidebar';

function DashboardLayout() {
  return (
    <>
      <Sidebar />
      <div className="ml-64">
        <div className="p-7">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default DashboardLayout;