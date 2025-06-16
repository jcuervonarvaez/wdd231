/* This module fetches weather data from the OpenWeatherMap API. */
const apiKey = "9a8b333c6b552e1ea406c77df38c601d";
const units = "metric";
const lat = -33.0498135;
const lon = -71.4415282;

// Just for Celsius
function calculateWindChill(temperature, windSpeed) {
  // AI Give me this formula
  let result =
    13.12 +
    0.6215 * temperature -
    11.37 * windSpeed ** 0.16 +
    0.3965 * temperature * windSpeed ** 0.16;
  return Math.round(result * 10) / 10;
}

async function getForecast() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  try {
    const response = await fetch(url, { method: "get" });
    const forecastData = await response.json();
    return forecastData;
  } catch (error) {
    alert("Error on API Request");
    console.error(error.message);
    return null;
  }
}

function getnext3Days(forecastList) {
  // Get the next 3 days from the forecast
  // The forecast is in 3-hour intervals, so we need to find the next 3 unique days
  let threeDaysForecast = [];
  for (let i = 0; i < forecastList.length; i += 8) {
    // We only need the next 3 days
    if (threeDaysForecast.length>= 3) {
      break;
    }
    // Skip the first entry as it is the current weather
    if (i === 0) {
      continue;
    }
    threeDaysForecast.push({
      date: new Date(forecastList[i].dt * 1000),
      temperature: forecastList[i].main.temp,
    });
  }

  return threeDaysForecast;
}

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  try {
    const response = await fetch(url, { method: "get" });
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    alert("Error on API Request");
    console.error(error.message);
    return null;
  }
}

function createWeatherInfoListItem(title, data) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = `${title}: `;
  li.appendChild(span);
  li.appendChild(document.createTextNode(data));
  return li;
}

export async function displayWeather(container) {
  const weatherData = await getWeather();

  const temperature = weatherData.main.temp;
  const windSpeed = weatherData.wind.speed;
  const windChill = calculateWindChill(temperature, windSpeed);
  const highTemp = weatherData.main.temp_max;
  const lowTemp = weatherData.main.temp_min;
  const humidity = weatherData.main.humidity;
  const description = weatherData.weather[0].description;
  const icon = weatherData.weather[0].icon;

  // Header Weather
  const header = document.createElement("div");
  header.classList.add("weather-header");
  const iconWrapper = document.createElement("div");
  iconWrapper.classList.add("icon-weather");
  const mainIcon = document.createElement("img");
  mainIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  mainIcon.alt = "Weather icon";
  mainIcon.title = "Weather icon";
  mainIcon.width = 80;
  mainIcon.height = 80;
  iconWrapper.appendChild(mainIcon);

  const tempTitle = document.createElement("span");
  tempTitle.textContent = `${Math.round(temperature)}°`;

  const desc = document.createElement("p");
  desc.textContent = description;

  header.appendChild(iconWrapper);
  header.appendChild(tempTitle);
  header.appendChild(desc);

  // List Weather Info
  const ul = document.createElement("ul");
  ul.classList.add("weather-info-list");

  ul.appendChild(createWeatherInfoListItem("Wind Speed", `${windSpeed} m/s`));
  ul.appendChild(createWeatherInfoListItem("Wind Chill", `${windChill}°C`));
  ul.appendChild(createWeatherInfoListItem("High Temp", `${highTemp}°C`));
  ul.appendChild(createWeatherInfoListItem("Low Temp", `${lowTemp}°C`));
  ul.appendChild(createWeatherInfoListItem("Humidity", `${humidity}%`));

  container.appendChild(header);
  container.appendChild(ul);
}

export async function displayForecast(container) {
  const forecast = await getForecast();
  if (!forecast || !forecast.list || forecast.list.length === 0) {
    console.error("No forecast data available");
    return;
  }
  const next3Days = getnext3Days(forecast.list);
  const ul = document.createElement("ul");
  next3Days.forEach((day) => {
    // date style dayname of the week
    const date = day.date.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const li = createWeatherInfoListItem(
      date,
      `${Math.round(day.temperature)}°C`
    );
    ul.classList.add("forecast-info-list");
    ul.appendChild(li);
  });
  container.appendChild(ul);
}
