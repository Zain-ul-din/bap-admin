import { Checkbox, Flex, Menu, MenuButton, MenuItem, MenuList, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import DashboardHeader from '../shared/DashboardHeader';
import PaginationTable from '../shared/PaginationTable';
import OrganizationIcon from '../icons/OrganizationIcon';
import RoutesBreadcrumb from '../shared/RoutesBreadcrumb';
import StatusTag from '../design/StatusTag';

export default function Organization() {
  return (
    <>
      <DashboardHeader py={5}>Organizations (56)</DashboardHeader>
      <RoutesBreadcrumb path="Organizations/" icon={(props) => <OrganizationIcon {...props} />}></RoutesBreadcrumb>
      <Flex w={'100%'} h={'100%'} flexDir={'column'} p={4} py={0}>
        <OrganizationTable />
      </Flex>
    </>
  );
}

const OrganizationTable = () => {
  return (
    <PaginationTable>
      <Thead>
        <Tr>
          <Th>
            <Checkbox />
          </Th>
          <Th>Organization Name</Th>
          <Th>Mobile No.</Th>
          <Th>Joining Date</Th>
          <Th>Vehicles</Th>
          <Th>Drivers</Th>
          <Th>Status</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {new Array(10).fill('').map((_, i) => {
          return (
            <Tr key={i}>
              <Td>
                <Checkbox />
              </Td>
              <Td>Kuhic, Hane and Funk</Td>
              <Td>230-485-5534</Td>
              <Td>September 9, 2013</Td>
              <Td>53609</Td>
              <Td>34368</Td>
              <Td>
                <StatusTag status="completed">Verified</StatusTag>
              </Td>
              <Td>
                <Menu>
                  <MenuButton fontSize={'xl'}>...</MenuButton>
                  <MenuList>
                    <MenuItem>Remove</MenuItem>
                    <MenuItem>Edit User</MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </PaginationTable>
  );
};
