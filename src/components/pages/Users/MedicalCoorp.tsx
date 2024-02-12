import {
  Avatar,
  Checkbox,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import DashboardHeader from '../../shared/DashboardHeader';
import PaginationTable from '../../shared/PaginationTable';
import RoutesBreadcrumb from '../../shared/RoutesBreadcrumb';
import OrganizationIcon from '../../icons/OrganizationIcon';
import FilterBtn from '../../shared/FilterBtn';

export default function MedicalCoorp() {
  return (
    <>
      <DashboardHeader>Medical Coorps</DashboardHeader>
      <RoutesBreadcrumb path="Users > Medical Coorps" icon={(props) => <OrganizationIcon {...props} />}>
        <FilterBtn ml={'auto'} />
      </RoutesBreadcrumb>
      <Flex w={'full'} flexDir={'column'} p={2} py={0}>
        <PaginationTable>
          <Thead>
            <Tr>
              <Th>
                <Checkbox />
              </Th>
              <Th>Image</Th>
              <Th>Id</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Gender</Th>
              <Th>Phone Number</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {new Array(6).fill('😋').map((_, i) => {
              return (
                <Tr key={i}>
                  <Td>
                    <Checkbox />
                  </Td>
                  <Td>
                    <Avatar src={'https://avatar.iran.liara.run/public'} size={'sm'} />
                  </Td>
                  <Td>2</Td>
                  <Td>Ezequiel</Td>
                  <Td>Quitzon</Td>
                  <Td>Rosemarie_Gibson@gmail.com</Td>
                  <Td>Male</Td>
                  <Td>436-547-3263</Td>
                  <Td>
                    <Menu>
                      <MenuButton fontSize={'xl'}>...</MenuButton>
                      <MenuList>
                        <MenuItem>Remove</MenuItem>
                        <MenuItem>Edit Coorp</MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </PaginationTable>
      </Flex>
    </>
  );
}
