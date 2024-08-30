import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import TopPage from "./TopPage";
import BookPage from "./BookPage";
import RouterParams from "./RouterParams";
import SearchPage from "./SearchPage";
import NotFoundPage from "./NotFoundPage";
import BigQueryPage from "./BigQueryPage";
import BookStatePage from "./BookStatePage";

const routesParam = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterParams />}>
            <Route path="/" element={<TopPage />} />
            <Route path="/book/:isbn?" element={<BookPage />} />
            <Route path="/bookQuery" element={<BigQueryPage />} />
            <Route path="/bookState" element={<BookStatePage />} />
            <Route path="/search/*" element={<SearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
);

export default routesParam;
