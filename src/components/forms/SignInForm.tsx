import { Button, Flex, FormControl, FormLabel, Input, Radio } 
  from "@chakra-ui/react";

export default function SignInForm() {
  return <Flex as={'form'} flexDirection={'column'}
    gap={3} w={'100%'}
  >
    <FormControl color={'white'}>
      <FormLabel fontWeight={'light'} 
      >Username</FormLabel>
      <Input type='email' placeholder="Username" variant={'outline'}
        outline={'none'} 
        size={'md'}
      />
    </FormControl>
    <FormControl color={'white'}>
      <FormLabel fontWeight={'light'}>Password</FormLabel>
      <Input type='password' placeholder="Password" variant={'outline'}
        size={'md'}
      />
    </FormControl>

    <FormControl color={'white'} display={'flex'} alignItems={'center'} fontWeight={'light'}>
      <Radio mr={2} colorScheme="white" /> Remember me?
    </FormControl>

    <Button color={'red.800'} mt={2} py={1} size={'md'}
      type="submit" fontWeight={'normal'}
    >
      Sign in
    </Button>
  </Flex>
}

