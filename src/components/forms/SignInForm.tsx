import { Button, Checkbox, Flex, FormControl, FormLabel, Input } 
  from "@chakra-ui/react";

export default function SignInForm() {
  return <Flex as={'form'} flexDirection={'column'}
    gap={3} w={'100%'} onSubmit={(e)=>{
      e.preventDefault()
      // TODOS: handle form data here
      console.log(Object.fromEntries(new FormData(e.target as HTMLFormElement).entries()))
    }}
  >
    <FormControl color={'white'}>
      <FormLabel fontWeight={'light'} 
      >Username</FormLabel>
      <Input 
        name="username"
        type='email' placeholder="Username" variant={'outline'}
        outline={'none'} 
        size={'md'}
        required
      />
    </FormControl>
    <FormControl color={'white'}>
      <FormLabel fontWeight={'light'}>Password</FormLabel>
      <Input 
        name="password"
        type='password' placeholder="Password" variant={'outline'}
        size={'md'}
        required
      />
    </FormControl>

    <FormControl color={'white'} display={'flex'} alignItems={'center'} fontWeight={'light'}>
      <Checkbox mr={2} colorScheme="white" name="rememberMe" /> Remember me?
    </FormControl>

    <Button color={'red.800'} mt={2} py={1} size={'md'}
      type="submit" fontWeight={'normal'}
    >
      Sign in
    </Button>
  </Flex>
}
