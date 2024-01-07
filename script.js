const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';

function getWeather() {
    const cityInput = document.getElementById('city-input');
    const cityName = cityInput.value;

    if (!cityName) {
        alert('Please enter a city name.');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherDataContainer = document.getElementById('weather-data');
    
    if (data.cod !== '404') {
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        
        weatherDataContainer.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
        `;
    } else {
        weatherDataContainer.innerHTML = `<p>City not found</p>`;
    }
}
