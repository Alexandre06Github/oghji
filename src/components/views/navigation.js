import Home from "./views/home";
import { createBrowserRouter, RouteProvider } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/room",
      element: <Room/>,
      errorElement: <ErrorPage />,
    },
    {
        path: "/composant",
        element: <Composant/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/composant2",
        element: <Composant2/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/composant2",
        element: <Composant2/>,
        errorElement: <ErrorPage />,
      },
  ]);
