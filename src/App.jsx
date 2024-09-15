import { useEffect, useState } from "react";
import Input from "./components/Input/Input.jsx";
import data from "./cities.json";
import Card from "./components/Card.jsx";
import searchImg from "./image/search.png";
import styles from "./app.module.css";


function App() {
	const [weatherData, setWeatherData] = useState({});
	const [value, setValue] = useState("");
	const [hint, setHint] = useState("");
	const [showHint, setShowHint] = useState(false);
	const [isLoading , setIsLoading] = useState(false)
	useEffect(() => {
		searchHandler(JSON.parse(localStorage.getItem("cityName")) || "New York");
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
		const BASE_URL =
			"https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
		const API_KEY = "7066a73788b2df337602919a5376525f";
		try {
			setIsLoading(true)
			const response = await fetch(BASE_URL + cityName + `&appid=${API_KEY}`);
			const data = await response.json();
			setIsLoading(false)
			setWeatherData({
				name: data.city.name,
				temp: data.list[0].main.temp,
				humidity: data.list[0].main.humidity,
				windSpeed: data.list[0].wind.speed,
				weather: data.list[0].weather[0].main,
			});
		} catch (error) {
			console.log(error.message)
		}
		localStorage.setItem("cityName", JSON.stringify(data.city.name));

		setValue("");
		setHint("");
	};

	return (
		<div>
			<Card isLoading={isLoading} weatherData={weatherData}>
				<div className={styles.inputContainer}>
					<Input value={value} changeHandler={changeHandler} hint={hint} />
					<button
						className={styles.searchBtn}
						onClick={() => searchHandler(value)}
					>
						<img src={searchImg} />
					</button>
				</div>
			</Card>
		</div>
	);
}

export default App;
