import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Deals from "./pages/Deals/Deals";
import Login from "./pages/Login";
import Error from "./components/Error";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Deals />} errorElement={<Error />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
