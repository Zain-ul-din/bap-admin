import { Box, Flex, FlexProps, FormControl, FormLabel, Input } from '@chakra-ui/react';
import SaveBtn from './components/SaveBtn';

export default function BookingPercentageForm({ ...rest }: FlexProps) {
  return (
    <Flex as={'form'} {...rest}>
      <Flex flexDir={'column'} gap={4} w={'min(100%, 25rem)'} px={2}>
        <FormControl>
          <FormLabel>Commission Percentage</FormLabel>
          <Input placeholder="Set Percentage" variant={'filled'} type="number" />
        </FormControl>
        <Box>
          <SaveBtn type="submit" />
        </Box>
      </Flex>
    </Flex>
  );
}
