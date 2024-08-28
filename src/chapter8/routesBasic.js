import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {element} from "prop-types";
import TopPage from "./TopPage";
import AboutPage from "./AboutPage";
import ArticlePage from "./ArticlePage";

const routesBasic = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<TopPage />} />
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
        </>
    )
);

export default routesBasic;