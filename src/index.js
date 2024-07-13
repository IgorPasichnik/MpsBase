import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Paths } from "./paths";
import { ProductsPage } from "./pages/productsPage/ProductsPage";
import { ProductionsPage } from "./pages/productionsPage/ProductionsPage";
import { AboutCompanyPage } from "./pages/aboutCompanyPage/AboutCompanyPage";
import { store } from "./app/store";
import "./index.css";

const router = createBrowserRouter([
  {
    path: Paths.aboutCompany,
    element: <AboutCompanyPage />,
  },
  {
    path: Paths.products,
    element: <ProductsPage />,
  },
  {
    path: Paths.productions,
    element: <ProductionsPage />,
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
