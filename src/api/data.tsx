import axios from "axios"
import { APP_ID, APP_CODE } from "react-native-dotenv"

const fetchData = (location: string) => {
    const url = `https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_astronomy&name=${location}&app_id=${APP_ID}&app_code=${APP_CODE}`;
    const results = axios
        .get(encodeURI(url))
        .then(res => res.data)
    return results
}

export default fetchData