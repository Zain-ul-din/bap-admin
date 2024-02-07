import { Box, Button, Flex, FlexProps, FormControl, FormLabel, Input } from '@chakra-ui/react';
import PasswordInput from '../shared/PasswordInput';

export default function PaymentKeysForm({ ...rest }: FlexProps) {
  return (
    <Flex as={'form'} flexDir={'column'} gap={4} {...rest}>
      <FormControl>
        <FormLabel>Secret Key</FormLabel>
        <PasswordInput>
          {({ canShow }) => {
            return <Input placeholder="secret key" type={canShow ? 'text' : 'password'} variant={'filled'} />;
          }}
        </PasswordInput>
      </FormControl>
      <FormControl>
        <FormLabel>Publishable Key</FormLabel>
        <PasswordInput>
          {({ canShow }) => {
            return <Input placeholder="publishable key" type={canShow ? 'text' : 'password'} variant={'filled'} />;
          }}
        </PasswordInput>
      </FormControl>

      <Box mt={4}>
        {/* TODO: add unlock icon from Figma */}
        <Button variant={'red'} type="submit">
          Unlock to Edit
        </Button>
      </Box>
    </Flex>
  );
}
