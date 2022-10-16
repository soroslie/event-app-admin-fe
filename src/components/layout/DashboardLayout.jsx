import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Sidebar from './Sidebar/Sidebar';

function DashboardLayout() {
  return (
    <>
      <Sidebar />
      <div className="ml-40 md:ml-64">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default DashboardLayout;
