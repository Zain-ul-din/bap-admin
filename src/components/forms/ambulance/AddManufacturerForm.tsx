import { Box, Text, Flex, FlexProps, FormControl, FormLabel, Input } from '@chakra-ui/react';
import SaveBtn from '../shared/SaveBtn';

export default function AddManufacturerForm({ ...rest }: FlexProps) {
  return (
    <Flex flexDir={'column'} as={'form'} {...rest} p={3} rounded={'md'} gap={3} mx={4} bg={'white'}>
      <Text fontWeight={'semibold'} fontSize={'xl'}>
        Add Manufacturers
      </Text>
      <FormControl>
        <FormLabel fontSize={'sm'}>Make</FormLabel>
        <Input variant={'filled'} fontSize={'sm'} placeholder="Add make" />
      </FormControl>
      <FormControl>
        <FormLabel fontSize={'sm'}>Model</FormLabel>
        <Input fontSize={'sm'} variant={'filled'} placeholder="Add modal" />
      </FormControl>
      <FormControl>
        <FormLabel fontSize={'sm'}>Year</FormLabel>
        <Input variant={'filled'} fontSize={'sm'} placeholder="Add year" />
      </FormControl>
      <Box>
        <SaveBtn type="submit" />
      </Box>
    </Flex>
  );
}
