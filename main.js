//8f933d8cdb418f4c34809ac8cff1d49f
const apiKey = "8f933d8cdb418f4c34809ac8cff1d49f";
const input = document.getElementById("city-input");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") getWeatherData();
});

async function getWeatherData() {
  const city = input.value.trim();
  if (!city) return alert("Please enter a city name");

  const res = await fetch(`https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`);
  const data = await res.json();

  if (!data.current) return alert("City not found");

  document.getElementById("weather-card").style.display = "block";
  document.getElementById("temperature").innerText = `${data.current.temperature}°C`;
  document.getElementById("description").innerText = data.current.weather_descriptions[0];
  document.getElementById("location").innerText = `${data.location.name}, ${data.location.country}`;
  document.getElementById("feels").innerText = `${data.current.feelslike}°C`;
  document.getElementById("humidity").innerText = `${data.current.humidity}%`;
  document.getElementById("wind").innerText = `${data.current.wind_speed} m/s`;
  document.getElementById("icon").src = data.current.weather_icons[0];
  document.getElementById("time").innerText = new Date().toLocaleString();
}

document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});