import { Flex } from '@chakra-ui/react';
import DashboardHeader from './shared/DashboardHeader';
import DataTable from './shared/DataTable';

export default function Organization() {
  return (
    <>
      <DashboardHeader py={5}>Organization (56)</DashboardHeader>
      <Flex w={'100%'} h={'100%'} flexDir={'column'} p={4}>
        <DataTable heading="Organization " />
      </Flex>
    </>
  );
}
