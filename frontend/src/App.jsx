import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Semester from "./components/Semester";
import Subject from "./components/Subject";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/semester",
      element: <Home />,
    },
    {
      path: "/*",
      element: <NotFound/>,
    },
    {
      path: "/projects",
      element: <NotFound/>,
    },
    {
      path: "/login",
      element: <NotFound/>,
    },

    {
      path: "/semester/:id",
      element: <Semester />,
      children: [
        {
          path: "subject/:id?",
          element: <Subject />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;