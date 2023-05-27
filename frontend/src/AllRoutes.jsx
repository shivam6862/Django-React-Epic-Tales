import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AllEpicssPage from "./pages/AllEpicss";
import NewEpicsPage from "./pages/NewEpics";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import EpicPage from "./pages/Epic";

const routes = [
  { path: "/", Component: AllEpicssPage },
  { path: "/new-Epics", Component: NewEpicsPage },
  { path: "/favorites", Component: FavoritesPage },
  { path: "/:pk", Component: EpicPage },
];

const AllRoutes = () => {
  return (
    <Layout>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.Component />}
          ></Route>
        ))}
      </Routes>
    </Layout>
  );
};

export default AllRoutes;
