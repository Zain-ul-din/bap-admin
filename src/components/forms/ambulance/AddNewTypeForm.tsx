import {
  Box,
  Flex,
  FlexProps,
  Text,
  FormControl,
  FormLabel,
  GridItemProps,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { useCallback, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import useWindowResize from '../../../hooks/useWindowResize';
import SaveBtn from '../shared/SaveBtn';

export default function AddNewTypeForm({ ...rest }: FlexProps) {
  const onDrop = (acceptedFiles: File[]) => {
    setSelectedLogo(acceptedFiles[0].name);
  };

  const [selectedLogo, setSelectedLogo] = useState<string | null>(null);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const containerRef = useRef<HTMLDivElement>(null);

  const [responsiveStyleProps, setResponsiveStyleProps] = useState<{
    flexDir: FlexProps['flexDir'];
    colSpan: GridItemProps['colSpan'];
  }>({
    flexDir: 'row',
    colSpan: 1,
  });

  const handleResize = useCallback(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    setResponsiveStyleProps({
      flexDir: containerWidth <= 800 ? 'column' : 'row',
      colSpan: containerWidth <= 500 ? 2 : 1,
    });
  }, []);
  useWindowResize(handleResize, []);

  return (
    <>
      <Flex w={'full'} flexDir={'column'} gap={4} {...rest} as={'form'} ref={containerRef}>
        <Flex w={'full'} gap={3} flexWrap={'wrap'} flexDir={responsiveStyleProps.flexDir}>
          <Flex
            minW={'40%'}
            justifyContent={'center'}
            alignItems={'center'}
            py={16}
            rounded={'lg'}
            border={`2px dashed ${isDragActive ? 'blue' : 'var(--black-color)'}`}
            bg={isDragActive ? 'gray.100' : 'gray.50'}
            cursor={'pointer'}
            {...getRootProps()}
          >
            <input {...getInputProps()} />

            {selectedLogo ? (
              <Text>{selectedLogo}</Text>
            ) : (
              <Stack textAlign={'center'}>
                <Text>Drag transparent logo here</Text>
                <Text>OR</Text>
                <Text color={'blue.500'}>Browse Logo</Text>
              </Stack>
            )}
          </Flex>
          <Flex flex={1} flexWrap={'wrap'} p={3} gap={2}>
            <FormControl>
              <FormLabel fontSize={'sm'}>Ambulance Type</FormLabel>
              <Input placeholder="Enter ambulance type" fontSize={'sm'} variant={'filled'} />
            </FormControl>
            <FormControl mt={'auto'}>
              <FormLabel fontSize={'sm'}>Features</FormLabel>
              <InputGroup>
                <InputRightElement right={'10px'}>
                  <Button variant={'outline'} size={'xs'}>
                    Add
                  </Button>
                </InputRightElement>
                <Input placeholder="Write feature here" fontSize={'sm'} variant={'filled'} />
              </InputGroup>
            </FormControl>
          </Flex>
        </Flex>
        <Box ml={1}>
          <SaveBtn type="submit" />
        </Box>
      </Flex>
    </>
  );
}
