import { Avatar, Box, Button, Flex, Input, InputGroup, InputLeftElement, Stack, Tag, Text } from '@chakra-ui/react';
import DashboardHeader from '../shared/DashboardHeader';
import { SearchIcon } from '@chakra-ui/icons';
import { useEffect, useRef, useState } from 'react';
import SendMsgIcon from '../icons/SendMsgIcon';

export default function SupportChat() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [maxSideBarHeight, setMaxSideBarHeight] = useState<string>('100%');

  useEffect(() => {
    if (!containerRef.current) return;
    setMaxSideBarHeight(`${containerRef.current.clientHeight}px`);
  }, [containerRef]);

  return (
    <>
      <DashboardHeader>Support Chat</DashboardHeader>
      <Flex w={'full'} h={'full'} ref={containerRef} maxH={'100%'} overflow={'hidden'}>
        {/* side bar */}
        <Flex minW={'30%'} flexDir={'column'} gap={3} px={3} maxH={maxSideBarHeight} overflow={'auto'} pt={3}>
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
          <Input w={'full'} variant={'chat'} placeholder="Type any message here" position={'absolute'} bottom={'0'} />
          <Button variant={'unstyled'} position={'absolute'} right={4} bottom={3}>
            <SendMsgIcon />
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

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
