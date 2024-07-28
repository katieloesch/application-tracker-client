import React from 'react';
import { Outlet } from 'react-router-dom';
import Wrapper from '../styledComponents/Dashboard';
import { Navbar, Sidebar, SidebarMobile } from '../components';

const DashboardLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard-nav'>
        <SidebarMobile />
        <Sidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default DashboardLayout;
