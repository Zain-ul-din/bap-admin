import { Flex } from '@chakra-ui/react';
import DashboardHeader from './shared/DashboardHeader';
import PaginationTable from './shared/PaginationTable';

export default function Users() {
  return (
    <>
      <DashboardHeader>Individual Users</DashboardHeader>
      <Flex w={'full'} flexDir={'column'} p={2}>
        <PaginationTable />
      </Flex>
    </>
  );
}
