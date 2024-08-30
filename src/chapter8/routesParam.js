import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import TopPage from "./TopPage";
import BookPage from "./BookPage";
import RouterParams from "./RouterParams";

const routesParam = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterParams />}>
            <Route path="/" element={<TopPage />} />
            <Route path="/book/:isbn" element={<BookPage />} />
        </Route>
    )
);

export default routesParam;
