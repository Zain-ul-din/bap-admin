import { Box, Button, Flex } from '@chakra-ui/react';
import AmbulanceIcon from '../../icons/AmbulanceIcon';
import DashboardHeader from '../../shared/DashboardHeader';
import RoutesBreadcrumb from '../../shared/RoutesBreadcrumb';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../lib/constant';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { AddNewTypeForm } from '../../forms/ambulance';

export default function AddNewType() {
  return (
    <>
      <DashboardHeader>Ambulance Types</DashboardHeader>
      <RoutesBreadcrumb
        path="Ambulance Types > Add New Type "
        icon={(props) => <AmbulanceIcon {...props} style={{ transform: 'translateY(-2px)' }} />}
      ></RoutesBreadcrumb>

      <Flex flexDir={'column'} gap={4} bg={'white'} p={2} m={2} flex={1}>
        <Box>
          <Link to={ROUTES['Ambulance']}>
            <Button
              _hover={{
                opacity: 0.8,
              }}
              fontSize={'sm'}
              fontWeight={'medium'}
              leftIcon={<ChevronLeftIcon />}
            >
              {'Cancel'}
            </Button>
          </Link>
        </Box>

        <AddNewTypeForm onSubmit={(e) => e.preventDefault()} />
      </Flex>
    </>
  );
}
