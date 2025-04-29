import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import ProductLayout from "./component/ProductLayout";
import Footer from "./component/Footer";
import Counter from "./component/Counter";
import "./style.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./component/Error";
import ProductsDetails from "./component/ProductsDetails";
import ImageComponent from "./component/ImageComponent";

const Comment = lazy(() => import("./component/Comment"));

const Body = () => {
  return (
    <>
      <HeroSection />
      <ProductLayout />
      <Comment />
    </>
  );
};

const Applayout = () => {
  return (
    <>
      <Header /> {/* Component Compostion */}
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/products",
        element: <ProductLayout />,
      },
      {
        path: "/products/:product_id",
        element: <ProductsDetails />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/image-component",
        element: <ImageComponent />,
      },
      {
        path: "/comment",
        element: (
          <Suspense fallback={"Loading."}>
            <Comment />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
