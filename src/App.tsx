import { lazy } from "react";
import "./scss/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const BaseLayout = lazy(() => import("./layout/BaseLayout"));
const Main = lazy(() => import("./pages/Main"));
const MovieDetail = lazy(() => import("./pages/MovieDetail"));
const SearchResult = lazy(() => import("./pages/SearchResult"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/detail/:id",
          element: <MovieDetail />,
        },
        {
          path: "/search/:title",
          element: <SearchResult />,
        },
      ],
    },
  ]);
}
export default App;
