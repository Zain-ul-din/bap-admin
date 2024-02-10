import { Flex, FlexProps, Text, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function UploadManufacturerCSVForm({ ...rest }: FlexProps) {
  const onDrop = (acceptedFiles: File[]) => {
    setSelectedFile(acceptedFiles[0].name);
  };

  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Flex as={'form'} px={5} flexDir={'column'} {...rest}>
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

        {selectedFile ? (
          <Text>{selectedFile}</Text>
        ) : (
          <Stack textAlign={'center'}>
            <Text>Drag transparent logo here</Text>
            <Text>OR</Text>
            <Text color={'blue.500'}>Browse Logo</Text>
          </Stack>
        )}
      </Flex>
    </Flex>
  );
}
