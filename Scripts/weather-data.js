import fetch from "node-fetch";



const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid="


const weather_data = await fetch(url)
	.then(response => response.json())
	// .catch(err => console.error(err));

// get the daily temperature
var daily_tmp = weather_data['main']['temp']
console.log(weather_data['main']['temp'])

// store temperature data
const tmp_data = [12.8];
tmp_data.push(daily_tmp);
console.log(tmp_data);

// average temperature
const sum_tmp = tmp_data.reduce((a,b) => a+b, 0);
const avg_tmp = (sum_tmp / tmp_data.length)
console.log(avg_tmp);


