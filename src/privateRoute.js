import React from 'react'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
  const isAuth = true;
  return isAuth ? children : <Navigate to="/" />;
}

export default PrivateRoute