import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Stack,
  Link,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'


const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(02px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={1}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
        
      >
        <Flex align="center" mr={3}>
          <Heading as="h1" size="lg" letterSpacing={'4'}>
            <Logo />
            
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Certifications 
          </LinkItem>
          {/* <LinkItem href="http://stardust1031.s3-website-us-east-1.amazonaws.com" target="_blank">
            CV 
          </LinkItem> */}

          
          <LinkItem
            target="_blank"
            href="https://github.com/humancodex"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Profile
          </LinkItem>
        </Stack>

        <Box flex={1} mt={2} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Certifications</MenuItem>
                </NextLink>
                {/* <NextLink href="http://stardust1031.s3-website-us-east-1.amazonaws.com" target="_blank" passHref>
                  <MenuItem as={Link}>CV</MenuItem>
                </NextLink> */}
                <MenuItem
                  as={Link}
                  href="https://github.com/tech-tinker/SCORPION_DEV"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
