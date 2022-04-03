import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

const IndexPage = () => {
  useEffect(() => {
    navigate('/getting-started');
  }, []);
  return null;
};

export default IndexPage;
