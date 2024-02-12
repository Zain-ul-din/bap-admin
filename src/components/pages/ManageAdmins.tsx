import { Avatar, Box, Button, Checkbox, Flex, Stack, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import DashboardHeader from '../shared/DashboardHeader';
import PaginationTable from '../shared/PaginationTable';
import RoutesBreadcrumb from '../shared/RoutesBreadcrumb';
import ManageIcons from '../icons/ManageIcon';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import createModal from '../design/createModal';
import { AddNewAdminForm, ChangePasswordForm } from '../forms/admins';

const DeleteModal = createModal();
const ChangePasswordModal = createModal();
const AddNewAdminModal = createModal();

export default function ManageAdmins() {
  return (
    <DeleteModal.Provider>
      <ChangePasswordModal.Provider>
        <AddNewAdminModal.Provider>
          <DashboardHeader>Manage Admins</DashboardHeader>
          <RoutesBreadcrumb path="Manage Admins" icon={(props) => <ManageIcons {...props} />}>
            <Box ml={'auto'}>
              <AddNewAdminBtn />
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
                        <Avatar src={'https://avatar.iran.liara.run/public'} size={'sm'} />
                      </Td>
                      <Td>Admin</Td>
                      <Td>Rosemarie_Gibson@gmail.com</Td>
                      <Td>amanda12</Td>
                      <Td>
                        <Flex justifyContent={'center'} gap={2}>
                          <Button colorScheme="blue" size={'sm'} fontWeight={'light'}>
                            <EditIcon />
                          </Button>
                          <DeleteBtn />
                          <ChangePasswordBtn />
                        </Flex>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </PaginationTable>
          </Flex>
        </AddNewAdminModal.Provider>
      </ChangePasswordModal.Provider>
    </DeleteModal.Provider>
  );
}

const AddNewAdminBtn = () => {
  const { onClose, onOpen } = AddNewAdminModal.useModalState();

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="blue"
        size={'sm'}
        p={0}
        px={2}
        ml={'auto'}
        fontWeight={'normal'}
        fontSize={'sm'}
      >
        Add New Admin
      </Button>
      <AddNewAdminModal.Layout
        title="Add New Admin"
        modalProps={{
          size: '2xl',
        }}
      >
        <AddNewAdminForm onClose={onClose} onSubmit={(e) => e.preventDefault()} />
      </AddNewAdminModal.Layout>
    </>
  );
};

const ChangePasswordBtn = () => {
  const { onClose, onOpen } = ChangePasswordModal.useModalState();

  return (
    <>
      <Button colorScheme="blue" size={'sm'} fontWeight={'light'} onClick={onOpen}>
        Change Password
      </Button>
      <ChangePasswordModal.Layout
        title="Change password"
        modalProps={{
          size: 'sm',
        }}
      >
        <ChangePasswordForm onClose={onClose} onSubmit={(e) => e.preventDefault()} />
      </ChangePasswordModal.Layout>
    </>
  );
};

const DeleteBtn = () => {
  const { onOpen, onClose } = DeleteModal.useModalState();

  return (
    <>
      <Button colorScheme="red" size={'sm'} fontWeight={'light'} onClick={onOpen}>
        <DeleteIcon />
      </Button>
      <DeleteModal.Layout
        title="Delete Admin"
        modalProps={{
          size: 'sm',
        }}
      >
        <Stack spacing={6}>
          <Text textAlign={'center'}>Would you like to Delete this admin Account?</Text>
          <Flex gap={4}>
            <Button flex={1} variant={'gray'} size={'md'} onClick={onClose}>
              Cancel
            </Button>
            <Button flex={1} variant={'red'} size={'md'}>
              Delete
            </Button>
          </Flex>
        </Stack>
      </DeleteModal.Layout>
    </>
  );
};
