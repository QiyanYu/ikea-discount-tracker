import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { createContext, useEffect, useState } from "react";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="saved" element={<Saved />} />
      <Route path="profile" element={<Profile />} />

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

export const AppContext = createContext();

function App() {
  const [data, setData] = useState([]);

  // Fetch data
  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error); // Handle any fetch errors
      });
  }, []);

  useEffect(() => {
    console.log("Data in App:", data); // Verify the data state in the App component
  }, [data]);

  return;
  // <RouterProvider router={router} />
  <AppContext.Provider value={data}>
    <RouterProvider router={router}>
      <Home /> {/* Home consumes context */}
    </RouterProvider>
  </AppContext.Provider>;
}

export default App;
