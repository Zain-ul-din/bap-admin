import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import DashboardHeader from '../../shared/DashboardHeader';
import { GoogleMapAPIForm, TwilioSMSKeyForm } from '../../forms/settings';

export default function APISettings() {
  return (
    <>
      <DashboardHeader>API Keys</DashboardHeader>
      <Flex w={'full'} p={2} flexDir={'column'} gap={2}>
        <Text color={'gray.200'} fontWeight={'light'} ml={3} my={2}>
          General Settings
        </Text>

        <Flex w={'full'} p={4} m={2} bg={'white'} flexDir={'column'} gap={6} rounded={'md'}>
          <Stack>
            <Heading fontSize={'2xl'}>Google Maps Key</Heading>
            <Text maxW={'80%'} fontSize={'sm'} fontWeight={'light'} color={'gray.500'}>
              Below is the map key that should keep the apps map system working as provided by the google, So If there
              is any issue with the key, update it here.
            </Text>
          </Stack>
          <GoogleMapAPIForm
            onSubmit={(e) => {
              e.preventDefault();
              // TODOS: submit form
            }}
          />
        </Flex>

        <Flex w={'full'} p={4} m={2} bg={'white'} flexDir={'column'} gap={6} rounded={'md'}>
          <Stack>
            <Heading fontSize={'2xl'}>Twilio Keys</Heading>
            <Text maxW={'80%'} fontSize={'sm'} fontWeight={'light'} color={'gray.500'}>
              SMS Keys
            </Text>
          </Stack>
          <TwilioSMSKeyForm
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
