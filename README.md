# Application Tracker

- package manager used: npm (v10.8.1)

  - https://www.npmjs.com/

- dependencies

  - sass (v1.77.8)
    - npm: https://www.npmjs.com/package/sass
    - repo: https://github.com/sass/dart-sass
  - @tanstack/react-query (v4.29.5)
    - npm: https://www.npmjs.com/package/@tanstack/react-query
    - repo: https://github.com/TanStack/query
    - homepage: https://tanstack.com/query/latest
  - @tanstack/react-query-devtools (v4.29.6)
    - npm: https://www.npmjs.com/package/@tanstack/react-query-devtools
    - repo: https://github.com/TanStack/query
    - homepage: https://tanstack.com/query/latest
  - axios (v1.3.6)
    - npm: https://www.npmjs.com/package/axios
    - repo: https://github.com/axios/axios
    - homepage: https://axios-http.com/
  - dayjs (v1.11.7)
    - npm: https://www.npmjs.com/package/dayjs
    - repo: https://github.com/iamkun/dayjs
    - homepage: https://day.js.org/
  - react-icons (v4.8.0)
    - npm: https://www.npmjs.com/package/react-icons
    - repo: https://github.com/react-icons/react-icons
    - homepage: https://react-icons.github.io/react-icons/
  - react-router-dom (v6.10.0)
    - npm: https://www.npmjs.com/package/react-router-dom
    - repo: https://github.com/remix-run/react-router
    - homepage: https://reactrouter.com/en/main
  - react-toastify (v9.1.2)
    - npm: https://www.npmjs.com/package/react-toastify
    - repo: https://github.com/fkhadra/react-toastify
    - homepage: https://fkhadra.github.io/react-toastify/introduction/
  - recharts (v2.5.0)
    - npm: https://www.npmjs.com/package/recharts
    - repo: https://github.com/recharts/recharts
    - homepage: https://recharts.org/en-US/
  - styled-components (v5.3.10)
    - npm: https://www.npmjs.com/package/styled-components
    - repo: https://github.com/styled-components/styled-components
    - homepage: https://styled-components.com/

### resources & tutorials

- docs:
  - vite
    - https://vitejs.dev/guide/
  - react-router: Migrating to RouterProvider
    - https://reactrouter.com/en/main/upgrading/v6-data
  - TanStack Query
    - https://tanstack.com/query/latest/docs/framework/react/quick-start
  - axios:
    - https://axios-http.com/docs/intro
  - dayjs:
    - https://day.js.org/docs/en/installation/installation
  - styled-components
    - https://styled-components.com/docs
- blogs:
  - [The Power Of CreateBrowserRouter: Optimizing Your React App's Navigation](https://www.dhiwise.com/post/the-power-of-createbrowserrouter-optimizing-your-react-app) by Daxesh Patel
  - [Getting Started with createBrowserRouter in react-router-dom](https://medium.com/@pavitramodi.it/getting-started-with-createbrowserrouter-in-react-router-dom-e3131820fef4) by [Pavitra Modi](https://medium.com/@pavitramodi.it)
- Youtube:
  - [React Router in Depth #3 - Router Provider, createBrowserRouter & Outlet](https://www.youtube.com/watch?v=5s57C7leXc4&pp=ygUacmVhY3QgY3JlYXRlYnJvd3NlcnJvdXRlciA%3D) by [Net Ninja](https://www.youtube.com/@NetNinja)
- udemy:
  - [MERN 2024 Edition - MongoDB, Express, React and NodeJS](https://www.udemy.com/course/mern-stack-course-mongodb-express-react-and-nodejs/) by [John Smilga](https://www.udemy.com/user/janis-smilga-3/)
    - GitHub:
      - https://github.com/john-smilga/mern-jobify-v2
      - https://github.com/john-smilga

### day 1:23/07/2024

- set up frontend using vite

```zsh

npm create vite@latest application-tracker-client -- --template react

```

import some global syles (css) from a template

day 2: 24/07/2024

- install npm packages
- set up react router
- create react components for different pages
- set up nested routes

day 2: 25/07/2024

---

challenges:

wins:
This was not my first React project, so for this app I wanted to challenge myself and expand my understanding of the framework. I set up previous application using the 'create-react-app' command so for this project I wanted to learn how to use vite. Although the file structure and jsx extension are slighly different it didn't take me too long to get the hang of it.

Similarly, I have used react router before, but I normally do so using the the `<BrowserRouter>`, `<Route>` and `<Routes>` components. For this project I wanted to learn a new way of setting up routes and opted for the `createBrowserRouter()` function and the `<RouterProvider>` components

```JSX

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

```

In React Router, `<Route>` and `<Routes>` are components traditionally used for defining routes within a single-page application (SPA). On the other hand, `createBrowserRouter` and `RouterProvider` are newer APIs introduced in React Router v6.4 to provide a more flexible and powerful routing system.

### `<Route>` and `<Routes>`

- **Purpose**: These components are used to define and manage the routing within your React application.
- **Usage**:
  - `<Routes>` is a container for all your route definitions.
  - `<Route>` defines individual routes and their corresponding components.

#### Example:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### `createBrowserRouter` and `RouterProvider`

- **Purpose**: These APIs provide a more declarative way to configure routing, supporting data loading, error handling, and nested routing structures out of the box.
- **Usage**:
  - `createBrowserRouter` is used to create a router instance with a more structured and centralized configuration.
  - `RouterProvider` is used to provide the router instance to your application, similar to how you might use a context provider.

#### Example:

```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
```

- https://reactrouter.com/en/main/upgrading/v6-data
- https://www.dhiwise.com/post/the-power-of-createbrowserrouter-optimizing-your-react-app
- https://medium.com/@pavitramodi.it/getting-started-with-createbrowserrouter-in-react-router-dom-e3131820fef4

### Key Differences

1. **Configuration Style**:

   - **Route and Routes**: These components are JSX-based and are typically used within the render method of your component.
   - **createBrowserRouter and RouterProvider**: These are more configuration-based, allowing you to define routes in a more structured manner, supporting nested routes and other advanced features directly.

2. **Features**:

   - **Route and Routes**: Basic routing capabilities.
   - **createBrowserRouter and RouterProvider**: Enhanced features such as data loading, deferred rendering, error handling, and nested routing directly within the route configuration.

3. **API Flexibility**:

   - **Route and Routes**: More straightforward and traditional approach, suitable for simpler applications.
   - **createBrowserRouter and RouterProvider**: Provides a more powerful and flexible API, ideal for complex applications requiring advanced routing capabilities.

4. **Centralized Configuration**:
   - **Route and Routes**: Routes are defined directly within the component tree.
   - **createBrowserRouter and RouterProvider**: Routes are configured in a centralized object, making it easier to manage and understand the routing structure of the application.

### Summary

- Use **`<Route>` and `<Routes>`** for straightforward and traditional JSX-based route definitions within your components.
- Use **`createBrowserRouter` and `RouterProvider`** for a more powerful, declarative, and centralized routing configuration that supports advanced features like nested routes, data loading, and error handling.

lessons learned:
