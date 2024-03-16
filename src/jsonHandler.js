export default function processWeatherInfo(json) {
    const weatherInfo = {
        location: json.location.name,
        region: json.location.region,
        country: json.location.country,
        tempF: json.current.temp_f,
        tempC: json.current.temp_c,
        windMph: json.current.wind_mph,
        windKm: json.current.wind_kph,
        humidity: json.current.humidity,
        uvIndex: json.current.uv,
        condition: json.current.condition.text,
        icon: json.current.condition.icon
    }

    return weatherInfo;
}