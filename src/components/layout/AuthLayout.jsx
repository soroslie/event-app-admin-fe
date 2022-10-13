import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function AuthLayout() {
  return (
    <Outlet />
  );
}

export default AuthLayout;
