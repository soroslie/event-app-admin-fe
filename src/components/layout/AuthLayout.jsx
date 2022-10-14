import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import LocalStorageConstant from '../../constants/local_storage';

function AuthLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem(LocalStorageConstant.tokenKey);
    if (token) {
      navigate('/');
    }
  }, []);
  return (
    <Outlet />
  );
}

export default AuthLayout;
