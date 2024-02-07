import { Flex, Heading, Text } from '@chakra-ui/react';
import DashboardHeader from './shared/DashboardHeader';
import { GeneralAppInfoForm } from './forms/settings';

export default function GeneralSettings() {
  return (
    <>
      <DashboardHeader>General Settings</DashboardHeader>
      <Flex w={'full'} p={2} flexDir={'column'} gap={3}>
        <Text color={'gray.200'} fontWeight={'light'} ml={3} my={2}>
          General Settings
        </Text>

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
          <GeneralAppInfoForm
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
