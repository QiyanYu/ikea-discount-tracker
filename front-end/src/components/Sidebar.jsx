import {
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
      <List pl="40px" py="10px">
        <ListItem m="10px">
          <NavLink to="/">
            <HStack>
              <Icon as={FaHome} />
              <Text>Home</Text>
            </HStack>
          </NavLink>
        </ListItem>
        <ListItem m="10px">
          <NavLink to="saved">
            <HStack>
              <Icon as={FaHeart} />
              <Text>Saved</Text>
            </HStack>
          </NavLink>
        </ListItem>
        <ListItem m="10px">
          <NavLink to="profile">
            <HStack>
              <Icon as={FaUserCircle} />
              <Text>Profile</Text>
            </HStack>
          </NavLink>
        </ListItem>
      </List>
      <Spacer />
      <List p="40px" mb="20px">
        <ListItem m="10px">
          <Link
            href="https://github.com/QiyanYu/ikea-discount-tracker"
            isExternal
          >
            <HStack>
              <Icon as={FaGithub} />
              <Text>GitHub</Text>
            </HStack>
          </Link>
        </ListItem>
        <ListItem m="10px">
          <Link href="https://twitter.com/Yu08516687" isExternal>
            <HStack>
              <Icon as={FaTwitter} />
              <Text>Twitter</Text>
            </HStack>
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
