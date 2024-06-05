const KEY = "d1530aa5b1b3af93250ab35f97790768";
const base = "https://api.openweathermap.org/data/2.5/weather";
const changeLocation = document.getElementById("change-location");
const card = document.getElementById("card");
const details = document.getElementById("details");
const weatherIcon = document.getElementById("weather-icon");
const overlay = document.getElementById("overlay");

changeLocation.city.focus();

const getWeather = async (city) => {
  const data = await fetch(
    base + "?q=" + city + "&appid=" + KEY + "&units=metric"
  )
    .then((data) => {
      overlay.classList.remove("d-none");
      return data.json();
    })
    .then((resultData) => {
      overlay.classList.add("d-none");
      card.classList.remove("d-none");
      details.innerHTML = `
                <h5 class="mb-3">${resultData.name}, ${
        resultData.sys.country
      }</h5>
                <p class="mb-3">${resultData.weather[0].main}</p>
            <div class="display-4 mb-3">
                <span>${Math.round(resultData.main.temp)}</span>
                <span>&deg;C</span>
            </div>
        `;
      weatherIcon.src = `https://openweathermap.org/img/wn/${resultData.weather[0].icon}@2x.png`;
      return resultData;
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};

changeLocation.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityName = changeLocation.city.value.trim();
  changeLocation.reset();
  getWeather(cityName);
});
