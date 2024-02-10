import { Flex, HStack, Stack, Text } from '@chakra-ui/react';
import AmbulanceIcon from '../../icons/AmbulanceIcon';
import DashboardHeader from '../../shared/DashboardHeader';
import RoutesBreadcrumb from '../../shared/RoutesBreadcrumb';

export default function MapTracking() {
  return (
    <>
      <DashboardHeader>Booking # BB124 Map Tracking</DashboardHeader>
      <RoutesBreadcrumb
        whiteSpace={'nowrap'}
        gap={4}
        overflowX={'auto'}
        icon={(props) => (
          <AmbulanceIcon
            color="red"
            style={{
              transform: 'translateY(-2px)',
            }}
            {...props}
          />
        )}
        path="Bookings > # BB124 > Track on Map"
      >
        <Flex ml={'auto'} gap={2}>
          <Stack spacing={0} ml={'auto'} bg={'white'} p={2} rounded={'md'}>
            <HStack>
              <Text fontSize={'sm'}>Driver Name - </Text>
              <Text fontSize={'sm'}>Belhasa</Text>
            </HStack>
            <HStack>
              <Text fontSize={'sm'}>Driver Contact - </Text>
              <Text fontSize={'sm'}>+34 124512515</Text>
            </HStack>
          </Stack>
          <Stack spacing={0} ml={'auto'} bg={'white'} p={2} rounded={'md'}>
            <HStack>
              <Text fontSize={'sm'}>Patient Name - </Text>
              <Text fontSize={'sm'}>Rashid</Text>
            </HStack>
            <HStack>
              <Text fontSize={'sm'}>Patient Contact - </Text>
              <Text fontSize={'sm'}>+34 124512515</Text>
            </HStack>
          </Stack>
        </Flex>
      </RoutesBreadcrumb>
      <Flex flex={1}>
        <iframe
          src="https://maps.google.com/maps?q=lahore&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameBorder="0"
          scrolling="no"
          style={{
            width: '100%',
            height: '100%',
          }}
        ></iframe>
      </Flex>
    </>
  );
}
