import { Box, Button, ButtonProps, Collapse, Flex, Image, useDisclosure, useMediaQuery, useTimeout } from "@chakra-ui/react"
import { ReactNode, useEffect, useState } from "react"
import OrganizationIcon from "../icons/OrganizationIcon"
import { ROUTES, SUB_ROUTES } from "../../lib/constant"
import { IconProps } from "../../types/IconProps"

import AmbulanceIcon from "../icons/AmbulanceIcon"
import FluentPersonIcon from "../icons/FluentPersonIcon"
import SteeringIcon from "../icons/SteeringIcon"
import SettingIcons from "../icons/SettingsIcon"
import CategoryIcon from "../icons/CategoryIcon"
import FluentSupportIcon from "../icons/FluentSupportIcon"
import ChatIcon from "../icons/ChatIcon"
import { ChevronRightIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { useLocation, Link } from "react-router-dom"

export default function DashboardLayout({
  children
}: {
  children?: ReactNode
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
      overflowY={'auto'}
      className={`${(isOpen || !isMdScreen) ? "sticky-sidebar-open" : "sticky-sidebar-close"} ${isMounted && "ease-in-out"}`}
    >
      {(isOpen && isMdScreen) && 
      <Button position={'fixed'} right={2} top={2} colorScheme="red"
        onClick={()=> setIsOpen(false)}
      > <CloseIcon /> </Button>}
      <Sidebar />
    </Flex>
    
    {/* right side content */}
    <Flex flex={1} h={'100%'} flexDir={'column'} bg={'rgba(244, 244, 245, 1)'}
      maxWidth={isMdScreen ? '100%' : 'calc(100% - max(15rem,20%))'}
      overflowY={'auto'}
    >
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

  const { pathname } = useLocation()
  
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
          active={pathname === ROUTES[text]} link={ROUTES[text]} path={text}
        >
          {text}
        </SideBarLink>
      })}
    </Flex>
  </>
}

interface SideBarLinkProps extends ButtonProps {
  active?: boolean,
  path?: keyof typeof ROUTES
  link: string,
  icon?: (props: IconProps)=> ReactNode
}

const SideBarLink = ({
  icon, path, link, active, ...rest
}: SideBarLinkProps)=> {

  const hasSubRoutes = (path || "") in SUB_ROUTES
  const { isOpen, onToggle, onClose } = useDisclosure()

  const { pathname } = useLocation()

  useEffect(()=> {
    if(!active) onClose()
  }, [pathname, onClose, active])

  return <><Link to={link}>
    <Button 
      onClick={onToggle}
      w={'100%'}
      pl={2} 
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
      rightIcon={
        hasSubRoutes ? 
        <ChevronRightIcon 
          position={'absolute'} right={'5px'} top={'30%'} 
          __css={{
            transform: isOpen ? "rotate(90deg)" : undefined,
            transition: "transform 0.3s"
          }}
        /> 
        : <></>
      }
    >
      {icon && icon({active})}
      {rest.children}
    </Button>
  </Link>
  
    {hasSubRoutes && <Collapse in={isOpen} transition={{ enter: { duration: 0.5 } }} animateOpacity>
      <Flex flexDir={'column'} pl={5}>
        {SUB_ROUTES[path as keyof typeof ROUTES]?.map((route, idx)=> {
          return <SideBarLink key={idx} link={route.link}
            active={pathname === route.link}
          >
            {route.name}
          </SideBarLink>
        })} 
      </Flex>
    </Collapse>}
  </>
}
