import {createBrowserRouter} from "react-router-dom";
import {element} from "prop-types";
import TopPage from "./TopPage";
import AboutPage from "./AboutPage";
import ArticlePage from "./ArticlePage";

const routesBasic = createBrowserRouter([
    { path: '/', element: <TopPage /> },
    { path: '/article', element: <ArticlePage /> },
    { path: '/about', element: <AboutPage /> },
]);

export default routesBasic;