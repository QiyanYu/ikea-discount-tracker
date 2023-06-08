import {
  Box,
  Button,
  Center,
  CircularProgress,
  SimpleGrid,
  TabList,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryTab from "../components/CategoryTab";

export default function Home() {
  const [data, setData] = useState([]);
  const [showingItems, setShowingItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const pageSize = 24;

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setShowingItems(data.slice(0, pageSize));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (error) return <h1>{error}</h1>;

  function showMore() {
    setShowingItems((prevItems) => [
      ...prevItems,
      ...data.slice(prevItems.length, prevItems.length + pageSize),
    ]);
  }

  return (
    <Box p="40px">
      <CategoryTab data={data} />
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
    </Box>
  );
}
