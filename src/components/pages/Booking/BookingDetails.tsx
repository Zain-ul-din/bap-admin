import AmbulanceIcon from '../../icons/AmbulanceIcon';
import DashboardHeader from '../../shared/DashboardHeader';
import RoutesBreadcrumb from '../../shared/RoutesBreadcrumb';

export default function BookingDetails() {
  return (
    <>
      <DashboardHeader>Booking # BB124</DashboardHeader>
      <RoutesBreadcrumb
        icon={(props) => (
          <AmbulanceIcon
            {...props}
            style={{
              transform: 'translateY(-2px)',
              marginLeft: '0.3rem',
            }}
            color="red"
          />
        )}
        path="Bookings > # BB124"
      ></RoutesBreadcrumb>
    </>
  );
}
