import {
  Button,
  Grid,
  Text,
  GridItem,
  HStack,
  Heading,
  Stack,
  Flex,
  Avatar,
  Select,
  Box,
  Img,
  GridItemProps,
  ImageProps,
  useMediaQuery,
} from '@chakra-ui/react';
import AmbulanceIcon from '../../icons/AmbulanceIcon';
import DashboardHeader from '../../shared/DashboardHeader';
import RoutesBreadcrumb from '../../shared/RoutesBreadcrumb';
import { DeleteIcon, StarIcon } from '@chakra-ui/icons';
import Chat2Icon from '../../icons/Chat2Icon';
import MapIcon from '../../icons/MapIcon';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../lib/constant';
import StatusTag from '../../design/StatusTag';
import { useCallback, useRef, useState } from 'react';
import useWindowResize from '../../../hooks/useWindowResize';

const defaultGridProps = {
  colSpan: 5,
  leftColSpan: 3,
  rightColSpan: 2,
};

export default function BookingDetails() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [gridProps, setGridProps] = useState(defaultGridProps);
  const [isMdScreen] = useMediaQuery('(max-width: 750px)');

  const onWindowResize = useCallback(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    console.log(containerWidth);
    if (containerWidth <= 750) setGridProps({ colSpan: 1, leftColSpan: 1, rightColSpan: 1 });
    else if (containerWidth <= 1000) setGridProps({ colSpan: 4, leftColSpan: 2, rightColSpan: 2 });
    else setGridProps(defaultGridProps);
  }, [containerRef]);

  useWindowResize(onWindowResize, []);

  return (
    <>
      <DashboardHeader>Booking # BB124</DashboardHeader>
      <Flex flexDir={'column'} gap={3}>
        <RoutesBreadcrumb
          icon={(props) => (
            <AmbulanceIcon
              {...props}
              style={{
                minWidth: '20px',
                minHeight: '20px',
                transform: 'translateY(-2px)',
                marginLeft: '0.3rem',
              }}
              color="red"
            />
          )}
          path="Bookings > # BB124"
          whiteSpace={'nowrap'}
          overflowX={'auto'}
          gap={4}
        >
          <HStack ml={'auto'} alignItems={'center'}>
            <Button variant={'white'} rounded={'full'} size={'sm'} leftIcon={<DeleteIcon />}>
              Delete Booking
            </Button>
            <Link to={`${ROUTES['Booking_Chat']}/foo`}>
              <Button variant="greenish" rounded={'full'} size={'sm'} leftIcon={<Chat2Icon width={20} height={20} />}>
                View Patient & Driver Chat
              </Button>
            </Link>
            <Link to={`${ROUTES['Booking_Tracking']}/foo`}>
              <Button variant="greenish" rounded={'full'} size={'sm'} leftIcon={<MapIcon />}>
                Track on Map
              </Button>
            </Link>
          </HStack>
        </RoutesBreadcrumb>

        <Flex flexDir={'column'} gap={2} p={4} pt={0} maxW={'1200px'} m={'0 auto'} ref={containerRef}>
          <Grid
            mt={2}
            gridTemplateColumns={`repeat(${gridProps.colSpan}, 1fr)`}
            gridTemplateRows={'repeat(1, 1fr)'}
            p={3}
            pb={0}
            gap={2}
          >
            {/* Organization */}
            <OrganizationDetails bg={'white'} p={3} rounded={'md'} colSpan={gridProps.leftColSpan} />

            {/* User & Patient */}
            <GridItem colSpan={gridProps.rightColSpan}>
              <Grid templateRows={'repeat(2, 1fr)'} h={'full'} w={'full'} gap={2}>
                <UserDetails bg={'white'} p={3} rounded={'md'} />
                <PatientDetails bg={'white'} p={3} rounded={'md'} />
              </Grid>
            </GridItem>
          </Grid>

          <Grid
            gridTemplateColumns={`repeat(${gridProps.colSpan}, 1fr)`}
            gridTemplateRows={'repeat(1, 1fr)'}
            p={3}
            pt={0}
            gap={2}
          >
            {/* Vehicle Details */}
            <VehicleDetails
              imgProps={{
                style: {
                  position: 'absolute',
                  bottom: 0,
                  right: '-10%',
                  width: gridProps.leftColSpan == 2 || isMdScreen ? 'max(10rem, 40%)' : 'auto',
                  height: gridProps.leftColSpan == 2 || isMdScreen ? 'max(6rem, 40%)' : 'auto',
                },
              }}
              overflow={'hidden'}
              bg={'white'}
              p={3}
              rounded={'md'}
              colSpan={gridProps.leftColSpan}
              position={'relative'}
            />
            {/* Driver Details */}
            <DriverDetails bg={'white'} p={3} rounded={'md'} colSpan={gridProps.rightColSpan} />
            {/* Trip Details */}
            <TripDetails bg={'white'} p={3} rounded={'md'} colSpan={gridProps.leftColSpan} />
            {/* Payment Details */}
            <PaymentDetails bg={'white'} p={3} rounded={'md'} colSpan={gridProps.rightColSpan} />
          </Grid>
        </Flex>
      </Flex>
    </>
  );
}

