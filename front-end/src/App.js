import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// pages
import Home from "./pages/Home";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({});
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <header>
          <nav>
            <h1>Discount Ikea</h1>
            <NavLink to="/">Home</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
