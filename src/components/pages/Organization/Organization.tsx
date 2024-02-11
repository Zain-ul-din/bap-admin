import { Checkbox, Flex, Menu, MenuButton, MenuItem, MenuList, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import DashboardHeader from '../../shared/DashboardHeader';
import PaginationTable from '../../shared/PaginationTable';
import OrganizationIcon from '../../icons/OrganizationIcon';
import RoutesBreadcrumb from '../../shared/RoutesBreadcrumb';
import StatusTag from '../../design/StatusTag';
import createModal from '../../design/createModal';
import { UpdateStatusForm } from '../../forms/Organizations';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../lib/constant';
import FilterBtn from '../../shared/FilterBtn';

// Modals
const UpdateStatusModal = createModal();

export default function Organization() {
  return (
    <UpdateStatusModal.Provider>
      <DashboardHeader py={5}>Organizations (56)</DashboardHeader>
      <RoutesBreadcrumb path="Organizations/" icon={(props) => <OrganizationIcon {...props} />}>
        <FilterBtn ml={'auto'} />
      </RoutesBreadcrumb>
      <Flex w={'100%'} h={'100%'} flexDir={'column'} p={4} py={0}>
        <OrganizationTable />
      </Flex>

      {/* Modals */}
      <UpdateStatusModalLayout />
    </UpdateStatusModal.Provider>
  );
}

const UpdateStatusModalLayout = () => {
  const { onClose } = UpdateStatusModal.useModalState();

  return (
    <UpdateStatusModal.Layout title="Update Status">
      <UpdateStatusForm onCancel={onClose} onSubmit={(e) => e.preventDefault()} />
    </UpdateStatusModal.Layout>
  );
};

const OrganizationTable = () => {
  const updateStatusModalState = UpdateStatusModal.useModalState();

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
              <Td
                _hover={{
                  textDecoration: 'underline',
                }}
              >
                <Link to={`${ROUTES['Organization']}/foo`}>Kuhic, Hane and Funk</Link>
              </Td>
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
                    <MenuItem>Edit Org</MenuItem>
                    <MenuItem onClick={updateStatusModalState.onOpen}>Update Status</MenuItem>
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
