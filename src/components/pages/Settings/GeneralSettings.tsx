import { Flex, Heading } from '@chakra-ui/react';
import DashboardHeader from '../../shared/DashboardHeader';
import { BookingPercentageForm, GeneralAppInfoForm } from '../../forms/settings';
import RoutesBreadcrumb from '../../shared/RoutesBreadcrumb';
import SettingIcons from '../../icons/SettingsIcon';

export default function GeneralSettings() {
  return (
    <>
      <DashboardHeader>General Settings</DashboardHeader>
      <RoutesBreadcrumb path="General Settings" icon={(props) => <SettingIcons {...props} />}></RoutesBreadcrumb>
      <Flex w={'full'} p={2} flexDir={'column'} py={0} gap={3}>
        <Flex w={'full'} p={4} bg={'white'} flexDir={'column'} gap={6} rounded={'md'}>
          <Heading fontSize={'2xl'}>General App Information</Heading>
          <GeneralAppInfoForm
            onSubmit={(e) => {
              e.preventDefault();
              // TODOS: submit form
            }}
          />
        </Flex>

        <Flex w={'full'} p={4} bg={'white'} flexDir={'column'} gap={6} rounded={'md'}>
          <Heading fontSize={'2xl'}>Booking Percentage</Heading>
          <BookingPercentageForm
            onSubmit={(e) => {
              e.preventDefault();
              // TODOS: submit form
            }}
          />
        </Flex>
      </Flex>
    </>
  );
}
