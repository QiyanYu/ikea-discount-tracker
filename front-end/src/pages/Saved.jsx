import { Box, Button, Text } from "@chakra-ui/react";

export default function Saved() {
  return (
    <Box
      w="100%"
      h="200px"
      bgGradient={[
        "linear(to-tr, teal.300, yellow.400)",
        "linear(to-t, blue.200, teal.500)",
        "linear(to-b, orange.100, purple.300)",
      ]}
    />
  );
}
