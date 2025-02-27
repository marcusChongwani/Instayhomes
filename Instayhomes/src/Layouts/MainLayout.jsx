


import React from 'react';
import Navbar from '../Sections/Main/Components/Navigation/Navbar';



function MainLayout({ children }) {
  return (
    <div className="main-container">
        <Navbar />
        <div className="">
          {children}
        </div>
    </div>
  );
}

export default MainLayout;