import { Box, Button, ButtonProps, Flex, Heading, Image, Stack, Text, useMediaQuery, useTimeout } from "@chakra-ui/react"
import { ReactNode, useState } from "react"
import OrganizationIcon from "../icons/OrganizationIcon"
import { ROUTES } from "../../lib/constant"
import { IconProps } from "../../types/IconProps"

import AmbulanceIcon from "../icons/AmbulanceIcon"
import FluentPersonIcon from "../icons/FluentPersonIcon"
import SteeringIcon from "../icons/SteeringIcon"
import SettingIcons from "../icons/SettingsIcon"
import CategoryIcon from "../icons/CategoryIcon"
import FluentSupportIcon from "../icons/FluentSupportIcon"
import ChatIcon from "../icons/ChatIcon"
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"

export default function DashboardLayout({
  children
}: {
  children: ReactNode
}) {
  
  const [isMdScreen] = useMediaQuery("(max-width: 850px)")
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useTimeout(()=> setIsMounted(true), 1000)
  
  return <Flex w={'100%'} h={'100%'}>
    {/* side bar */}
    <Flex minW={isMdScreen ? '100%' : 'max(15rem,20%)'} h={'100%'} flexDir={'column'}
      alignItems={'center'} gap={'max(2rem, 5%)'} 
      position={isMdScreen ? 'fixed': 'initial'}
      bg={'white'} zIndex={99}
      className={`${(isOpen || !isMdScreen) ? "sticky-sidebar-open" : "sticky-sidebar-close"} ${isMounted && "ease-in-out"}`}
    >
      {(isOpen && isMdScreen) && 
      <Button position={'fixed'} right={2} top={2} colorScheme="red"
        onClick={()=> setIsOpen(false)}
      > <CloseIcon /> </Button>}
      <Sidebar />
    </Flex>
    
    {/* content */}
    <Flex flex={1} h={'100%'} flexDir={'column'} bg={'rgba(244, 244, 245, 1)'}>
      {/* top header */}
      <Flex w={'100%'} p={'1rem'} py={2}>
        {isMdScreen&& <Button colorScheme="red" onClick={()=> setIsOpen(true)}>
          <HamburgerIcon />
        </Button>}
        <Button colorScheme="blue" p={0} px={2} ml={'auto'} fontWeight={'normal'}
          fontSize={'sm'}
        >
          <ChatIcon style={{
            marginRight: '4px'
          }}/>
          Support Chat
        </Button>
      </Flex>
      
      <Flex w={'100%'} p={'1rem'} py={2} bg={'var(--black-color)'} color={'white'}>
        <Stack spacing={0}>
          <Heading fontSize={'lg'}  fontWeight={'bold'}>
            Dashboard
          </Heading>
          <Text fontSize={'sm'} fontWeight={'normal'}>
            Hey there welcome to dashboard
          </Text>
        </Stack>
      </Flex>
      {children}
    </Flex>
  </Flex>
}

const dashboardLinks: {
  text: keyof typeof ROUTES,
  Icon: React.ElementType<IconProps>
}[] = [
  {  text: 'Dashboard', Icon: CategoryIcon },
  {  text: 'Organization', Icon: OrganizationIcon },
  {  text: 'Ambulance', Icon: AmbulanceIcon },
  {  text: 'Users', Icon: FluentPersonIcon },
  {  text: 'Booking', Icon: SteeringIcon },
  {  text: 'Settings', Icon: SettingIcons },
  {  text: 'Emergency contact', Icon: FluentSupportIcon }
]

const Sidebar = ()=> {
  return <>
    <Box p={'max(2rem,12%)'} w={'100%'} justifyContent={'center'}>
      <Image 
        src="/images/bap-logo-red.png"
        alt="bap-logo"
        maxW={'197px'}
        maxH={'68px'}
      />
    </Box>

    <Flex w={'100%'} flexDir={'column'} px={'max(1.2rem, 8%)'} gap={2}>
      {dashboardLinks.map(({
        Icon, text
      }, i)=> {
        return <SideBarLink key={i} icon={(props)=> <Icon style={{ marginRight: '0.6rem' }} {...props}/>}
          active={i==0}
        >
          {text}
        </SideBarLink>
      })}
    </Flex>
  </>
}

interface SideBarLinkProps extends ButtonProps {
  active?: boolean
  icon: (props: IconProps)=> ReactNode
}

const SideBarLink = ({
  icon, active, ...rest
}: SideBarLinkProps)=> {
  return <Button pl={2} 
    colorScheme="red" 
    justifyContent={'flex-start'}
    fontWeight={'normal'} 
    bg={active ? 'var(--red-grad)' : 'transparent'} 
    color={active ? 'white' : "#8A92A6"}
    _active={{
      bg: ''
    }}
    _hover={{
      bg: '', opacity: 0.9
    }} {...rest}
  >
    {icon({
      active
    })}
    {rest.children}
  </Button>
}


