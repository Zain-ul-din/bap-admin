import { Flex, Grid, GridItem, Heading, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import OrderIcon from "./icons/dashboard/OrderIcon";
import DataTable from "./shared/DataTable";

export default function Dashboard() {
  return <Flex w={'100%'} h={'100%'} p={3} flexDir={'column'}
    gap={'0.5rem'} pb={5}
  >
    <StatCards />
    <DataTable 
      heading="Recent Ambulance Rides"
    />
    <DataTable 
      heading="New Organizations Registered"
    />
    <Flex minH={'1rem'}></Flex>
  </Flex>
}

const StatCards = ()=> {
  return <Grid templateColumns={'repeat(4, 1fr)'} py={2} w={'100%'}gap={4}>
    {new Array(4).fill(' ').map((_,i)=>{
      return <StatCard key={i}/>
    })}
  </Grid>
}

const StatCard = ()=> {
  const [isSmallScreen] = useMediaQuery("(max-width: 700px)")
  
  return <GridItem 
    colSpan={isSmallScreen ? 2 : 1} 
    display={'flex'}
    justifyContent={'center'} 
    alignItems={'center'}
    shadow={'lg'}
    rounded={'md'}
    p={4}
    gap={3}
    bg={'white'}
    flexWrap={'wrap'}
  >
    <OrderIcon />
    <Stack spacing={0} textAlign={'center'}>
      <Heading fontSize={'2xl'} color={'var(--dark-text-color)'}>75</Heading>
      <Text fontSize={'sm'} color={'var(--dark-text-color)'} fontWeight={'light'}>Owners</Text>
    </Stack>
  </GridItem>
}



