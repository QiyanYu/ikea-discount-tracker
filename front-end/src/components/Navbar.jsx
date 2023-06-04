import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import SearchInput from "./SearchInput";

export default function Navbar() {
  return (
    <Flex
      as="nav"
      minWidth="max-content"
      p="10px"
      m="10px"
      alignItems="center"
      bg="rgba(0, 0, 0, 0)"
      backdropFilter="blur(10px)"
      pos="sticky"
      top={0}
      zIndex={1}
      borderRadius="30px"
    >
      <Heading as="h1" pl={5} fontSize="2xl">
        IKEA Deals
      </Heading>
      <Spacer />

      {/* <Box bg="gray.200" p="10px">
          M
        </Box> */}
      {/* <Text>mario@nenninja.dev</Text> */}
      <Box bg="white" p="10px" borderRadius="full">
        <HStack spacing="20px" p="5px">
          {/* <SearchInput /> */}

          <Avatar size="sm" />
        </HStack>
      </Box>
    </Flex>
  );
}
