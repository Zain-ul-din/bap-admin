import { Flex, Stack, Text } from '@chakra-ui/react';
import AmbulanceIcon from '../../icons/AmbulanceIcon';
import DashboardHeader from '../../shared/DashboardHeader';
import RoutesBreadcrumb from '../../shared/RoutesBreadcrumb';
import ChatMessage from '../../shared/ChatMessage';

const DUMMY_MESSAGES = [
  { msg: 'Hello! Where are you brother?', time: '15:42', sender: 'Driver' },
  { msg: 'I’m just few blocks away from your Position.Please hurry', time: '16:42', sender: 'Patient' },
  { msg: 'Ok I’m coming', time: '16:45', sender: 'Driver' },
  { msg: 'Thanks, We are waiting . It’s an emergency.', time: '16:46', sender: 'Admin' },
];

export default function Chat() {
  return (
    <>
      <DashboardHeader>Booking # BB124 Chat</DashboardHeader>
      <RoutesBreadcrumb
        icon={(props) => (
          <AmbulanceIcon
            {...props}
            color="red"
            style={{
              transform: 'translateY(-2px)',
            }}
          />
        )}
        path="Bookings > # BB124 > Chat"
      ></RoutesBreadcrumb>
      <Flex m={1} py={2} px={3} bg={'white'} gap={4}>
        <Stack spacing={-1}>
          <Text fontSize={'md'} fontWeight={'bold'}>
            Travis Barker
          </Text>
          <Text color={'gray.500'} fontSize={'sm'}>
            Driver
          </Text>
        </Stack>
        <Stack spacing={-1}>
          <Text fontSize={'md'} fontWeight={'bold'}>
            Travis Barker
          </Text>
          <Text color={'gray.500'} fontSize={'sm'}>
            Driver
          </Text>
        </Stack>
      </Flex>

      <Flex m={1} bg={'white'} flex={1} flexDir={'column'} px={4} gap={4} pb={5} overflowY={'auto'}>
        {DUMMY_MESSAGES.map((chat, i) => (
          <ChatMessage
            key={i}
            sender={chat.sender}
            time={chat.time}
            isActiveUser={chat.sender === 'Driver'}
            ml={'initial'}
            senderTextProps={{
              ml: 'initial',
            }}
          >
            {chat.msg}
          </ChatMessage>
        ))}
      </Flex>
    </>
  );
}
