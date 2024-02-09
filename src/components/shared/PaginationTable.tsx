import { Flex, FlexProps, Table, TableContainer } from '@chakra-ui/react';

interface PaginationTableProps extends FlexProps {}

export default function PaginationTable({ children, ...rest }: PaginationTableProps) {
  return (
    <Flex w={'full'} bg={'white'} rounded={'md'} flexDir={'column'} gap={4} {...rest}>
      <TableContainer shadow={'sm'}>
        <Table variant={'pagination'} size={'sm'} w={'100%'} overflow="auto" maxW="100%">
          {children}
        </Table>
      </TableContainer>
    </Flex>
  );
}
