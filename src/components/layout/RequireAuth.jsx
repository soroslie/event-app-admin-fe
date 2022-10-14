import { useLocation, useNavigate } from 'react-router-dom';
import LocalStorageConstant from '../../constants/local_storage';

const { useEffect } = require('react');

const RequireAuth = ({ children, redirectTo }) => {
  const navigate = useNavigate();
  const loc = useLocation();
  useEffect(() => {
    const token = localStorage.getItem(LocalStorageConstant.tokenKey);
    if (!token) {
      navigate(redirectTo, { replace: true, state: { from: loc.pathname } });
    }
  }, []);

  return children;
};

export default RequireAuth;
