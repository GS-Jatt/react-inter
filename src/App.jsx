import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./pages/home";
import SearchResults from "./features/search/SearchResult";
import Details from "./pages/Details";
import Login from "./pages/Login";
import SuccesPage from "./pages/SuccesPage";

function App() {
  const routes = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          children: [
            {
              path: ":search",
              element: <SearchResults />,
            },
          ],
        },
        {
          path: "/details/:id",
          element: <Details />,
        },
        {
          path: "/succes",
          element: <SuccesPage />,
        },
      ],
    },
    { path: "/login", element: <Login /> },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
