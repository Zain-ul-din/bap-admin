import { Flex, Text } from '@chakra-ui/react';
import DashboardHeader from '../../shared/DashboardHeader';
import { PrivacyPolicyForm } from '../../forms/settings';

export default function PolicySettings() {
  return (
    <>
      <DashboardHeader>Privacy Policy & Terms Conditions</DashboardHeader>
      <Flex w={'full'} p={2} flexDir={'column'} m={2} gap={3}>
        <Text color={'gray.200'} fontWeight={'light'} ml={3} my={2}>
          Payment Methods
        </Text>
        <Flex w={'full'} p={4} bg={'white'} flexDir={'column'} gap={6} rounded={'md'}>
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
