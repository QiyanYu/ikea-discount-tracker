import {
  Box,
  CardBody,
  CircularProgress,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

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

  if (loading) return <CircularProgress />;
  if (error) return <h1>{error}</h1>;

  function showMore() {
    setShowingItems((prevItems) => [
      ...prevItems,
      ...data.slice(prevItems.length, prevItems.length + pageSize),
    ]);
  }

  return (
    <Box>
      <SimpleGrid p={10} columns={3} spacing={5} minChildWidth={250}>
        {showingItems.map((d) => (
          <ProductCard data={d}></ProductCard>
        ))}
        {/* <ProductCard data={showingItems[0]} /> */}
      </SimpleGrid>
    </Box>
  );
}
