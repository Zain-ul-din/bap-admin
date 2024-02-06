import { Button, Flex, Heading } from '@chakra-ui/react';
import DashboardHeader from './shared/DashboardHeader';
import PaginationTable from './shared/PaginationTable';

export default function Booking() {
  return (
    <>
      <DashboardHeader>Booking</DashboardHeader>
      <Flex w={'full'} flexDir={'column'} py={4} px={3}>
        <Flex py={2} gap={2}>
          <Button variant={'white'}>All</Button>
          <Button variant={'red'}>In Progress</Button>
          <Button variant={'white'} color={'red.500'}>
            Completed
          </Button>
        </Flex>
        <Heading fontSize={'xl'}>Bookings in Progress (20)</Heading>
      </Flex>
      <PaginationTable m={2} />
    </>
  );
}
