import { Outlet } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';

export default function RootLayout() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
