import { Avatar, Box, Button, Checkbox, Flex, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import DashboardHeader from '../shared/DashboardHeader';
import PaginationTable from '../shared/PaginationTable';
import RoutesBreadcrumb from '../shared/RoutesBreadcrumb';
import ManageIcons from '../icons/ManageIcon';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

export default function ManageAdmins() {
  return (
    <>
      <DashboardHeader>Manage Admins</DashboardHeader>
      <RoutesBreadcrumb path="Manage Admins" icon={(props) => <ManageIcons {...props} />}>
        <Box ml={'auto'}>
          <Button colorScheme="blue" size={'sm'} p={0} px={2} ml={'auto'} fontWeight={'normal'} fontSize={'sm'}>
            Add New Admin
          </Button>
        </Box>
      </RoutesBreadcrumb>
      <Flex flexDir={'column'} w={'full'} p={2}>
        <PaginationTable>
          <Thead>
            <Tr>
              <Th>
                <Checkbox />
              </Th>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Image</Th>
              <Th>Role</Th>
              <Th>Email</Th>
              <Th>User Name</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {new Array(3).fill('').map((_, i) => {
              return (
                <Tr key={i}>
                  <Td>
                    <Checkbox />
                  </Td>
                  <Td>2</Td>
                  <Td>Amanda</Td>
                  <Td>
                    <Avatar size={'sm'} />
                  </Td>
                  <Td>Admin</Td>
                  <Td>Rosemarie_Gibson@gmail.com</Td>
                  <Td>amanda12</Td>
                  <Td>
                    <Flex justifyContent={'center'} gap={2}>
                      <Button colorScheme="blue" size={'sm'} fontWeight={'light'}>
                        <EditIcon />
                      </Button>
                      <Button colorScheme="red" size={'sm'} fontWeight={'light'}>
                        <DeleteIcon />
                      </Button>
                      <Button colorScheme="blue" size={'sm'} fontWeight={'light'}>
                        Change Password
                      </Button>
                    </Flex>
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
