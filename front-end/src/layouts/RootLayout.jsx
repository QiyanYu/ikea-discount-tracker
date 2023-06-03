import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <Flex height="100vh">
      <Sidebar />
      <Flex direction="column" overflowY="scroll" width="100%" bg="gray.200">
        <Navbar />
        <Outlet />
      </Flex>
    </Flex>
  );
}
