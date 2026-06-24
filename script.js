const apiKey = "ffa1b5546e05481243ef76e0f8e6a0e9";

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                document.getElementById("error-message").textContent = "City not found. Please try again.";
                document.getElementById("weather-card").style.display = "none";
                return;
            }

            document.getElementById("error-message").textContent = "";
            document.getElementById("weather-card").style.display = "block";
            document.getElementById("city-name").textContent = data.name;
            document.getElementById("temperature").textContent = data.main.temp + "°F";
            document.getElementById("description").textContent = data.weather[0].description;
            document.getElementById("humidity").textContent = "Humidity: " + data.main.humidity + "%";
            document.getElementById("wind-speed").textContent = "Wind: " + data.wind.speed + " mph";
            document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            document.getElementById("weather-icon").alt = data.weather[0].description;
        });
}

document.getElementById("search-btn").addEventListener("click", function() {
    const city = document.getElementById("city-input").value;
    getWeather(city);
});