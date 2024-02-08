import {
  Avatar,
  Box,
  Button,
  Flex,
  FlexProps,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Tag,
  Text,
  useDisclosure,
  useTimeout,
} from '@chakra-ui/react';
import DashboardHeader from '../shared/DashboardHeader';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { useEffect, useRef, useState } from 'react';
import SendMsgIcon from '../icons/SendMsgIcon';
import useWindowResize from '../../hooks/useWindowResize';

export default function SupportChat() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [maxSideBarHeight, setMaxSideBarHeight] = useState<string>('100%');
  const [isMdContainer, setIsMdContainer] = useState<boolean>(false);

  const [mounted, setMount] = useState<boolean>(false);
  useTimeout(() => setMount(true), 1000);

  const { isOpen, onToggle } = useDisclosure();

  useWindowResize(() => {
    if (!containerRef.current) return;
    setIsMdContainer(containerRef.current.clientWidth < 800);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    setMaxSideBarHeight(`${containerRef.current.clientHeight}px`);
  }, [containerRef]);

  return (
    <>
      <DashboardHeader
        alignItems={'center'}
        stackProps={{
          w: 'full',
        }}
      >
        <Flex alignItems={'center'} w={'full'}>
          <Text>Support Chat</Text>
          {isMdContainer && (
            <Button size={'sm'} ml={'auto'} variant={'outline'} colorScheme="whiteAlpha" onClick={onToggle}>
              <HamburgerIcon />
              <Flex position={'absolute'} top={-0.5} w={3} h={3} right={-0.5} bg={'green.200'} rounded={'full'}>
                {''}
              </Flex>
            </Button>
          )}
        </Flex>
      </DashboardHeader>
      <Flex w={'full'} h={'full'} ref={containerRef} maxH={'100%'} overflow={'hidden'} bg={'white'}>
        {/* side bar */}
        <Flex
          minW={isMdContainer ? '100%' : '35%'}
          flexDir={'column'}
          gap={3}
          px={3}
          h={'100%'}
          maxH={maxSideBarHeight}
          overflow={'auto'}
          pt={3}
          bg={'white'}
          position={isMdContainer ? 'fixed' : 'initial'}
          zIndex={999}
          className={`${isOpen || !isMdContainer ? 'sticky-sidebar-open' : 'sticky-sidebar-close'} ${mounted && 'ease-in-out'}`}
        >
          <Box>
            <InputGroup>
              <InputLeftElement>
                <SearchIcon color={'gray.500'} fontSize={'xs'} />
              </InputLeftElement>
              <Input placeholder="Search..." variant={'search'} fontSize={'xs'} />
            </InputGroup>
          </Box>
          <Flex gap={4}>
            <Tag colorScheme="orange" rounded={'lg'}>
              New Messages
            </Tag>
            <Tag variant={'outline'} colorScheme="blackAlpha" rounded={'lg'}>
              All Messages
            </Tag>
          </Flex>

          <Flex flexDir={'column'} gap={2}>
            {new Array(3).fill(' ').map((_, idx) => {
              return <Profile key={idx} />;
            })}
          </Flex>
        </Flex>

        {/* Chat Screen */}
        <Flex flex={1} borderLeft={'1px solid var(--black-color)'}>
          <Chat />
        </Flex>
      </Flex>
    </>
  );
}

const DUMMY_MESSAGES = [
  { msg: 'Hello! Where are you brother? ', time: '15:42', sender: 'Driver' },
  { msg: 'I’m just few blocks away from your Position.Please hurry', time: '16:42', sender: 'Admin' },
  { msg: 'Ok I’m coming', time: '16:45', sender: 'Driver' },
  { msg: 'Thanks, We are waiting . It’s an emergency.', time: '16:46', sender: 'Driver' },
];

const Chat = () => {
  return (
    <Grid w={'full'} h={'full'} gridTemplateRows={'repeat(8, 1fr)'}>
      <GridItem rowSpan={1} display={'flex'} alignItems={'center'} p={2} px={3}>
        <Stack spacing={-1}>
          <Text fontSize={'md'} fontWeight={'bold'}>
            Travis Barker
          </Text>
          <Text color={'gray.500'} fontSize={'sm'}>
            Driver
          </Text>
        </Stack>
      </GridItem>
      <GridItem rowSpan={6} display={'flex'} w={'100%'} px={4} flexDir={'column'} gap={2} overflowY={'auto'}>
        {DUMMY_MESSAGES.map((chat, i) => (
          <ChatMessage key={i} sender={chat.sender} time={chat.time} isActiveUser={i % 2 === 0}>
            {chat.msg}
          </ChatMessage>
        ))}
      </GridItem>
      <GridItem rowSpan={1} display={'flex'}>
        <InputGroup mt={'auto'}>
          <InputRightElement top={'20%'}>
            <Button variant={'unstyled'}>
              <SendMsgIcon />
            </Button>
          </InputRightElement>
          <Input w={'full'} variant={'chat'} placeholder="Type any message here" />
        </InputGroup>
      </GridItem>
    </Grid>
  );
};

interface ChatMessageProps extends FlexProps {
  sender: string;
  time?: string;
  isActiveUser?: boolean;
}

const ChatMessage = ({ children, time, sender, isActiveUser, ...rest }: ChatMessageProps) => {
  return (
    <Flex maxW={'80%'} flexDir={'column'} ml={isActiveUser ? 'auto' : 'initial'} {...rest}>
      <Text color={'gray.500'} fontSize={'md'} ml={isActiveUser ? 'auto' : 'initial'} mr={2} my={1}>
        {sender}
      </Text>
      <Flex>
        <Flex
          borderRadius={isActiveUser ? '0px 16px 16px 16px' : '0px 16px 16px 16px'}
          padding={'12px 18px 6px 18px'}
          bg={isActiveUser ? '#EAEAEA' : '#8A92A6'}
        >
          <Stack color={isActiveUser ? 'black' : 'white'} spacing={1}>
            <Text fontSize={'sm'}>{children}</Text>
            <Text fontSize={'sm'} fontWeight={'light'}>
              {time}
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
};

const Profile = () => {
  return (
    <Flex w={'full'} bg={'light.100'} gap={3} p={2} alignItems={'center'}>
      <Avatar />
      <Stack spacing={-1}>
        <Text fontSize={'md'} fontWeight={'bold'} maxW={'7rem'} isTruncated>
          Bilmond
        </Text>
        <Text fontSize={'xs'} color={'gray.500'}>
          Just contacted you
        </Text>
      </Stack>
      <Text
        color={'blue.500'}
        fontWeight={'bold'}
        ml={'auto'}
        fontSize={'md'}
        cursor={'pointer'}
        _hover={{
          color: 'blue.400',
        }}
      >
        Accept
      </Text>
    </Flex>
  );
};
