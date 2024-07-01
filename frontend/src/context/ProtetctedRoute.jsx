// ProtectedRoute.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = () => {
      if (!localStorage.getItem("Users")) {
        navigate("/login");
      }
    };

    checkAuthentication();
  }, [navigate]);

  return <Component />;
};

export default ProtectedRoute;