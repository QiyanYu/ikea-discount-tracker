import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  List,
  ListItem,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Icon, Link } from "@chakra-ui/react";
import {
  FaGithub,
  FaHome,
  FaUserCircle,
  FaHeart,
  FaTwitter,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <Flex flexDir="column" align="flex-start" width="250px" height="100%">
      <Heading p={5}>IKEA Deals</Heading>
      <Divider />
      <Box p="20px">
        <Link
          as={NavLink}
          to="/"
          color="gray"
          _activeLink={{
            fontWeight: "bold",
            color: "black",
            textDecor: "none",
          }}
          _hover={{ textDecoration: "none" }}
        >
          <HStack ml="20px" fontSize="lg">
            <Icon as={FaHome} />
            <Text ml="5px">Home</Text>
          </HStack>
        </Link>
        <Link
          as={NavLink}
          to="saved"
          color="gray"
          _activeLink={{
            fontWeight: "bold",
            color: "black",
            textDecor: "none",
          }}
          _hover={{ textDecoration: "none" }}
        >
          <HStack ml="20px" mt="10px" fontSize="lg">
            <Icon as={FaHeart} />
            <Text ml="5px">Saved</Text>
          </HStack>
        </Link>
        <Link
          as={NavLink}
          to="profile"
          color="gray"
          _activeLink={{
            fontWeight: "bold",
            color: "black",
            textDecor: "none",
          }}
          _hover={{ textDecoration: "none" }}
        >
          <HStack ml="20px" mt="10px" fontSize="lg">
            <Icon as={FaUserCircle} />
            <Text ml="5px">Profile</Text>
          </HStack>
        </Link>
      </Box>
      <Spacer />
      <Box p="20px">
        <Link
          href="https://github.com/QiyanYu/ikea-discount-tracker"
          isExternal
        >
          <HStack ml="20px" mb="10px" fontSize="lg">
            <Icon as={FaGithub} />
            <Text>GitHub</Text>
          </HStack>
        </Link>
        <Link href="https://twitter.com/Yu08516687" isExternal>
          <HStack ml="20px" mb="60px" fontSize="lg">
            <Icon as={FaTwitter} />
            <Text>Twitter</Text>
          </HStack>
        </Link>
      </Box>
    </Flex>
  );
}
