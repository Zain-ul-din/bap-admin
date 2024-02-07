import { Button, Flex, FlexProps, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import StatusTag from '../design/StatusTag';
import { DummyTableData } from '../../types/dashboard';
interface DataTableProps extends FlexProps {
  heading: string;
  table?: DummyTableData[];
}

export default function DataTable({ heading, table, ...rest }: DataTableProps) {
  return (
    <Flex w={'100%'} bg={'white'} p={2} rounded={'md'} flexDir={'column'} gap={4} shadow={'sm'} {...rest}>
      <Flex w={'100%'} alignItems={'center'} p={2}>
        <Heading fontSize={'xl'}>{heading}</Heading>
        <Button size={'sm'} ml={'auto'} colorScheme="blackAlpha" px={3} fontWeight={'light'} height={'1.7rem'}>
          View All
        </Button>
      </Flex>
      <TableContainer overflow={'auto'} w={'100%'}>
        <Table variant={'simple'} size={'sm'} w={'100%'} overflow="auto" maxW="100%">
          <Thead>
            <Tr>
              <Th>Organization Name</Th>
              <Th>Vehicle Type</Th>
              <Th>Started At</Th>
              <Th>Pickup Location</Th>
              <Th>Destination Location</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {table?.map((data, idx) => {
              return (
                <Tr textAlign={'center'} key={idx}>
                  <Td>{data?.ORGANIZATIONNAME}</Td>
                  <Td>{data?.VEHICLETYPE}</Td>
                  <Td>{data?.STARTEDAT}</Td>
                  <Td>{data?.PICKUPLOCATION}</Td>
                  <Td>{data?.DESTINATIONLOCATION}</Td>
                  <Td>
                    <StatusTag colorScheme="blue" status={data?.STATUSVALUE || 'pending'}>
                      {data?.STATUSData}
                    </StatusTag>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}
