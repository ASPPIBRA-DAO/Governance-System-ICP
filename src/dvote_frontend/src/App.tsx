import React from "react";
import Vote from "./Vote";
import { createHashRouter, HashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Header from "./Header";
import Explore from "./Explore";
import Mine from "./Mine";
import About from "./About";
import Tokenomics from "./Tokenomics";
import Create from "./Create";

const router = createHashRouter([
  {
    path: "/",
    element: <Explore />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/mine",
    element: <Mine />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/tokenomics",
    element: <Tokenomics />,
  },
  {
    path: "/vote/:hash",
    element: <Vote />,
  },
]);

export default function App() {
  return (
    <React.StrictMode>
      <HashRouter>
        <Header />
      </HashRouter>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
