import { Flex } from '@chakra-ui/react';
import DashboardHeader from '../../shared/DashboardHeader';
import { PrivacyPolicyForm } from '../../forms/settings';
import RoutesBreadcrumb from '../../shared/RoutesBreadcrumb';
import SettingIcons from '../../icons/SettingsIcon';

export default function PolicySettings() {
  return (
    <>
      <DashboardHeader>Privacy Policy & Terms Conditions</DashboardHeader>
      <RoutesBreadcrumb
        path={'Privacy Policy & Terms'}
        icon={(props) => <SettingIcons {...props} />}
      ></RoutesBreadcrumb>
      <Flex w={'full'} px={2} flexDir={'column'} m={2} gap={3}>
        <Flex w={'full'} px={4} bg={'white'} flexDir={'column'} gap={6} rounded={'md'}>
          <PrivacyPolicyForm
            onSubmit={(e) => {
              e.preventDefault();
            }}
          />
        </Flex>
      </Flex>
    </>
  );
}
