import {
  Button,
  Text,
  Flex,
  FlexProps,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  useMediaQuery,
} from '@chakra-ui/react';
import PasswordInput from '../shared/PasswordInput';
import SaveBtn from '../shared/SaveBtn';
import UploadIcon from '../../icons/UploadIcon';
import { colors } from '../../../lib/theme';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';

interface AddNewAdminFormProps extends FlexProps {
  onClose: () => void;
}

const allowedFileFormats = ['image/jpeg', 'image/jpg', 'image/png'];

export default function AddNewAdminForm({ onClose, ...rest }: AddNewAdminFormProps) {
  const [isMdScreen] = useMediaQuery('(max-width: 600px)');

  const onDrop = (acceptedFiles: File[]) => {
    if (allowedFileFormats.includes(acceptedFiles[0].type)) {
      setSelectedLogo(acceptedFiles[0].name);
    }
  };

  const [selectedLogo, setSelectedLogo] = useState<string | null>(null);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
  });

  return (
    <Flex flexDir={'column'} as={'form'} gap={4} {...rest}>
      <Grid gridTemplateColumns={`repeat(${isMdScreen ? 1 : 2}, 1fr)`} gap={4}>
        <GridItem>
          <FormControl>
            <FormLabel fontSize={'sm'} fontWeight={'semibold'}>
              Name
            </FormLabel>
            <Input placeholder="Enter admin name" fontSize={'sm'} variant={'filled'} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <FormLabel fontSize={'sm'} fontWeight={'semibold'}>
              Email
            </FormLabel>
            <Input placeholder="Enter admin email" fontSize={'sm'} variant={'filled'} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <FormLabel fontSize={'sm'} fontWeight={'semibold'}>
              User Name
            </FormLabel>
            <Input placeholder="Enter username" fontSize={'sm'} variant={'filled'} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <FormLabel fontSize={'sm'} fontWeight={'semibold'}>
              User Name
            </FormLabel>
            <Input placeholder="Enter username" fontSize={'sm'} variant={'filled'} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <FormLabel fontSize={'sm'} fontWeight={'semibold'}>
              Password
            </FormLabel>
            <PasswordInput>
              {({ canShow }) => (
                <Input
                  placeholder="Enter password"
                  type={canShow ? 'text' : 'password'}
                  fontSize={'sm'}
                  variant={'filled'}
                />
              )}
            </PasswordInput>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <FormLabel fontSize={'sm'} fontWeight={'semibold'}>
              Confirm Password
            </FormLabel>
            <PasswordInput>
              {({ canShow }) => (
                <Input
                  placeholder="confirm password"
                  type={canShow ? 'text' : 'password'}
                  fontSize={'sm'}
                  variant={'filled'}
                />
              )}
            </PasswordInput>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <FormLabel>Profile Image</FormLabel>
            <Flex flexDir={'column'} justifyContent={'center'} gap={2} alignItems={selectedLogo ? 'center' : 'initial'}>
              <Flex
                rounded={'full'}
                minW={'100px'}
                minH={'100px'}
                maxH={'100px'}
                maxW={'100px'}
                bg={'rgba(238, 238, 238, 1)'}
                mt={3}
                opacity={isDragActive ? 0.8 : 1}
                border={isDragActive ? `1px dashed ${colors.blue[500]}` : 'none'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDir={'column'}
                p={2}
                cursor={'pointer'}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <UploadIcon color={colors.blue[500]} />
                <Text fontSize={'xs'}>Upload Image</Text>
              </Flex>
              {selectedLogo ? (
                <Text fontSize={'xs'}>{selectedLogo}</Text>
              ) : (
                <Text fontSize={'xs'}>allowed image format: jpg,jpeg,png</Text>
              )}
            </Flex>
          </FormControl>
        </GridItem>
      </Grid>

      <Flex>
        <HStack ml={'auto'}>
          <Button variant={'gray'} onClick={onClose}>
            Cancel
          </Button>
          <SaveBtn type="submit" />
        </HStack>
      </Flex>
    </Flex>
  );
}
