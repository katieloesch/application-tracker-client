import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h2>HOME</h2>,
  },
  {
    path: '/about',
    element: <h2>ABOUT</h2>,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
