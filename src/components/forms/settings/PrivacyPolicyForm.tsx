import { Box, Flex, FlexProps, FormControl, FormLabel, Input } from '@chakra-ui/react';
import SaveBtn from '../shared/SaveBtn';

export default function PrivacyPolicyForm({ ...rest }: FlexProps) {
  return (
    <Flex flexDir={'column'} p={2} gap={4} {...rest}>
      <FormControl>
        <FormLabel>Privacy Policy Link </FormLabel>
        <Input placeholder="Enter privacy link" variant={'filled'} />
      </FormControl>
      <FormControl>
        <FormLabel>Terms & Conditions Link</FormLabel>
        <Input placeholder="Terms & Conditions Link" variant={'filled'} />
      </FormControl>
      <Box>
        <SaveBtn type="submit" />
      </Box>
    </Flex>
  );
}
