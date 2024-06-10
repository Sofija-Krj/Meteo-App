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
  humidityElement.innerHTML = `${response.data.temperature.humidity} %`;
  let speedElement = document.querySelector("#wind-speed");
  speedElement.innerHTML = `${response.data.wind.speed} km/h`;
}

function search(city) {
  let apiKey = "o3cf1124f7350046738b1c34ad3dt312";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTemperature);
}
