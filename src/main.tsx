import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import Network from './pages/Network.tsx';
import Labs from './pages/Labs.tsx';
import Service from './pages/Service.tsx';
import Domain from './pages/Domain.tsx';
import LabUbuntu from './pages/LabUbuntu.tsx';
import SignUp from './auth/SignUp.tsx';
import SignIn from './auth/SignIn.tsx';
import SideBar from './components/SideBar.tsx';
import { PrimeReactProvider } from 'primereact/api';
import Forget from './auth/Forget.tsx';


const MainLayout = () => (
  <div className='flex'>
    <SideBar />
    <Outlet />
  </div>
);

const AuthLayout = () => (
  <>
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: "Dashboard"
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/:id/home",
        element: <Home />,
      },
      {
        path: "/:id/network",
        element: <Network />
      },
      {
        path: "/:id/Labs",
        element: <Labs />
      },
      {
        path: "/:id/service",
        element: <Service />
      },
      {
        path: "/:id/domains",
        element: <Domain />
      },
      {
        path: "/:id/labs/ubuntu",
        element: <LabUbuntu />
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "forget",
        element: <Forget />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>,
);
