import { useLocation, useNavigate } from 'react-router-dom';
import LocalStorageConstant from '../../constants/local_storage';
import JWTHelper from '../../helper/jwtHelper';

const { useEffect } = require('react');

const RequireAuth = ({ children, redirectTo }) => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem(LocalStorageConstant.tokenKey);

    if (!token) {
      navigate(redirectTo, { replace: true, state: { from: location.pathname } });
    }

    if (token) {
      const decodedJwt = JWTHelper.parse(token);
      if (decodedJwt.exp * 1000 < Date.now()) {
        navigate(redirectTo, { replace: true, state: { from: location.pathname } });
      }
    }
  }, [location]);

  return children;
};

export default RequireAuth;
