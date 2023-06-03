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
    // <Grid templateColumns="repeat(5, 1fr)" bg="gray.50">
    //   <GridItem as="aside" colSpan={1} height="100vh" p={30} bg="gray.300">
    //     <Sidebar />
    //   </GridItem>

    //   <GridItem as="main" colSpan={4}>
    //     <Navbar />
    //     <Outlet />
    //   </GridItem>
    // </Grid>
  );
}
