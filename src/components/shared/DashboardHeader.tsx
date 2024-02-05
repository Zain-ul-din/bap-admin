import { Flex, FlexProps, Heading, Stack, Text } from '@chakra-ui/react';

interface DashboardHeaderProps extends FlexProps {
  description?: string;
}

export default function DashboardHeader({ description, children, ...rest }: DashboardHeaderProps) {
  return (
    <Flex w={'100%'} px={'1.5rem'} py={3} bg={'var(--black-color)'} color={'white'} {...rest}>
      <Stack spacing={0}>
        <Heading fontSize={'lg'} fontWeight={'bold'}>
          {children}
        </Heading>
        <Text fontSize={'sm'} fontWeight={'normal'}>
          {description}
        </Text>
      </Stack>
    </Flex>
  );
}
