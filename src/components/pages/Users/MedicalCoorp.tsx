import { Flex } from '@chakra-ui/react';
import DashboardHeader from '../../shared/DashboardHeader';
import PaginationTable from '../../shared/PaginationTable';

export default function MedicalCoorp() {
  return (
    <>
      <DashboardHeader>Medical Coorps</DashboardHeader>

      <Flex w={'full'} flexDir={'column'} p={2}>
        {/* TODO: render route name as figma design */}
        <PaginationTable />
      </Flex>
    </>
  );
}
