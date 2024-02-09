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

// TODO: move to separate file if needed
const AllDriversTable = () => {
  return (
    <Flex px={4} flexDir={'column'} gap={3}>
      <Flex alignItems={'center'} gap={4} mx={2}>
        <Text color={'gray.500'}>All Drivers</Text>
        <Box>
          <InputGroup>
            <InputLeftElement top={'-3px'}>
              <SearchIcon fontSize={'xs'} color={'gray.500'} />
            </InputLeftElement>
            <Input variant={'search'} fontSize={'sm'} size={'sm'} placeholder="search..." />
          </InputGroup>
        </Box>
      </Flex>

      <PaginationTable>
        <Thead>
          <Tr>
            <Th>
              <Checkbox />
            </Th>
            <Th>Image</Th>
            <Th>Full Name</Th>
            <Th>Email</Th>
            <Th>DOB</Th>
            <Th>Phone#</Th>
            <Th>License#</Th>
            <Th>Assigned Vehicle</Th>
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
                <Td>Sidney Greenholt</Td>
                <Td>Krystel_Schumm@gmail.com</Td>
                <Td>MSV - II 157</Td>
                <Td>2021</Td>
                <Td>FORD</Td>
                <Td>TX 124 31BB</Td>
                <Td>
                  <Menu>
                    <MenuButton fontSize={'xl'}>...</MenuButton>
                    <MenuList>
                      <MenuItem>Delete Driver</MenuItem>
                      <MenuItem>Edit Vehicle</MenuItem>
                      <MenuItem>Unassign Vehicle</MenuItem>
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

export default AllDriversTable;