const VehicleDetails = ({ imgProps, ...rest }: GridItemProps & { imgProps: ImageProps }) => {
  return (
    <GridItem {...rest}>
      <Stack spacing={4}>
        <Heading fontSize={'xl'}>Vehicle Details</Heading>
        <Stack spacing={4}>
          <HStack spacing={6}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Vehicle Type
            </Text>
            <Text fontSize={'sm'}>Basic Life Support</Text>
          </HStack>
          <HStack spacing={6}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Vehicle Reg #
            </Text>
            <Text fontSize={'sm'}>TX 1234 88</Text>
          </HStack>
          <Stack>
            <Heading fontSize={'md'}>Extra being Offered</Heading>
            <HStack>
              <AmbulanceOfferCard pic="/images/medical-doctor.png" text="Doctor" picAlt="doctor_img" />
              <AmbulanceOfferCard pic="/images/physical-therapy.png" text="Paramedic" picAlt="doctor_img" />
            </HStack>
          </Stack>
        </Stack>
      </Stack>

      <Img alt="ambulance_pic" src="/images/ambulance-full.png" {...imgProps} />
    </GridItem>
  );
};

const DriverDetails = ({ ...rest }: GridItemProps) => {
  return (
    <GridItem {...rest}>
      <Stack spacing={4}>
        <Heading fontSize={'xl'}>Drivers Details</Heading>
        <Stack spacing={4}>
          <Box px={2}>
            <Select rounded={'full'} size={'sm'}>
              <option>Driver 1</option>
            </Select>
          </Box>
          <HStack justifyContent={'space-between'}>
            <Stack spacing={4}>
              <HStack spacing={6}>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Name
                </Text>
                <Text fontSize={'sm'}>Belhasa</Text>
              </HStack>
              <HStack spacing={6}>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Ratings
                </Text>
                <HStack alignItems={'center'} spacing={1}>
                  <StarIcon fontSize={'xs'} color={'yellow.500'} />
                  <Text fontSize={'sm'} alignItems={'center'}>
                    4.3/5(40)
                  </Text>
                </HStack>
              </HStack>
              <HStack spacing={6}>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Driver Email
                </Text>
                <Text fontSize={'sm'}>drivermail@gmail.com</Text>
              </HStack>
              <HStack spacing={6}>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Phone Number
                </Text>
                <Text fontSize={'sm'}>+34 124512515</Text>
              </HStack>
            </Stack>
            <Avatar size={'lg'} ml={'auto'} />
          </HStack>
        </Stack>
      </Stack>
    </GridItem>
  );
};

const TripDetails = ({ ...rest }: GridItemProps) => {
  return (
    <GridItem bg={'white'} p={3} rounded={'md'} colSpan={3} {...rest}>
      <Stack spacing={4}>
        <Heading fontSize={'xl'}>Trip Details</Heading>
        <Stack spacing={4}>
          <HStack spacing={8}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Started At
            </Text>
            <Text fontSize={'sm'}>10 : 30 AM ,6th November 2023</Text>
          </HStack>
          <HStack spacing={8}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Pickup Location
            </Text>
            <Text fontSize={'sm'}>7875 Salvador Rapid</Text>
          </HStack>
          <HStack spacing={8}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Dropoff Location
            </Text>
            <Text fontSize={'sm'}>93300 Shirley Motorway</Text>
          </HStack>
          <HStack spacing={8}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Completed At
            </Text>
            <Text fontSize={'sm'}>-</Text>
          </HStack>
          <HStack spacing={8}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Status
            </Text>
            <Text fontSize={'sm'}>
              <StatusTag status="pending">In progress</StatusTag>
            </Text>
          </HStack>
        </Stack>
      </Stack>
    </GridItem>
  );
};

const PaymentDetails = ({ ...rest }: GridItemProps) => {
  return (
    <GridItem bg={'white'} p={3} rounded={'md'} colSpan={2} {...rest}>
      <Stack spacing={4}>
        <HStack justifyContent={'space-between'}>
          <Heading fontSize={'xl'}>Payment Details</Heading>
          <Button colorScheme="blue" size={'xs'} rounded={'full'}>
            View Invoice
          </Button>
        </HStack>
        <Stack spacing={4}>
          <HStack spacing={8}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Payment Method
            </Text>
            <Text fontSize={'sm'}>Card</Text>
          </HStack>
          <HStack spacing={8}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Fare
            </Text>
            <Text fontSize={'sm'}>40 lei</Text>
          </HStack>
          <HStack spacing={8}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Booking Charges
            </Text>
            <Text fontSize={'sm'}>4 lei</Text>
          </HStack>
          <HStack spacing={8}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Completed At
            </Text>
            <Text fontSize={'sm'}>-</Text>
          </HStack>
        </Stack>
      </Stack>
    </GridItem>
  );
};

