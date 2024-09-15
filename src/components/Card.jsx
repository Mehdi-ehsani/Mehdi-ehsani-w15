import React from 'react'
import styles from "./card.module.css"
import clearImg from "../image/clear.png";
import cloudsImg from "../image/clouds.png";
import drizzleImg from "../image/drizzle.png";
import rainImg from "../image/rain.png";
import snowImg from "../image/snow.png";
import mistImg from "../image/mist.png";
import humidityImg from "../image/humidity.png";
import windImg from "../image/wind.png";
import errorImg from "../image/lost-connection.png";


const Card = ({children , isLoading , weatherData , isError }) => {
  const showWeatherImg =(weatherStatus) => {
		if(weatherStatus) {
			switch (weatherStatus.toLowerCase()) {
				case "clear":
					return clearImg;
					break;
				case "clouds":
					return cloudsImg;
					break;
				case "rain":
					return rainImg;
					break;
				case "drizzle":
					return drizzleImg;
					break;
				case "snow":
					return snowImg;
					break;
				case "mist":
					return mistImg;
					break;
			}
		}else {
			return clearImg;
		}
  }
  if(isError) {
    return (
      <div className={styles.card}>
          {children}
          <img className={styles.errorImg} src={errorImg} />
      </div>

    )
  }
  if(isLoading) {
    return (
      <div className={styles.card}>
      {children}
      <h1>loading</h1>
  </div>
    )
  }else {
    return (
      <div className={styles.card}>
          {children}
      <div>
				<div className={styles.weatherInfo}>
        <img className={styles.weatherImg} src={showWeatherImg(weatherData.weather)} />
					<h2 className={styles.cityName}>{weatherData.name}</h2>
					<h1 className={styles.temp}>{Math.round(weatherData.temp)}°C</h1>
				</div>

				<div className={styles.boxContainer}>
					<div className={styles.cardBox}>
						<img src={humidityImg} />
						<div>
							<h1>{weatherData.humidity}%</h1>
							<p>Humidity</p>
						</div>
					</div>
					<div className={styles.cardBox}>
						<img src={windImg} />
						<div>
							<h1>{weatherData.windSpeed} km/h</h1>
							<p>Wind Speed</p>
						</div>
					</div>
				</div>
      </div>   
      </div>
    )
  }
}

export default Card