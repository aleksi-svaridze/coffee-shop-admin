import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from "./routes/Routes";

function App() {
  return <RouterProvider router={createBrowserRouter(Routes)} />;
}

export default App;
