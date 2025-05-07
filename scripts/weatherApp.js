const cityForm = document.querySelector("form")
const details = document.querySelector(".details")
const card = document.querySelector(".card")
const time = document.querySelector("img")

const updatePage = (data) => {

    const cityInfo = data.cityInfo
    const weatherInfo = data.weatherInfo

    details.innerHTML =`
        <h5>${cityInfo.EnglishName}</h5>
        <h4>${weatherInfo.WeatherText}</h4>
        <h2>${weatherInfo.Temperature.Metric.Value} <span>&deg;C</span> </h2>
    `    
    
    //adding picture if day/night using tenary operator
    let timeSrc = null
    timeSrc = weatherInfo.IsDayTime ? "./images/day.jpeg" : "./images/night.jpeg";
    time.setAttribute("src", timeSrc);

    //displaying only when a city is searched
    if(card.classList.contains("card")){
        card.classList.remove("card");
    }
}

const getCityUpdate = async (cityName) => {

    const cityInfo = await getCity(cityName);
    const weatherInfo = await getWeather(cityInfo.Key);

    return {
        cityInfo: cityInfo,
        weatherInfo: weatherInfo
    }
}

cityForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const cityName = cityForm.state.value.trim();
    cityForm.reset();


    getCityUpdate(cityName)
    .then(data => updatePage(data))
    .catch((err) => console.log(err));
})