const section = document.getElementById("section");

const API =
  "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";

let weatherData = [];

const getWeather = () => {
  fetch(API)
    .then((response) => response.json())
    .then((post) => {
      weatherData = post;
      renderWeatherItem();
    });
};
getWeather();

const renderWeatherItem = () => {
  section.innerHTML = `<div>
  <h3 class='weather__city'>${weatherData.name}, ${weatherData.sys.country}</h3>
  <div class='weather__degree'>
  <img src='http://openweathermap.org/img/w/${
    weatherData.weather[0].icon
  }.png' alt='description'>
  <p class='weather__degree-item'>${Math.round(
    weatherData.main.temp
  )}&#8451;</p>
  </div></div>
  <div>
  <h4>Feels like ${Math.round(
    weatherData.main.feels_like
  )} &#8451. <p class='weather__discription'> ${
    weatherData.weather[0].description
  }</p></h4>
  <p class='weather'>wind: ${weatherData.wind.speed}m/s ${
    weatherData.wind.deg
  }&#176</p>
  <p class='weather'>pressure: ${weatherData.main.pressure} hPa</p>
  <p class='weather'>humidity: ${weatherData.main.humidity} %</p>
  </div>`;
};
