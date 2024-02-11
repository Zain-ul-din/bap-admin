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
  Text,
  Tr,
  Box,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import DashboardHeader from '../../shared/DashboardHeader';
import PaginationTable from '../../shared/PaginationTable';
import RoutesBreadcrumb from '../../shared/RoutesBreadcrumb';
import AmbulanceIcon from '../../icons/AmbulanceIcon';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../lib/constant';
import { SearchIcon } from '@chakra-ui/icons';
import FilterBtn from '../../shared/FilterBtn';

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
      <Flex w={'full'} flexDir={'column'} p={2} bg={'white'}>
        <Flex alignItems={'center'} gap={4} mx={2}>
          <Text color={'gray.500'}>Manufacturers</Text>
          <Box>
            <InputGroup>
              <InputLeftElement top={'-3px'}>
                <SearchIcon fontSize={'xs'} color={'gray.500'} />
              </InputLeftElement>
              <Input variant={'search'} fontSize={'sm'} size={'sm'} placeholder="search..." />
            </InputGroup>
          </Box>
          <FilterBtn ml={'auto'} />
        </Flex>
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
