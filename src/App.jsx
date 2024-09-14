import { useEffect, useState } from "react";
import Input from "./Input.jsx";
import data from "./cities.json";
import Card from "./components/Card.jsx";
function App() {
   const [weatherData , setWeatherData] = useState({})
	const [value, setValue] = useState("");
	const [hint, setHint] = useState("");
	const [showHint, setShowHint] = useState(false);
	useEffect(() => {
      searchHandler("New York")
   }, []);
	useEffect(() => {
		!showHint && setHint("");
	}, [value]);

	const changeHandler = (e) => {
		const searchedValue = e.target.value;
		setValue(searchedValue);
		setShowHint(false);
		data.filter((city) => {
			if (city.startsWith(searchedValue)) {
				setShowHint(true);
				setHint(city);
			}
		});
		!searchedValue.length && setHint("");
	};
	const searchHandler = async (cityName) => {
		const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
		const API_KEY = "7066a73788b2df337602919a5376525f";

		const response = await fetch(BASE_URL + cityName + `&appid=${API_KEY}`);
		const data = await response.json();
      
      setWeatherData({
         name: data.city.name,
         temp: data.list[0].main.temp,
         humidity: data.list[0].main.humidity,
         windSpeed: data.list[0].wind.speed,
         weather: data.list[0].weather[0].main,
      })
	};
	return (
		<div>
			<Card>
				<Input value={value} changeHandler={changeHandler} hint={hint} />
				<button onClick={() => searchHandler(value)}>search</button>
            <div>
               <h1>city:{weatherData.name}</h1>
               <h1>temp:{weatherData.temp}</h1>
               <h1>humidity:{weatherData.humidity}</h1>
               <h1>wind:{weatherData.windSpeed}</h1>
               <h1>weather:{weatherData.weather}</h1>
            </div>
			</Card>
		</div>
	);
}

export default App;
