import { Button, Flex, FlexProps, Heading, Table, TableContainer, Tag, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

interface DataTableProps extends FlexProps {
  heading: string
}

export default function DataTable({
  heading, ...rest
}: DataTableProps) {
  return <Flex w={'100%'} bg={'white'} 
    p={2}
    rounded={'md'} flexDir={'column'}
    gap={4}
    shadow={'sm'}
    {...rest}
  >
    <Flex w={'100%'} alignItems={'center'} p={2}>
      <Heading fontSize={'xl'}>{heading}</Heading>
      <Button size={'sm'} ml={'auto'} 
        colorScheme="blackAlpha" px={3} fontWeight={'light'} height={'1.7rem'}>
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
          {new Array(6).fill(' ').map((_, idx)=> {
          return <Tr textAlign={'center'} key={idx}>
            <Td>Doyle Inc</Td>
            <Td>Basic Life Support</Td>
            <Td>3:00 PM, 9th Sep 23</Td>
            <Td>742 Horace Haven</Td>
            <Td>66771 Doyle Light</Td>
            <Td>
              <Tag colorScheme="blue">In Progress</Tag>
            </Td>
          </Tr>})}
        </Tbody>
      </Table>
    </TableContainer>
  </Flex>
}
