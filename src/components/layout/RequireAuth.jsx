import { useLocation, useNavigate } from 'react-router-dom';

const { useEffect } = require('react');

const RequireAuth = ({ children, redirectTo }) => {
  const navigate = useNavigate();
  const loc = useLocation();
  useEffect(() => {
    const id = localStorage.getItem('id');
    if (!id) {
      navigate(redirectTo, { replace: true, state: { from: loc.pathname } });
    }
  }, []);

  return children;
};

export default RequireAuth;
