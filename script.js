async function getWeather() {
    
  const city = document.getElementById("city").value;
  const apiKey = "30954f311262e3ca5506c455ec7cd4bd";

  if (city === "") {
    alert("Enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      document.getElementById("weatherResult").innerHTML = "City not found";
      return;
    }

    document.getElementById("weatherResult").innerHTML = `
  <div class="weather-card">
  <div class= "top"><h2>${data.name}</h2>

   <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
  </div>
      <h1>${data.main.temp}°C</h1>

    
    <div class="details">
      <span>Humidity ${data.main.humidity}%</span>
      <span>Wind ${data.wind.speed} m/s</span>
    </div>
  </div>
`;
  } catch (error) {
    console.log(error);
    document.getElementById("weatherResult").innerHTML = "Error fetching data";
  }
}