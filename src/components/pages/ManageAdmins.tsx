import { Flex } from '@chakra-ui/react';
import DashboardHeader from '../shared/DashboardHeader';
import PaginationTable from '../shared/PaginationTable';

export default function ManageAdmins() {
  return (
    <>
      <DashboardHeader>Manage Admins</DashboardHeader>

      <Flex flexDir={'column'} w={'full'} p={2}>
        <PaginationTable />
      </Flex>
    </>
  );
}
