function changeCityName(event) {
  event.preventDefault();
  let heading = document.querySelector("h1");
  let cityInput = document.querySelector("#form-input-value");
  if (cityInput.value) {
    heading.innerHTML = cityInput.value;
  } else {
    heading.innerHTML = null;
    alert("Enter a city..");
  }

  search(cityInput.value);
}

let cityName = document.querySelector("#form-input");
cityName.addEventListener("submit", changeCityName);

function displayTemperature(response) {
  let temperature = document.querySelector("#temperature-digit");
  let currentTemperature = Math.round(response.data.temperature.current);

  temperature.innerHTML = currentTemperature;
  let cityElement = document.querySelector("#heading");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector(".weather-condition");
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity-percentage");
  humidityElement.innerHTML = `Humidity: ${response.data.temperature.humidity} %`;
  let speedElement = document.querySelector("#wind-speed");
  speedElement.innerHTML = `Wind:${response.data.wind.speed} km/h`;
  let date = new Date(response.data.time * 1000);
  let timeElement = document.querySelector("#automated-time");
  timeElement.innerHTML = actualTime(date);
}
function actualTime(date) {
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  return `${day} ${hour}:${minutes},`;
}

function search(city) {
  let apiKey = "o3cf1124f7350046738b1c34ad3dt312";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}
