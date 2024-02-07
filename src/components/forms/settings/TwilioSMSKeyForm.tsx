import { Box, Flex, FlexProps, FormControl, FormLabel, Input } from '@chakra-ui/react';
import PasswordInput from '../shared/PasswordInput';
import SaveBtn from '../shared/SaveBtn';

export default function TwilioSMSKeyForm({ ...rest }: FlexProps) {
  return (
    <Flex as={'form'} flexDir={'column'} gap={4} {...rest}>
      <FormControl>
        <FormLabel>API Key</FormLabel>
        <PasswordInput>
          {({ canShow }) => {
            return <Input placeholder="Add API key" type={canShow ? 'text' : 'password'} variant={'filled'} />;
          }}
        </PasswordInput>
      </FormControl>
      <Box>
        <SaveBtn type="submit" />
      </Box>
    </Flex>
  );
}
