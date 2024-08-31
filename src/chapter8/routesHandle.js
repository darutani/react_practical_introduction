import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import RouterParams from "./RouterParams";
import TopPage from "./TopPage";
import BookPage from "./BookPage";

const routesHandle = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterParams />}>
            <Route path="/" element={<TopPage />} handle={{
                title: 'トップ',
                keywords: 'React, Router, JavaScript',
                description: 'React Routerの解説サンプルです。'
            }} />
            <Route path="/book/:isbn" element={<BookPage />} handle={{
                title: '書籍詳細 - %s',
                keywords: 'React, %s',
                description: '%s'
            }} />
        </Route>
    )
);

export default routesHandle;
