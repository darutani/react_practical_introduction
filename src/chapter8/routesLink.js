import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {element} from "prop-types";
import TopPage from "./TopPage";
import AboutPage from "./AboutPage";
import ArticlePage from "./ArticlePage";
import RouterApp from "./RouterApp";
import RouterNav from "./RouterNav";
import InfoPage from "./InfoPage";

const routesBasic = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<RouterApp />}>
                <Route path="" element={<TopPage />} />
                <Route path="article" element={<ArticlePage />} />
                <Route path="article/info" element={<InfoPage />} />
                <Route path="about" element={<AboutPage />} />
            </Route>
        </>
    )
);

// const routesBasic = createBrowserRouter(
//     createRoutesFromElements(
//         <>
//             <Route path="/" element={<RouterNav />}>
//                 <Route path="" element={<TopPage />} />
//                 <Route path="article" element={<ArticlePage />} />
//                 <Route path="about" element={<AboutPage />} />
//             </Route>
//         </>
//     )
// );

export default routesBasic;