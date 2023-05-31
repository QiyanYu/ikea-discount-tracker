import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {
  Button,
  CircularProgress,
  Container,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import ProductCard from "../components/ProductCard";

function Home() {
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

  const theme = createTheme({});

  function showMore() {
    setShowingItems((prevItems) => [
      ...prevItems,
      ...data.slice(prevItems.length, prevItems.length + 24),
    ]);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container spacing={3}>
          {showingItems.map((d) => (
            <Grid item xs={12} md={6} lg={4}>
              <ProductCard data={d} />
            </Grid>
          ))}
        </Grid>
        {showingItems.length < data.length && (
          <Button onClick={showMore}>Show More</Button>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default Home;
