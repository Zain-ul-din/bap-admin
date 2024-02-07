import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './lib/theme.ts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './lib/constant.ts';

import SignIn from './components/pages/SignIn.tsx';
import RootLayout from './components/layouts/RootLayout.tsx';
import Dashboard from './components/pages/Dashboard.tsx';
import Organization from './components/pages/Organization.tsx';
import Ambulance from './components/pages/Ambulance.tsx';
import Users from './components/pages/Users.tsx';
import Booking from './components/pages/Booking.tsx';
import { GeneralSettings, PaymentSettings } from './components/pages/Settings';

const router = createBrowserRouter([
  {
    path: ROUTES['Sign in'],
    element: <SignIn />,
  },
  {
    path: ROUTES['Dashboard'],
    element: <RootLayout />,
    children: [
      { path: ROUTES['Dashboard'], element: <Dashboard /> },
      { path: ROUTES['Organization'], element: <Organization /> },
      { path: ROUTES['Users'], element: <Users /> },
      { path: ROUTES['Ambulance'], element: <Ambulance /> },
      { path: ROUTES['Booking'], element: <Booking /> },
      { path: ROUTES['Settings'], element: <GeneralSettings /> },
      { path: ROUTES['Emergency contact'], element: <>Emergency</> },
      { path: `${ROUTES['Settings']}/payments`, element: <PaymentSettings /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
