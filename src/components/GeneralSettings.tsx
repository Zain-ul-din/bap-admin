import { Flex, FormControl, FormLabel, Grid, GridItem, Heading, Input, Text } from '@chakra-ui/react';
import DashboardHeader from './shared/DashboardHeader';

export default function GeneralSettings() {
  return (
    <>
      <DashboardHeader>General Settings</DashboardHeader>
      <Flex w={'full'} p={2} flexDir={'column'}>
        <Text color={'gray.200'} fontWeight={'light'} ml={3}>
          General Settings
        </Text>

        <Flex w={'full'} p={4} bg={'white'} flexDir={'column'} gap={6} rounded={'md'}>
          <Heading fontSize={'2xl'}>General App Information</Heading>
          <Flex w={'full'}>
            <Flex
              minW={'30%'}
              justifyContent={'center'}
              alignItems={'center'}
              py={20}
              rounded={'lg'}
              border={'1px dashed var(--black-color)'}
              bg={'gray.50'}
            >
              Dag & Drop
            </Flex>
            <Flex flex={1} flexWrap={'wrap'} p={3} gap={2}>
              <Grid templateColumns={'repeat(2, 1fr)'} w={'100%'} gap={2}>
                <GridItem colSpan={1} display={'flex'} flexDir={'column'} justifyContent={'space-between'}>
                  <FormControl>
                    <FormLabel>Long App Name</FormLabel>
                    <Input placeholder="App Name" variant={'filled'} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Long App... Name</FormLabel>
                    <Input placeholder="App Name" variant={'filled'} />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={1} display={'flex'} flexDir={'column'} justifyContent={'space-between'}>
                  <FormControl>
                    <FormLabel>Long App Name</FormLabel>
                    <Input placeholder="App Name" variant={'filled'} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Long App Name</FormLabel>
                    <Input placeholder="App Name" variant={'filled'} />
                  </FormControl>
                </GridItem>
              </Grid>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
