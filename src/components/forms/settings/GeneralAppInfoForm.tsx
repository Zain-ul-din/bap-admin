import { Box, Flex, FormControl, FormLabel, Grid, GridItem, Input, Text, Stack, GridItemProps } from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { useCallback, useRef, useState } from 'react';
import { FlexProps } from '@chakra-ui/react';
import useWindowResize from '../../../hooks/useWindowResize';
import SaveBtn from './components/SaveBtn';

export default function GeneralAppInfoForm({ ...rest }: FlexProps) {
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
            minW={'35%'}
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
                <Text>Drag & Drop</Text>
                <Text>OR</Text>
                <Text color={'blue.500'}>Browse Logo</Text>
              </Stack>
            )}
          </Flex>
          <Flex flex={1} flexWrap={'wrap'} p={3} gap={2}>
            <Grid templateColumns={'repeat(2, 1fr)'} w={'100%'} gap={2}>
              <GridItem
                colSpan={responsiveStyleProps.colSpan}
                display={'flex'}
                flexDir={'column'}
                justifyContent={'space-between'}
                gap={3}
              >
                <FormControl>
                  <FormLabel>Long App Name</FormLabel>
                  <Input placeholder="App Name" variant={'filled'} />
                </FormControl>
                <FormControl>
                  <FormLabel>Contact Number</FormLabel>
                  <Input placeholder="Contact Number" variant={'filled'} />
                </FormControl>
              </GridItem>

              <GridItem
                colSpan={responsiveStyleProps.colSpan}
                display={'flex'}
                flexDir={'column'}
                justifyContent={'space-between'}
                gap={3}
              >
                <FormControl>
                  <FormLabel>Short App Name</FormLabel>
                  <Input placeholder="Short Name" variant={'filled'} />
                </FormControl>
                <FormControl>
                  <FormLabel>Email Address</FormLabel>
                  <Input placeholder="Email" variant={'filled'} />
                </FormControl>
              </GridItem>
            </Grid>
          </Flex>
        </Flex>
        <Box>
          <SaveBtn type="submit" />
        </Box>
      </Flex>
    </>
  );
}
