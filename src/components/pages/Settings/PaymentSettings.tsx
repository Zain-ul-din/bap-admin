import { Flex, Heading, Stack, Text, Link, Switch } from '@chakra-ui/react';
import DashboardHeader from '../../shared/DashboardHeader';
import { PaymentKeysForm } from '../../forms/settings';
import RoutesBreadcrumb from '../../shared/RoutesBreadcrumb';
import SettingIcons from '../../icons/SettingsIcon';

export default function PaymentSettings() {
  return (
    <>
      <DashboardHeader>Payment Methods</DashboardHeader>
      <RoutesBreadcrumb path={'Payment Methods'} icon={(props) => <SettingIcons {...props} />}></RoutesBreadcrumb>
      <Flex w={'full'} p={2} flexDir={'column'} gap={3} py={0}>
        <Flex w={'full'} p={4} bg={'white'} flexDir={'column'} gap={6} rounded={'md'}>
          <Flex alignItems={'center'}>
            <Stack>
              <Heading fontSize={'2xl'}>Stripe for Online Payments</Heading>
              <Text color={'gray.200'} fontWeight={'light'} maxW={'80%'} fontSize={'xs'}>
                Below are the keys that will be used to setup your payment account.Setup
                <Text
                  display={'inline-block'}
                  mx={'3px'}
                  color={'blue.500'}
                  fontWeight={'bold'}
                  textDecoration={'underline'}
                >
                  <Link>Stripe Account</Link>
                </Text>{' '}
                for charges deposit to your account.
              </Text>
            </Stack>
            <Stack ml={'auto'} textAlign={'center'}>
              <Switch size={'lg'} />
              <Text>disabled</Text>
            </Stack>
          </Flex>

          <PaymentKeysForm
            onSubmit={(e) => {
              e.preventDefault();
            }}
          />
        </Flex>
      </Flex>
    </>
  );
}
