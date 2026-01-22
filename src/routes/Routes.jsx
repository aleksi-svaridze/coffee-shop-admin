import SidabarLayout from "../layout/SidebarLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import SingleCoffee from "../pages/singleCoffee/SingleCoffee";
import AddNewCoffee from "../pages/addNewCoffee/AddNewCoffee";
import Ingredients from "../pages/ingredients/Ingredients";
import NotFound from "../pages/notFound/NotFound";

export const Routes = [
  {
    element: <SidabarLayout />,
    path: "/",

    children: [
      {
        element: <Dashboard />,
        index: true,
      },
      {
        element: <SingleCoffee />,
        path: "coffee/:id",
      },
      {
        element: <AddNewCoffee />,
        path: "add-coffee",
      },
      {
        element: <Ingredients />,
        path: "add-ingredients",
      },
      {
        element: <NotFound />,
        path: "*",
      },
    ],
  },
];
