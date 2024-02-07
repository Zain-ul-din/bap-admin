import { Flex, Grid, GridItem, Heading, Stack, Text, useMediaQuery } from '@chakra-ui/react';
import OrderIcon from '../icons/dashboard/OrderIcon';
import DataTable from '../shared/DataTable';
import DashboardHeader from '../shared/DashboardHeader';
import { DummyData, StatCardProps, DummyTableData } from '../../types/dashboard';
import UsersIcon from '../icons/dashboard/UsersIcon';
import PeopleSavedIcon from '../icons/dashboard/PeopleSavedIcon';
import EarnedCommissionIcon from '../icons/dashboard/EarnedCommissionIcon';

const dummy: DummyData[] = [
  {
    items: '70',
    for: 'Owners',
    icon: <OrderIcon />,
  },
  {
    items: '120',
    for: 'users',
    icon: <UsersIcon />,
  },
  {
    items: '550',
    for: 'People Saved',
    icon: <PeopleSavedIcon />,
  },
  {
    items: '4.3k lei',
    for: 'Earned Commision',
    icon: <EarnedCommissionIcon />,
  },
];
const table: DummyTableData[] = [
  {
    ORGANIZATIONNAME: 'SOMETHING',
    VEHICLETYPE: 'Basic Life Support',
    STARTEDAT: '3:00 PM, 9th Sep 23	',
    PICKUPLOCATION: '742 Horace Haven	',
    DESTINATIONLOCATION: '66771 Doyle Light	',
    STATUSData: 'PENDING',
    STATUSVALUE: 'pending',
  },
  {
    ORGANIZATIONNAME: 'SOMETHING',
    VEHICLETYPE: 'Basic Life Support',
    STARTEDAT: '3:00 PM, 9th Sep 23	',
    PICKUPLOCATION: '742 Horace Haven	',
    DESTINATIONLOCATION: '66771 Doyle Light	',
    STATUSData: 'PENDING',
    STATUSVALUE: 'completed',
  },
  {
    ORGANIZATIONNAME: 'SOMETHING',
    VEHICLETYPE: 'Basic Life Support',
    STARTEDAT: '3:00 PM, 9th Sep 23	',
    PICKUPLOCATION: '742 Horace Haven	',
    DESTINATIONLOCATION: '66771 Doyle Light	',
    STATUSData: 'PENDING',
    STATUSVALUE: 'cancelled',
  },
  {
    ORGANIZATIONNAME: 'SOMETHING',
    VEHICLETYPE: 'Basic Life Support',
    STARTEDAT: '3:00 PM, 9th Sep 23	',
    PICKUPLOCATION: '742 Horace Haven	',
    DESTINATIONLOCATION: '66771 Doyle Light	',
    STATUSData: 'PENDING',
    STATUSVALUE: 'cancelled',
  },
];
const anothertable: DummyTableData[] = [
  {
    ORGANIZATIONNAME: 'SOMETHING',
    VEHICLETYPE: 'Basic Life Support',
    STARTEDAT: '3:00 PM, 9th Sep 23	',
    PICKUPLOCATION: '742 Horace Haven	',
    DESTINATIONLOCATION: '66771 Doyle Light	',
    STATUSData: 'PENDING',
    STATUSVALUE: 'pending',
  },
  {
    ORGANIZATIONNAME: 'SOMETHING',
    VEHICLETYPE: 'Basic Life Support',
    STARTEDAT: '3:00 PM, 9th Sep 23	',
    PICKUPLOCATION: '742 Horace Haven	',
    DESTINATIONLOCATION: '66771 Doyle Light	',
    STATUSData: 'PENDING',
    STATUSVALUE: 'completed',
  },
  {
    ORGANIZATIONNAME: 'SOMETHING',
    VEHICLETYPE: 'Basic Life Support',
    STARTEDAT: '3:00 PM, 9th Sep 23	',
    PICKUPLOCATION: '742 Horace Haven	',
    DESTINATIONLOCATION: '66771 Doyle Light	',
    STATUSData: 'PENDING',
    STATUSVALUE: 'cancelled',
  },
  {
    ORGANIZATIONNAME: 'SOMETHING',
    VEHICLETYPE: 'Basic Life Support',
    STARTEDAT: '3:00 PM, 9th Sep 23	',
    PICKUPLOCATION: '742 Horace Haven	',
    DESTINATIONLOCATION: '66771 Doyle Light	',
    STATUSData: 'PENDING',
    STATUSVALUE: 'cancelled',
  },
];

export default function Dashboard() {
  return (
    <>
      <DashboardHeader description="Hi, Welcome to BAP Admin!">Dashboard</DashboardHeader>
      <Flex w={'100%'} h={'100%'} p={3} flexDir={'column'} gap={'0.5rem'} pb={5}>
        <StatCards />
        <DataTable heading="Recent Ambulance Rides" table={table} />
        <DataTable heading="New Organizations Registered" table={anothertable} />
        <Flex minH={'1rem'}></Flex>
      </Flex>
    </>
  );
}

const StatCards = () => {
  return (
    <Grid templateColumns={'repeat(4, 1fr)'} py={2} w={'100%'} gap={4}>
      {dummy?.map((data, i) => {
        return <StatCard key={i} data={data} />;
      })}
    </Grid>
  );
};

const StatCard: React.FC<StatCardProps> = ({ data }) => {
  const [isSmallScreen] = useMediaQuery('(max-width: 700px)');

  return (
    <GridItem
      colSpan={isSmallScreen ? 2 : 1}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      shadow={'sm'}
      rounded={'md'}
      p={4}
      gap={3}
      bg={'white'}
      flexWrap={'wrap'}
    >
      {data?.icon}
      {/* <OrderIcon /> */}
      <Stack spacing={0} textAlign={'center'}>
        <Heading fontSize={'2xl'} color={'var(--dark-text-color)'}>
          {data?.items}
        </Heading>
        <Text fontSize={'sm'} color={'var(--dark-text-color)'} fontWeight={'light'}>
          {/* Owners */}
          {data?.for}
        </Text>
      </Stack>
    </GridItem>
  );
};
