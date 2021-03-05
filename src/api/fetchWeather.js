import axios from "axios";

const API_KEY = '86180a5dc3795de81db4ef1d26fe556c';
const URL = 'https://api.openweathermap.org/data/2.5/weather';


export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID : API_KEY
        }
    });
    return data;
}

