import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import TopPage from "./TopPage";
import BookPage from "./BookPage";
import RouterParams from "./RouterParams";
import SearchPage from "./SearchPage";
import NotFoundPage from "./NotFoundPage";
import BigQueryPage from "./BigQueryPage";
import BookStatePage from "./BookStatePage";
import InvalidParamsPage from "./InvalidParamsPage";
import WeatherPage from "./WeatherPage";

const routesParam = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterParams />} errorElement={<InvalidParamsPage />}>
            <Route path="/" element={<TopPage />} />
            <Route path="/book/:isbn?" element={<BookPage />} />
            <Route path="/bookQuery" element={<BigQueryPage />} />
            <Route path="/bookState" element={<BookStatePage />} />
            <Route path="/search/*" element={<SearchPage />} />
            <Route path="/weather/:city" element={<WeatherPage />}
                loader={({ params}) =>
                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&lang=ja&appid=50eee5976b25f93049deb7fd5d14e6bd`)
                }
            />
            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
);

export default routesParam;
