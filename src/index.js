function changeCityName(event) {
  event.preventDefault();
  let heading = document.querySelector("h1");
  let cityInput = document.querySelector("#form-input-value");
  heading.innerHTML = cityInput.value;
}

let cityName = document.querySelector("#form-input");
cityName.addEventListener("submit", changeCityName);

function displayTemperature(response) {
  let temperature = document.querySelector("#temperature-digit");
  let currentTemperature = Math.round(response.data.temperature.current);
  temperature.innerHtml = currentTemperature;
  let cityElement = document.querySelector("h1");
  cityElement.innerHtml = response.data.city;
}

function search(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#form-input-value");
  let query = cityInputElement.value;

  let apiKey = "o3cf1124f7350046738b1c34ad3dt312";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTemperature);
}
