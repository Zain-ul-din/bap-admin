import {
  Button,
  Flex,
  FlexProps,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  useMediaQuery,
} from '@chakra-ui/react';
import SaveBtn from '../shared/SaveBtn';

interface EditOrgFormProps extends FlexProps {
  onClose?: () => void;
}

export default function EditOrgForm({ onClose, ...rest }: EditOrgFormProps) {
  const [isMdScreen] = useMediaQuery('(max-width: 600px)');

  return (
    <Flex {...rest} flexDir={'column'} as={'form'}>
      <Grid w={'full'} templateColumns={'repeat(2, 1fr)'} gap={4}>
        <GridItem display={'flex'} flexDir={'column'} gap={4} colSpan={isMdScreen ? 2 : 1}>
          <FormControl>
            <FormLabel fontSize={'sm'}>Organization Name</FormLabel>
            <Input placeholder="Edit Organization" variant={'filled'} size={'sm'} />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={'sm'}>Registration Number</FormLabel>
            <Input placeholder="Edit Registration Number" variant={'filled'} size={'sm'} />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={'sm'}>VAT Number</FormLabel>
            <Input placeholder="Edit VAT Number" variant={'filled'} size={'sm'} />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={'sm'}>Physical Address</FormLabel>
            <Input placeholder="Edit Physical Address" variant={'filled'} size={'sm'} />
          </FormControl>
        </GridItem>
        <GridItem display={'flex'} flexDir={'column'} gap={4} colSpan={isMdScreen ? 2 : 1}>
          <FormControl>
            <FormLabel fontSize={'sm'}>Phone Number</FormLabel>
            <Input placeholder="Edit Phone Number" variant={'filled'} size={'sm'} />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={'sm'}>Email Address</FormLabel>
            <Input placeholder="Edit Email Address" variant={'filled'} size={'sm'} />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={'sm'}>Secondary Phone Number</FormLabel>
            <Input placeholder="Edit Secondary Phone Number" variant={'filled'} size={'sm'} />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={'sm'}>Website</FormLabel>
            <Input placeholder="Edit Website" variant={'filled'} size={'sm'} />
          </FormControl>
        </GridItem>
      </Grid>
      <Flex gap={3} justifyContent={'flex-end'} pt={3}>
        <Button size={'sm'} variant={'gray'} onClick={onClose}>
          Cancel
        </Button>
        <SaveBtn type="submit" size={'sm'} />
      </Flex>
    </Flex>
  );
}
