import {createBrowserRouter, createRoutesFromElements, json, Route} from "react-router-dom";
import TopPage from "./TopPage";
import BookPage from "./BookPage";
import RouterParams from "./RouterParams";
import SearchPage from "./SearchPage";
import NotFoundPage from "./NotFoundPage";
import BigQueryPage from "./BigQueryPage";
import BookStatePage from "./BookStatePage";
import InvalidParamsPage from "./InvalidParamsPage";
import WeatherPage from "./WeatherPage";

const fetchWeather = async ({ params }) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&lang=ja&appid=50eee5976b25f93049deb7fd5d14e6bd`)
    if (res.ok) { return res; }
    return json({
        "weather": [
            {"id":803, "main": "Unknown", "description": "不明", "icon": "50d"}
        ],
        "name": "不明"
    });
}

const routesParam = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterParams />} errorElement={<InvalidParamsPage />}>
            <Route path="/" element={<TopPage />} />
            <Route path="/book/:isbn?" element={<BookPage />} />
            <Route path="/bookQuery" element={<BigQueryPage />} />
            <Route path="/bookState" element={<BookStatePage />} />
            <Route path="/search/*" element={<SearchPage />} />
            <Route path="/weather/:city" element={<WeatherPage />}
                loader={fetchWeather}
            />
            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
);

export default routesParam;
