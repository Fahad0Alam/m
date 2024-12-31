import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function RedirectToRoot() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/' && window.performance.getEntriesByType('navigation')[0].type === 'reload') {
      navigate('/');
    }
  }, [location.pathname, navigate]);

  return null;
}

export default RedirectToRoot;
