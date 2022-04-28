import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const [user] = user;
  let location = useLocation();

  if (user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;

// let navigate = useNavigate();
// let location = useLocation();

// let from = location.state?.from?.pathname || "/";

// navigate(from, { replace: true });
