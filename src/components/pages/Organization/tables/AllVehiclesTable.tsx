import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Checkbox,
  Flex,
  InputGroup,
  InputLeftElement,
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
  Input,
  Avatar,
} from '@chakra-ui/react';
import PaginationTable from '../../../shared/PaginationTable';
import FilterBtn from '../../../shared/FilterBtn';

const AllVehiclesTable = () => {
  return (
    <Flex px={4} flexDir={'column'} gap={3}>
      <Flex alignItems={'center'} gap={4} mx={2}>
        <Text color={'gray.500'}>All Vehicles</Text>
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
            <Th>Image</Th>
            <Th>Reg #</Th>
            <Th>Vehicle Type</Th>
            <Th>Vehicle ID</Th>
            <Th>Model</Th>
            <Th>Year</Th>
            <Th>Make</Th>
            <Th>Certificate</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {new Array(6).fill('').map((_, i) => {
            return (
              <Tr key={i}>
                <Td>
                  <Checkbox />
                </Td>
                <Td>
                  <Avatar size={'sm'} />
                </Td>
                <Td>34368</Td>
                <Td>Basic Life Support</Td>
                <Td>1</Td>
                <Td>MSV - II 157</Td>
                <Td>2021</Td>
                <Td>FORD</Td>
                <Td color={'blue.500'}>View</Td>
                <Td>
                  <Menu>
                    <MenuButton fontSize={'xl'}>...</MenuButton>
                    <MenuList>
                      <MenuItem>Delete Vehicle</MenuItem>
                      <MenuItem>Update Vehicle</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </PaginationTable>
    </Flex>
  );
};

export default AllVehiclesTable;
