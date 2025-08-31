const apikey = "98ba93589a2d195e9d159903a643cdd3";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function fetchWeather(city) {
    const response = await fetch(`${baseUrl}${city}&appid=${apikey}`);
    var data = await response.json();
    document.querySelector(".city").innerHTML = `${data.name}`;
    document.querySelector(".temperature").innerHTML = `${data.main.temp}°c`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind-speed").innerHTML = `${data.wind.speed} km/h`;

    console.log(data);
    if(data.weather[0].main == "Clear"){ 
    document.querySelector("h3").innerHTML = "Clear";
    document.querySelector(".weather-icon").src = "clear.png";
}
else if(data.weather[0].main == "Clouds"){
    document.querySelector("h3").innerHTML = "Cloudy";
    document.querySelector(".weather-icon").src = "cloudy.png";
}
else if(data.weather[0].main == "Rain"){
    document.querySelector("h3").innerHTML = "Rainy";
    document.querySelector(".weather-icon").src = "rainy.png";
}
else if(data.weather[0].main == "Snow"){
    document.querySelector("h3").innerHTML = "Snowy";
    document.querySelector(".weather-icon").src = "snow.png";
}
else if(data.weather[0].main == "Drizzle"){
    document.querySelector("h3").innerHTML = "Drizzling";
    document.querySelector(".weather-icon").src = "drizzle.png";
}
else if(data.weather[0].main == "Mist"){
    document.querySelector("h3").innerHTML = "Misty";
    document.querySelector(".weather-icon").src = "mist.png";
}
else{
    document.querySelector("h3").innerHTML = "none";
    document.querySelector(".weather-icon").src = "clear.png";
}
document.querySelector(".weather").style.display = "block";
document.querySelector(".heading").style.display = "none";
console.log(data);
}
searchBtn.addEventListener("click", () => {
    fetchWeather(searchBox.value);
});