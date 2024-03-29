import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './lib/theme.ts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './lib/constant.ts';

import SignIn from './components/pages/SignIn.tsx';
import RootLayout from './components/layouts/RootLayout.tsx';
import Dashboard from './components/pages/Dashboard.tsx';
import { Organization } from './components/pages/Organization';
import { AddNewManufacturers, AddNewType, Ambulance, Manufacturers } from './components/pages/Ambulance';
import { Users, MedicalCoorp } from './components/pages/Users';
import Booking from './components/pages/Booking/Booking.tsx';
import { APISettings, GeneralSettings, PaymentSettings, PolicySettings } from './components/pages/Settings';
import Emergency from './components/pages/Emergency.tsx';
import ManageAdmins from './components/pages/ManageAdmins.tsx';
import SupportChat from './components/pages/SupportChat.tsx';
import OrgDetails from './components/pages/Organization/OrgDetails.tsx';
import BookingDetails from './components/pages/Booking/BookingDetails.tsx';
import { BookMapTracking, BookingChat } from './components/pages/Booking/index.ts';

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
      { path: ROUTES['Emergency contact'], element: <Emergency /> },
      { path: ROUTES['Manage Admins'], element: <ManageAdmins /> },
      { path: ROUTES['SupportChat'], element: <SupportChat /> },

      // sub routes
      { path: `${ROUTES['Organization']}/:id`, element: <OrgDetails /> },

      { path: `${ROUTES['Booking']}/:id`, element: <BookingDetails /> },
      { path: `${ROUTES['Booking_Chat']}/:id`, element: <BookingChat /> },
      { path: `${ROUTES['Booking_Tracking']}/:id`, element: <BookMapTracking /> },

      { path: ROUTES['User_Medical_Coorp'], element: <MedicalCoorp /> },

      { path: ROUTES['Ambulance_Manufacturers'], element: <Manufacturers /> },
      { path: ROUTES['Ambulance_AddNewType'], element: <AddNewType /> },
      { path: ROUTES['Ambulance_AddNewManufacturer'], element: <AddNewManufacturers /> },

      { path: ROUTES['Settings_Payment'], element: <PaymentSettings /> },
      { path: ROUTES['Settings_API'], element: <APISettings /> },
      { path: ROUTES['settings_Policy'], element: <PolicySettings /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
