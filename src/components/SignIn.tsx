import { Box, Center, Flex, Grid, GridItem, Heading, Image, Text, useMediaQuery } from '@chakra-ui/react';
import SignInForm from './forms/SignInForm';
import { useEffect, useState } from 'react';

export default function SignIn() {
  const [isMd] = useMediaQuery('(max-width: 1024');
  const [isSmall] = useMediaQuery('(max-width: 850px)');

  const [colSpan, setColSpan] = useState({ l: 2, r: 3 });

  useEffect(() => {
    if (isMd) setColSpan({ l: 3, r: 2 });
    else if (isSmall) setColSpan({ l: 5, r: 2 });
    else setColSpan({ l: 2, r: 3 });
  }, [isMd, isSmall]);

  return (
    <Grid templateColumns={'repeat(5, 1fr)'} width={'100%'} height={'100%'}>
      <GridItem
        colSpan={colSpan.l}
        w={'100%'}
        h={'100%'}
        bg={'var(--red-grad)'}
        display={'flex'}
        alignItems={'center'}
        alignContent={'center'}
        textAlign={'center'}
        justifyContent={'center'}
        flexDir={'column'}
        padding={'1rem'}
        py={'10%'}
        gap={'2rem'}
      >
        <Image src="/images/bap-logo.png" alt="logo" width={'288px'} height={'99px'} />

        <Center flexDir={'column'} gap={2} mt={8}>
          <Heading color={'white'}>Sign In</Heading>
          <Text color={'white'}>Sign in to BAP Admin Panel</Text>
        </Center>

        <Flex w={'100%'} px={isMd ? '8%' : '15%'}>
          <SignInForm />
        </Flex>
      </GridItem>

      {/* right side */}
      <GridItem
        colSpan={colSpan.r}
        w={'100%'}
        h={'100%'}
        bg={'white'}
        background={'url(/images/world-map.png) center / cover no-repeat'}
        padding={'max(16rem,20%)'}
        display={isSmall ? 'none' : 'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box>
          <Image src="/images/bap-logo-red.png" alt="logo" maxW={'393px'} maxH={'137px'} />
        </Box>
      </GridItem>
    </Grid>
  );
}
