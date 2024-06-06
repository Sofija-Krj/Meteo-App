function changeCityName(event) {
  event.preventDefault();
  let heading = document.querySelector("h1");
  let cityInput = document.querySelector("#form-input-value");
  heading.innerHTML = cityInput.value;
}

let cityName = document.querySelector("#form-input");
cityName.addEventListener("submit", changeCityName);
