function displayWeatherInfo(info) {
  const condition = document.getElementById("condition");
  const icon = document.querySelector("#weather-icon img");
  const degrees = document.getElementById("degrees");
  degrees.setAttribute("data-fahrenheit", `${info.tempF}`);
  degrees.setAttribute("data-celsius", `${info.tempC}`);

  const name = document.getElementById("name");
  const region = document.getElementById("region");
  const country = document.getElementById("country");

  const windSpeed = document.getElementById("wind-speed");
  windSpeed.setAttribute("data-mph", `${info.windMph}`);
  windSpeed.setAttribute("data-kph", `${info.windKm}`);

  const humidity = document.getElementById("humidity");
  const uvIndex = document.getElementById("uv-index");

  condition.textContent = info.condition;
  icon.src = info.icon;
  degrees.textContent = `${info.tempF}°F`;

  name.textContent = info.location;
  region.textContent = info.region;
  country.textContent = info.country;

  windSpeed.textContent = `Wind Speed: ${info.windMph}mph`;
  humidity.textContent = `Humidity: ${info.humidity}%`;
  uvIndex.textContent = `UV Index: ${info.uvIndex}`;
}

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
    icon: json.current.condition.icon,
  };

  displayWeatherInfo(weatherInfo);
}
