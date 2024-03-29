import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import BookMark from "./pages/bookmark";
import Movies from "./pages/movies";
import TvSeries from "./pages/tv-series";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error/>,
        element: <Home/>
    },
    {
        path: "/bookmark",
        errorElement: <Error/>,
        element: <BookMark/>
    },
    {
        path: "/movies",
        errorElement: <Error/>,
        element: <Movies/>
    },
    {
        path: "/tv-series",
        errorElement: <Error/>,
        element: <TvSeries/>
    },
])