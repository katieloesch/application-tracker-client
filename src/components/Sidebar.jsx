import React from 'react';
import Wrapper from '../styledComponents/Sidebar';
import { useDashboardContext } from '../pages/DashboardLayout';

const Sidebar = () => {
  //testing to see if custom hook is working
  const data = useDashboardContext();
  console.log(data);
  return (
    <Wrapper>
      <h1>Sidebar</h1>
    </Wrapper>
  );
};

export default Sidebar;
