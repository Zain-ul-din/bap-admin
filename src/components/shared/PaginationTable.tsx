import {
  Avatar,
  Checkbox,
  Flex,
  FlexProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

interface PaginationTableProps extends FlexProps {}

export default function PaginationTable({ ...rest }: PaginationTableProps) {
  return (
    <Flex w={'full'} bg={'white'} rounded={'md'} flexDir={'column'} gap={4} {...rest}>
      <Flex></Flex>
      <TableContainer shadow={'sm'}>
        <Table variant={'pagination'} size={'sm'} w={'100%'} overflow="auto" maxW="100%">
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
            {new Array(8).fill(' ').map((_, i) => {
              return (
                <Tr key={i}>
                  <Td>
                    <Checkbox />
                  </Td>
                  <Td>
                    <Avatar size={'sm'} />
                  </Td>
                  <Td>10</Td>
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
                        <MenuItem>Edit User</MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}