const UserDetails = ({ ...rest }: GridItemProps) => {
  return (
    <GridItem {...rest}>
      <Stack spacing={4}>
        <Heading fontSize={'xl'}>User</Heading>
        <Flex>
          <Stack spacing={4}>
            <HStack spacing={8}>
              <Text fontSize={'sm'} color={'gray.500'}>
                User Id
              </Text>
              <Text fontSize={'sm'}>U124</Text>
            </HStack>
            <HStack spacing={8}>
              <Text fontSize={'sm'} color={'gray.500'}>
                Username
              </Text>
              <Text fontSize={'sm'}>Ahmed Khan</Text>
            </HStack>
            <HStack spacing={8}>
              <Text fontSize={'sm'} color={'gray.500'}>
                Phone Number
              </Text>
              <Text fontSize={'sm'}>+34 312512115</Text>
            </HStack>
          </Stack>
          <Avatar size={'lg'} ml={'auto'} mr={3} />
        </Flex>
      </Stack>
    </GridItem>
  );
};

const PatientDetails = ({ ...rest }: GridItemProps) => {
  return (
    <GridItem {...rest}>
      <Stack spacing={4}>
        <Heading fontSize={'xl'}>Patient</Heading>
        <Stack spacing={4}>
          <HStack justifyContent={'space-between'}>
            <HStack spacing={8}>
              <Text fontSize={'sm'} color={'gray.500'}>
                Patient Name
              </Text>
              <Text fontSize={'sm'}>Doyle Inc</Text>
            </HStack>
            <HStack spacing={8}>
              <Text fontSize={'sm'} color={'gray.500'}>
                DOB
              </Text>
              <Text fontSize={'sm'}>12-11-1997</Text>
            </HStack>
          </HStack>
          <HStack justifyContent={'space-between'}>
            <HStack spacing={8}>
              <Text fontSize={'sm'} color={'gray.500'}>
                Height
              </Text>
              <Text fontSize={'sm'}>177cm</Text>
            </HStack>
            <HStack spacing={8}>
              <Text fontSize={'sm'} color={'gray.500'}>
                Weight
              </Text>
              <Text fontSize={'sm'}>199lb</Text>
            </HStack>
          </HStack>
          <Stack>
            <Text fontSize={'sm'} color={'gray.500'}>
              Medical Description
            </Text>
            <Text fontSize={'sm'}>
              Est excepturi natus veniam hic rerum asperiores. Et quo maiores. Repellat aut voluptas nisi asperiores
              molestiae et rerum ut. Iste temporibus at nihil soluta vel ipsa. Et maiores enim sunt inventore
              consequatur. In illo aut.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </GridItem>
  );
};

const OrganizationDetails = ({ ...rest }: GridItemProps) => {
  return (
    <GridItem {...rest}>
      <Stack spacing={4}>
        <Heading fontSize={'xl'}>Organization</Heading>
        <Stack spacing={4}>
          <HStack spacing={8}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Owner Id
            </Text>
            <Text fontSize={'sm'}>0123</Text>
          </HStack>
          <HStack spacing={8}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Owner Name
            </Text>
            <Text fontSize={'sm'}>Doyle Inc</Text>
          </HStack>
          <HStack spacing={8}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Reg Number
            </Text>
            <Text fontSize={'sm'}>BB1230NM</Text>
          </HStack>
          <HStack spacing={8}>
            <Text fontSize={'sm'} color={'gray.500'}>
              VAT Number
            </Text>
            <Text fontSize={'sm'}>AV7965BB</Text>
          </HStack>
          <HStack spacing={8}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Phone Number
            </Text>
            <Text fontSize={'sm'}>+34 23526623</Text>
          </HStack>
          <HStack spacing={8}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Secondary Number
            </Text>
            <Text fontSize={'sm'}>-</Text>
          </HStack>
          <HStack spacing={8}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Email Address
            </Text>
            <Text fontSize={'sm'}>Doyleinc@gmail.com</Text>
          </HStack>
        </Stack>
      </Stack>
    </GridItem>
  );
};

const AmbulanceOfferCard = ({ pic, picAlt, text }: { pic: string; picAlt: string; text: string }) => {
  return (
    <Flex
      bg={'var(--red-grad)'}
      p={3}
      py={2}
      rounded={'lg'}
      flexDir={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Img src={pic} alt={picAlt} w={35} h={35} />
      <Text fontSize={'sm'} color={'white'}>
        {text}
      </Text>
    </Flex>
  );
};
