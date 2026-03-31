import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <CustomCursor />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
