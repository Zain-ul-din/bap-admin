import {
  Button,
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
import AmbulanceIcon from '../../icons/AmbulanceIcon';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../lib/constant';

export default function Manufacturers() {
  return (
    <>
      <DashboardHeader>Ambulance Manufacturers</DashboardHeader>
      <RoutesBreadcrumb
        path="Ambulance Manufacturers"
        icon={(props) => (
          <AmbulanceIcon
            color="red"
            style={{
              transform: 'translateY(-2px)',
            }}
            {...props}
          />
        )}
      >
        <Link
          to={ROUTES['Ambulance_AddNewManufacturer']}
          style={{
            marginLeft: 'auto',
          }}
        >
          <Button colorScheme="red" fontWeight={'normal'} size={'sm'}>
            + Add New
          </Button>
        </Link>
      </RoutesBreadcrumb>
      <Flex w={'full'} flexDir={'column'} p={2}>
        <PaginationTable>
          <Thead>
            <Tr>
              <Th>
                <Checkbox />
              </Th>
              <Th>ID</Th>
              <Th>Make</Th>
              <Th>Model</Th>
              <Th>Year</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {new Array(10).fill(' ').map((_, i) => {
              return (
                <Tr key={i}>
                  <Td>
                    <Checkbox />
                  </Td>
                  <Td>M12</Td>
                  <Td>Ford</Td>
                  <Td>MSV - II 157</Td>
                  <Td>2021</Td>
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
      </Flex>
    </>
  );
}
