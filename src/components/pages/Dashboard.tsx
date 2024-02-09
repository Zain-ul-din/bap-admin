import { Flex, Grid, GridItem, Heading, Stack, Tbody, Td, Text, Th, Thead, Tr, useMediaQuery } from '@chakra-ui/react';
import OrderIcon from '../icons/dashboard/OrderIcon';
import DataTable from '../shared/DataTable';
import DashboardHeader from '../shared/DashboardHeader';
import { DummyData, StatCardProps } from '../../types/dashboard';
import UsersIcon from '../icons/dashboard/UsersIcon';
import PeopleSavedIcon from '../icons/dashboard/PeopleSavedIcon';
import EarnedCommissionIcon from '../icons/dashboard/EarnedCommissionIcon';
import StatusTag from '../design/StatusTag';
import { ROUTES } from '../../lib/constant';

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

export default function Dashboard() {
  return (
    <>
      <DashboardHeader description="Hi, Welcome to BAP Admin!">Dashboard</DashboardHeader>
      <Flex w={'100%'} h={'100%'} p={3} flexDir={'column'} gap={'0.5rem'} pb={5}>
        <StatCards />
        <DataTable heading="Recent Ambulance Rides" variant="simple-center" viewMoreLink={ROUTES['Booking']}>
          <Thead>
            <Tr>
              <Th>Organization Name</Th>
              <Th>Vehicle Type</Th>
              <Th>Started At</Th>
              <Th>Pickup Location</Th>
              <Th>Destination Location</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {new Array(6).fill(' ').map((_, i) => {
              return (
                <Tr key={i}>
                  <Td>Doyle Inc</Td>
                  <Td>Basic Life Support</Td>
                  <Td>3:30 PM, th Sep 23</Td>
                  <Td>742 Horace Haven</Td>
                  <Td>66771 Doyle Light</Td>
                  <Td>
                    <StatusTag status="pending">In Pending</StatusTag>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </DataTable>
        {/* TODO: add view more link */}
        <DataTable heading="New Organizations Registered" viewMoreLink={'/'}>
          <Thead>
            <Tr>
              <Th>Organization Name</Th>
              <Th>Mobile No.</Th>
              <Th>Joining Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {new Array(4).fill(' ').map((_, i) => (
              <Tr key={i}>
                <Td>Doyle Inc</Td>
                <Td>230-485-5534</Td>
                <Td>September 24, 2017</Td>
              </Tr>
            ))}
          </Tbody>
        </DataTable>
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
