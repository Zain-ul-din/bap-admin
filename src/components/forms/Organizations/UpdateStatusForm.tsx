import { Button, Flex, FlexProps, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';

interface UpdateStatusFormProps extends FlexProps {
  onCancel: () => void;
}

export default function UpdateStatusForm({ onCancel, ...rest }: UpdateStatusFormProps) {
  return (
    <Flex flexDir={'column'} {...rest} as={'form'}>
      <FormControl>
        <FormLabel>Organization Name</FormLabel>
        <Input placeholder="update Organization name" variant={'filled'} />
      </FormControl>
      <FormControl>
        <FormLabel>Approved Status</FormLabel>
        <Select placeholder="Select option">
          <option value="verified">Verified</option>
          <option value="not verified">Not Verified</option>
        </Select>
      </FormControl>

      <Flex mt={3} justifyContent={'space-between'} alignItems={'center'} gap={4}>
        <Button flex={1} onClick={onCancel} variant={'gray'}>
          Cancel
        </Button>
        <Button flex={1} variant={'red'} type={'submit'}>
          Update
        </Button>
      </Flex>
    </Flex>
  );
}
