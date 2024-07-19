import React from "react";
import ReactDOM from "react-dom/client";
import myAxios from "./services/myAxios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/Home/HomePage";
import CategoriesPage from "./pages/Categories/CategoriesPage";
import FantasyPage from "./pages/FantasyPage/FantasyPage";
import Details from "./components/Details/Details";
import GlobalPage from "./pages/GlobalPage/GlobalPage";
import DramaPage from "./pages/DramaPage/DramaPage";
import RomancePage from "./pages/RomancePage/RomancePage";
import SportPage from "./pages/SportPage/SportPage";
import ComedyPage from "./pages/ComedyPage/ComedyPage";
import IsekaiPage from "./pages/IsekaiPage/IsekaiPage";
import SciFiPage from "./pages/SciFiPage/SciFiPage";
import SliceOfLifePage from "./pages/SliceOfLifePage/SliceOfLifePage";
import MoviePage from "./pages/MoviePage/MoviePage";

const router = createBrowserRouter([
  {
    path: "/categories",
    element: <CategoriesPage />,
    loader: async () => {
      try {
        const response = await myAxios.get("api/all-categorie");
        return response.data;
      } catch (error) {
        console.error("Error fetching categories data:", error);
        return { error: "Failed to fetch categories data" };
      }
    },
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/categories/fantasy",
    element: <FantasyPage />,
  },
  {
    path: "/categories/global",
    element: <GlobalPage />,
  },
  {
    path: "/categories/drama",
    element: <DramaPage />,
  },
  {
    path: "/categories/romance",
    element: <RomancePage />,
  },
  {
    path: "/categories/sport",
    element: <SportPage />,
  },
  {
    path: "/categories/comedy",
    element: <ComedyPage />,
  },
  {
    path: "/categories/isekai",
    element: <IsekaiPage />,
  },
  {
    path: "/categories/sci-fi",
    element: <SciFiPage />,
  },
  {
    path: "/categories/slice-of-life",
    element: <SliceOfLifePage />,
  },
  {
    path: "/categories/film",
    element: <MoviePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
