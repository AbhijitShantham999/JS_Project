var apiKey = "215f6d0fd24fcd940b5969fff833e8d0";
var api = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

let weather_info = document.querySelector(".weather-info");
let city_name = document.querySelector("#cityName");
let temperature = document.querySelector("#temperature");
let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");
let weatherIcon = document.querySelector("#weatherIcon");
let weather_condn = document.querySelector(".weather_condn");
let cityInput = document.querySelector("#cityInput");
let btn = document.querySelector("button");

// var input_city = function inputCity() {
//   btn.addEventListener("click", () => {
//     let cityInput = document.querySelector("#cityInput").value;
//     console.log(cityInput);
//   });
// };
async function checkWeather(city) {
  const response = await fetch(api + `&q=${city}` + `&appid=${apiKey}`);

  if (response.status !== 404) {
    const data = await response.json();
    console.log(data);

    city_name.innerHTML = data.name;
    temperature.innerHTML = "temp: " + data.main.temp + "°C";
    feelsLike.innerHTML = "feels Like: " + data.main.feels_like + "°C";
    humidity.innerHTML = "humidity: " + data.main.humidity + "%";
    weather_condn.innerHTML = data.weather[0].main;

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src =
        "https://media.tenor.com/x6J52Hyn8LYAAAAM/moving-clouds-world-meteorological-day.gif";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src =
        "https://media.tenor.com/_D-iPkf7QUQAAAAM/anime-aesthetic.gif";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src =
        "https://media.tenor.com/OxchKLlFQRgAAAAj/sad-winter.gif";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src =
        "https://media.tenor.com/8Qm-3YieUhwAAAAM/rainy-day-rain.gif";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src =
        "https://media.tenor.com/hN8ma5kfmF0AAAAM/fog-mountains.gif";
    } else if (data.weather[0].main == "Haze") {
      weatherIcon.src =
        " https://i.pinimg.com/originals/cc/51/a3/cc51a378a4accec027b87361dab54217.gif";
    } else {
      weatherIcon.src = "--";
    }

    weather_info.style.display = "block";
    document.querySelector(".error_msg").style.display = "none";
  } else {
    document.querySelector(".error_msg").style.display = "block";
    weather_info.style.display = "none";
  }
}

btn.addEventListener("click", () => {
  checkWeather(cityInput.value);
});
