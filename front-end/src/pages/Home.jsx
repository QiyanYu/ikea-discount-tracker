import {
  Box,
  Button,
  Center,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryTab from "../components/CategoryTab";
import { AppContext } from "../App";

export default function Home() {
  const { data } = useContext(AppContext);
  console.log("Data in Home:", data); // Verify the data

  // // const [data, setData] = useState([]);
  // const [showingItems, setShowingItems] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState("All");
  // const [filteredItems, setFilteredItems] = useState(data);
  // const pageSize = 24;

  // useEffect(() => {
  //   fetch("http://localhost:8000/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setShowingItems(data.slice(0, pageSize));
  //       setCategories([...new Set(data.map((item) => item.category))]);
  //     });
  // }, []);

  // function showMore() {
  //   setShowingItems((prevItems) => [
  //     ...prevItems,
  //     ...data.slice(prevItems.length, prevItems.length + pageSize),
  //   ]);
  // }

  return (
    <Box p="40px">
      {/* <CategoryTab categories={categories} />
      <Tabs variant="soft-rounded" colorScheme="gray" size="sm" isFitted>
        <TabList>
          <Tab>All</Tab>
          {categories.map((c) => (
            <Tab key={c}>{c}</Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={{ md: 2, lg: 3, xl: 4 }} gap="40px">
              {showingItems.map((d) => (
                <ProductCard data={d} key={d.id}></ProductCard>
              ))}
            </SimpleGrid>
            {showingItems.length < data.length && (
              <Center my="20px">
                <Button onClick={showMore}>Show More</Button>
              </Center>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs> */}
    </Box>
  );
}
