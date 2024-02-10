import { Button, ButtonProps, Flex } from '@chakra-ui/react';
import AmbulanceIcon from '../../icons/AmbulanceIcon';
import DashboardHeader from '../../shared/DashboardHeader';
import RoutesBreadcrumb from '../../shared/RoutesBreadcrumb';
import UploadIcon from '../../icons/UploadIcon';
import { AddIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { AddManufacturerForm, UploadManufacturerCSVForm } from '../../forms/ambulance';

export default function AddNewManufacturers() {
  const [activeTab, setActiveTab] = useState<'upload' | 'manually'>('upload');

  return (
    <>
      <DashboardHeader>Add new Manufacturers</DashboardHeader>
      <RoutesBreadcrumb
        icon={(props) => (
          <AmbulanceIcon
            color="red"
            style={{
              transform: 'translateY(-2px)',
            }}
            {...props}
          />
        )}
        path="Ambulance Manufacturers > Add New Manufacturers"
      ></RoutesBreadcrumb>
      <Flex flexDir={'column'} py={2} mx={2} gap={5}>
        <Flex gap={3} ml={2}>
          <TabBtn
            leftIcon={<UploadIcon width={20} height={20} />}
            onClick={() => setActiveTab('upload')}
            active={activeTab == 'upload'}
          >
            Upload CSV
          </TabBtn>
          <TabBtn leftIcon={<AddIcon />} onClick={() => setActiveTab('manually')} active={activeTab == 'manually'}>
            Add Manually
          </TabBtn>
        </Flex>

        {activeTab == 'upload' ? (
          <UploadManufacturerCSVForm onSubmit={(e) => e.preventDefault()} />
        ) : (
          <AddManufacturerForm onSubmit={(e) => e.preventDefault()} />
        )}
      </Flex>
    </>
  );
}

const TabBtn = ({ active, children, ...rest }: ButtonProps & { active?: boolean }) => {
  const unActiveProps = {
    bg: '#CCC',
    color: 'rgba(102, 102, 102, 1)',
    variant: 'gray',
  };

  const activeProps = {
    colorScheme: 'blue',
  };

  return (
    <Button {...rest} {...(active ? activeProps : unActiveProps)} fontSize={'sm'} size={'md'}>
      {children}
    </Button>
  );
};
