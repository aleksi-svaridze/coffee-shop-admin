import SidabarLayout from "../layout/SidebarLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import AddNewCoffee from "../pages/addNewCoffee/AddNewCoffee";
import Ingredients from "../pages/ingredients/Ingredients";
import NotFound from "../pages/notFound/NotFound";
import SingleItem from "../pages/singleItem/SingleItem";

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
        element: <SingleItem />,
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
