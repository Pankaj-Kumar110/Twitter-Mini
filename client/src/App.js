import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from "./pages/Home.jsx"
import Profile from './Profile/Profile.jsx';
import Explore from './pages/Explore.jsx';
import Signin from './Signin/Signin.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Error from './pages/Error/Error.jsx';

import './App.css';

const Layout = () => {
  return (
    <div className="md:w-8/12 mx-auto">
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signout",
        element: <Signin />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
