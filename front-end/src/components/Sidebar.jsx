import {
  Button,
  Divider,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { FaHome, FaTwitter, FaGithub } from "react-icons/fa";

export default function Sidebar() {
  return (
    <Flex flexDir="column" align="flex-start" width="250px" height="100%">
      <Heading p={4}>IKEA Discount</Heading>
      <Divider />
      <Spacer />
      <VStack p={5}>
        <List p={5}>
          <Text>a</Text>
          <Text>b</Text>
          <Text>c</Text>
        </List>
      </VStack>
    </Flex>
    // <List>
    //   <ListItem>
    //     <NavLink to="/">
    //       <ListIcon as={CalendarIcon} />
    //       <Text>Dashboard</Text>
    //     </NavLink>
    //   </ListItem>
    //   <ListItem>
    //     {/* <NavLink to="create">
    //       <ListIcon as={EditIcon} />
    //       New Task
    //     </NavLink> */}
    //   </ListItem>
    // </List>
  );
}
