import {
  Box,
  Flex,
  Heading,
  Input,
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
  Tr,
} from '@chakra-ui/react';
import DashboardHeader from '../../shared/DashboardHeader';
import PaginationTable from '../../shared/PaginationTable';
import RoutesBreadcrumb from '../../shared/RoutesBreadcrumb';
import AmbulanceIcon from '../../icons/AmbulanceIcon';
import { useState } from 'react';
import StatusTag from '../../design/StatusTag';
import { SearchIcon } from '@chakra-ui/icons';
import LabelButton from '../../shared/LabelButton';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../lib/constant';
import FilterBtn from '../../shared/FilterBtn';

export default function Booking() {
  const [activeState, setActiveState] = useState<'all' | 'progress' | 'completed'>('all');

  return (
    <>
      <DashboardHeader>Booking</DashboardHeader>
      <RoutesBreadcrumb
        path="Bookings"
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
        <FilterBtn ml={'auto'} />
      </RoutesBreadcrumb>
      <Flex w={'full'} flexDir={'column'} py={0} px={3} gap={3}>
        <Flex py={2} gap={2}>
          <LabelButton count={20} active={activeState == 'all'} onClick={() => setActiveState('all')}>
            All
          </LabelButton>
          <LabelButton active={activeState == 'progress'} onClick={() => setActiveState('progress')}>
            In Progress
          </LabelButton>
          <LabelButton active={activeState == 'completed'} onClick={() => setActiveState('completed')}>
            Completed
          </LabelButton>
        </Flex>
        <Flex alignItems={'center'}>
          <Heading fontSize={'xl'}>
            {(() => {
              switch (activeState) {
                case 'all':
                  return 'All Bookings';
                case 'progress':
                  return 'Bookings in Progress (20)';
                case 'completed':
                  return 'Bookings Completed (30)';
              }
              return '';
            })()}
          </Heading>

          <Box ml={'auto'}>
            <InputGroup color={'gray.500'}>
              <InputLeftElement>
                <SearchIcon fontSize={'sm'} top={'-4px'} />
              </InputLeftElement>
              <Input variant={'search'} placeholder="Search..." size={'sm'} rounded={'full'} />
            </InputGroup>
          </Box>
        </Flex>
        <PaginationTable p={2}>
          <Thead>
            <Tr>
              <Th>Booking ID</Th>
              <Th>Owner</Th>
              <Th>Vehicle Type</Th>
              <Th>Vehicle Reg #</Th>
              <Th>Patient Name</Th>
              <Th>Started At</Th>
              <Th>Completed At</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {new Array(6).fill('').map((_, i) => {
              return (
                <Tr key={i}>
                  <Td>BB124</Td>
                  <Td>Doyle Inc</Td>
                  <Td>Basic Life Support</Td>
                  <Td>TX 122 522</Td>
                  <Td>Blake Lively</Td>
                  <Td>3:30 PM ,9th Sep 23</Td>
                  <Td>5:30 PM ,9th Sep 23</Td>
                  <Td>
                    <StatusTag status="pending">In Progress</StatusTag>
                  </Td>
                  <Td>
                    <Menu>
                      <MenuButton fontSize={'xl'}>...</MenuButton>
                      <MenuList>
                        <Link to={`${ROUTES['Booking']}/foo`}>
                          <MenuItem>View Details</MenuItem>
                        </Link>
                        <MenuItem>View Chat</MenuItem>
                        <MenuItem>Delete</MenuItem>
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
