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
