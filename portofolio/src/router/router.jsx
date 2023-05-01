import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import PortFolio from "../views/Portfolio";
import About from "../views/About";
import Detail from "../views/detail";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: '/portfolio',
      element: <PortFolio />
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/detail/:id',
      element: <Detail />
    }
]);

export default router;
