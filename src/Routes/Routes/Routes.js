import { createBrowserRouter } from "react-router-dom";
import Error from "../../Error/Error";
import Main from "../../Layout/Main";
import Categories from "../../Pages/Categories/Categories";
import Home from "../../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
    ],
  },
]);

export default router;
