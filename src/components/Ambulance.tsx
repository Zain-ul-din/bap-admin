import {
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Stack,
  Tag,
  Image,
  Text,
  GridItemProps,
  useMediaQuery,
} from '@chakra-ui/react';
import DashboardHeader from './shared/DashboardHeader';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useEffect, useRef, useState } from 'react';

export default function Ambulance() {
  return (
    <>
      <DashboardHeader>Ambulance Types</DashboardHeader>
      <Flex w={'full'} p={3} alignItems={'center'}>
        <Text fontSize={'sm'} color={'gray.200'}>
          Ambulance Types
        </Text>
        <Button colorScheme="red" fontWeight={'normal'} size={'md'} ml={'auto'}>
          + Add New
        </Button>
      </Flex>
      <Ambulances />
    </>
  );
}

const Ambulances = () => {
  const cardGridRef = useRef<HTMLDivElement>(null);
  const [gridColTemplate, setGridColTemplate] = useState<number>(3);
  const [isLargerScreen] = useMediaQuery('(min-width: 1000px)');
  const [isBaseScreen] = useMediaQuery('(max-width: 500px)');
  const [minCardSize, setMinCardSize] = useState<number>(300);

  useEffect(() => {
    setMinCardSize(isLargerScreen ? 400 : 300);
  }, [isLargerScreen]);

  useEffect(() => {
    const handleResize = () => {
      if (!cardGridRef.current) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const target = cardGridRef.current;
      const gap = parseInt(getComputedStyle(target).getPropertyValue('grid-row-gap'));
      let availableSpace = target.clientWidth - gap,
        colTemplate = 0;
      while (availableSpace >= minCardSize) {
        colTemplate += 1;
        availableSpace -= minCardSize;
      }
      setGridColTemplate(colTemplate);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [minCardSize]);

  return (
    <Grid
      w={'full'}
      p={isBaseScreen ? 1 : 3}
      templateColumns={`repeat(${gridColTemplate}, 3fr)`}
      gap={3}
      ref={cardGridRef}
    >
      <AmbulanceTypeCard p={isBaseScreen ? 2 : 4} />
      <AmbulanceTypeCard p={isBaseScreen ? 2 : 4} />
      <AmbulanceTypeCard p={isBaseScreen ? 2 : 4} />
      <AmbulanceTypeCard p={isBaseScreen ? 2 : 4} />
      <AmbulanceTypeCard p={isBaseScreen ? 2 : 4} />
      <AmbulanceTypeCard p={isBaseScreen ? 2 : 4} />
    </Grid>
  );
};

const AmbulanceTypeCard = ({ ...rest }: GridItemProps) => {
  return (
    <GridItem
      colSpan={1}
      display={'flex'}
      bg={'white'}
      flexDir={'column'}
      w={'100%'}
      rounded={'md'}
      shadow={'md'}
      {...rest}
    >
      <Flex bg={'red.500'} p={'5'} py={'20'} rounded={'lg'} position={'relative'} overflow={'hidden'}>
        <Stack position={'absolute'} top={4} left={4} color={'white'} spacing={0}>
          <Text fontSize={'lg'}>Basic Life Support</Text>
          <Text fontSize={'sm'}>ID # AT1</Text>
        </Stack>
        <Image position={'absolute'} bottom={0} right={0} src="/images/ambulance.png" alt="ambulance_image" />
      </Flex>
      <Flex flexWrap={'wrap'} gap={2} py={4} mb={6}>
        <Tag colorScheme="red" variant={'outline'} rounded={'xl'}>
          Critical care support
        </Tag>
        <Tag colorScheme="red" variant={'outline'} rounded={'xl'}>
          cardiac monitor
        </Tag>
        <Tag colorScheme="red" variant={'outline'} rounded={'xl'}>
          IV therapy
        </Tag>
        <Tag colorScheme="red" variant={'outline'} rounded={'xl'}>
          Loading Stretcher
        </Tag>
        <Tag colorScheme="red" variant={'outline'} rounded={'xl'}>
          Air conditioner
        </Tag>
      </Flex>
      <Divider />
      <Flex py={'4'} gap={2} justifyContent={'flex-end'}>
        <Button colorScheme="red" fontWeight={'light'} size={'md'}>
          <DeleteIcon mx={2} />
          Delete
        </Button>
        <Button colorScheme="blue" fontWeight={'light'} size={'md'}>
          <EditIcon mx={2} />
          Edit
        </Button>
      </Flex>
    </GridItem>
  );
};
