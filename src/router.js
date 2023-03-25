import Home from "./components/views/home";
import { createBrowserRouter
} from "react-router-dom";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  // {
  //   path: "/room",
  //   element: <Room />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/composant",
  //   element: <Composant />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/composant2",
  //   element: <Composant2 />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/composant2",
  //   element: <Composant2 />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/calendrier",
  //   element: <Calendrier />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/domotique",
  //   element: <Domotique />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/tarifHeureCreuPlei",
  //   element: <TarifHeureCreuPlei />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/conso",
  //   element: <Conso />,
  //   errorElement: <ErrorPage />,
  // },

]);
