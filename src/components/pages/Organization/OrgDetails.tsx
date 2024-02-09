import { Button, Flex, Grid, Text, GridItem, Heading, Stack, Box } from '@chakra-ui/react';
import OrganizationIcon from '../../icons/OrganizationIcon';
import DashboardHeader from '../../shared/DashboardHeader';
import RoutesBreadcrumb from '../../shared/RoutesBreadcrumb';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import LabelButton from '../../shared/LabelButton';
import { useState } from 'react';
import AllVehiclesTable from './tables/AllVehiclesTable';
import AllDriversTable from './tables/AllDriversTable';
import createModal from '../../design/createModal';
import { EditOrgForm } from '../../forms/Organizations';

const EditOrgModal = createModal();
const DeleteOrgModal = createModal();

export default function OrgDetails() {
  const [activeTab, setActiveTab] = useState<'vehicles' | 'drivers'>('vehicles');

  return (
    <EditOrgModal.Provider>
      <DeleteOrgModal.Provider>
        <DashboardHeader
          alignItems={'center'}
          headingProps={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <OrganizationIcon
            color={'white'}
            style={{
              display: 'inline-block',
              marginRight: '0.5rem',
            }}
          />
          Kuhic, Hane and Funk
        </DashboardHeader>
        <RoutesBreadcrumb
          icon={(props) => <OrganizationIcon {...props} />}
          path={`Organizations/ Kuhic, Hane and Funk`}
        ></RoutesBreadcrumb>

        <Flex w={'100%'} flexDir={'column'} py={4} gap={6} bg={'white'}>
          <Flex px={4} gap={2} alignItems={'center'} flexWrap={'wrap'}>
            <Heading fontSize={'xl'}>Kuhic, Hane and Funk</Heading>
            <Text fontWeight={'light'} fontSize={'sm'}>
              (Physical Address)
            </Text>
            <Flex ml={'auto'} gap={2}>
              <DeleteOrgBtn />
              <EditOrgBtn />
            </Flex>
          </Flex>
          <Grid w={'100%'} py={2} templateColumns={'repeat(6, 1fr)'} px={4} gap={4} overflowX={'auto'}>
            <GridItem>
              <Stack spacing={1}>
                <Text fontSize={'sm'} fontWeight={'light'} whiteSpace={'nowrap'}>
                  Phone No
                </Text>
                <Text fontSize={'sm'} fontWeight={'light'} whiteSpace={'nowrap'}>
                  +40 13123 12312
                </Text>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack>
                <Text fontSize={'sm'} fontWeight={'light'} whiteSpace={'nowrap'}>
                  Reg #{' '}
                </Text>
                <Text fontSize={'sm'} fontWeight={'light'} whiteSpace={'nowrap'}>
                  2AS9781400
                </Text>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack>
                <Text fontSize={'sm'} fontWeight={'light'} whiteSpace={'nowrap'}>
                  Email
                </Text>
                <Text fontSize={'sm'} fontWeight={'light'} whiteSpace={'nowrap'}>
                  ambulance@yahoo.com
                </Text>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack>
                <Text fontSize={'sm'} fontWeight={'light'} whiteSpace={'nowrap'}>
                  Vat #
                </Text>
                <Text fontSize={'sm'} fontWeight={'light'} whiteSpace={'nowrap'}>
                  2AS9781400
                </Text>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack>
                <Text fontSize={'sm'} fontWeight={'light'} whiteSpace={'nowrap'}>
                  Secondary Phone #
                </Text>
                <Text fontSize={'sm'} fontWeight={'light'} whiteSpace={'nowrap'}>
                  +40 13123 12312
                </Text>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack>
                <Text fontSize={'sm'} fontWeight={'light'} whiteSpace={'nowrap'}>
                  Website
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Flex>

        <Flex px={4} gap={4} py={3}>
          <LabelButton
            count={activeTab === 'vehicles' ? 6 : undefined}
            active={activeTab === 'vehicles'}
            onClick={() => setActiveTab('vehicles')}
          >
            All Vehicles
          </LabelButton>
          <LabelButton
            active={activeTab === 'drivers'}
            count={activeTab === 'drivers' ? 6 : undefined}
            onClick={() => setActiveTab('drivers')}
          >
            Drivers
          </LabelButton>
        </Flex>
        {(() => {
          switch (activeTab) {
            case 'drivers':
              return <AllDriversTable />;
            case 'vehicles':
              return <AllVehiclesTable />;
          }
          return <></>;
        })()}
      </DeleteOrgModal.Provider>
    </EditOrgModal.Provider>
  );
}

const DeleteOrgBtn = () => {
  const { onOpen, onClose } = DeleteOrgModal.useModalState();

  return (
    <Button variant={'red'} size={'sm'} onClick={onOpen}>
      <DeleteIcon /> Delete
      <DeleteOrgModal.Layout title="Delete Organization">
        <Flex flexDir={'column'} justifyContent={'center'} gap={6}>
          <Text textAlign={'center'}>
            Would you like to Delete this Organization Account?
            <Box display={'inline-block'} mx={2} color={'yellow.600'}>
              Warning
            </Box>
            (Deleting them will remove their account Permanently)
          </Text>
          <Flex px={2} gap={4}>
            <Button flex={1} onClick={onClose} variant={'gray'}>
              Cancel
            </Button>
            <Button flex={1} variant={'red'}>
              Delete
            </Button>
          </Flex>
        </Flex>
      </DeleteOrgModal.Layout>
    </Button>
  );
};

const EditOrgBtn = () => {
  const { onOpen, onClose } = EditOrgModal.useModalState();

  return (
    <>
      <Button variant={'red'} size={'sm'} onClick={onOpen}>
        <EditIcon /> Edit
      </Button>
      <EditOrgModal.Layout
        title="Edit Organization Personal Information"
        modalProps={{
          size: '2xl',
        }}
      >
        <EditOrgForm onClose={onClose} />
      </EditOrgModal.Layout>
    </>
  );
};
