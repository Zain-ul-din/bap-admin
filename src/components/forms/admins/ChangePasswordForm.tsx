import { Button, Flex, FlexProps, FormControl, FormLabel, Input } from '@chakra-ui/react';
import PasswordInput from '../shared/PasswordInput';

interface ChangePasswordFormProps extends FlexProps {
  onClose: () => void;
}

export default function ChangePasswordForm({ onClose, ...rest }: ChangePasswordFormProps) {
  return (
    <Flex gap={4} {...rest} flexDir={'column'}>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <PasswordInput>
          {({ canShow }) => {
            return <Input type={canShow ? 'text' : 'password'} variant={'filled'} placeholder="Enter new password" />;
          }}
        </PasswordInput>
      </FormControl>
      <FormControl>
        <FormLabel>Confirm Password</FormLabel>
        <PasswordInput>
          {({ canShow }) => {
            return <Input type={canShow ? 'text' : 'password'} variant={'filled'} placeholder="Confirm password" />;
          }}
        </PasswordInput>
      </FormControl>
      <Flex justifyContent={'flex-end'} gap={4}>
        <Button variant={'gray'} onClick={onClose}>
          Cancel
        </Button>
        <Button variant={'red'} type="submit">
          Change Password
        </Button>
      </Flex>
    </Flex>
  );
}
