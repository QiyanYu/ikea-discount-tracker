import { Box, Heading, Text, Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

export default function NotFound() {
  return (
    <Box p="40px">
      <Heading>Page not Found</Heading>
      <Text mt="20px">
        Go to the {""}
        <Link as={ReactLink} to="/" textDecor="underline">
          Home Page
        </Link>
      </Text>
    </Box>
  );
}
