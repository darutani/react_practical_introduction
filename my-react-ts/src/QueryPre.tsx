import {useEffect, useState} from "react";

type WeatherType = {
    weather: Array<{
        id: number,
        main: string,
        description: string,
        icon: string
    }>
};

const sleep = (delay: number): Promise<void> => new Promise<void>(resolve => setTimeout(resolve, delay));
const fetchWeather = async () => {
    await sleep(2000);
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=50eee5976b25f93049deb7fd5d14e6bd');
    if (res.ok) { return await res.json() as WeatherType; }
    throw new Error(res.statusText);
};

export default function QueryPre() {
    const [data, setData] = useState<WeatherType>();
    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setLoading(true);
        fetchWeather()
            .then(result => setData(result))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <figure>
            <img
                src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
                alt={data?.weather?.[0]?.main}
            />
            <figcaption>{data?.weather?.[0]?.description}</figcaption>
        </figure>
    )
}