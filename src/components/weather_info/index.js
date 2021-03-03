import { h } from 'preact'
import style from './style.css'

export const WeatherInfo = (props) => {
  return (
    <div class={style.weatherInfo}>
      <h2>LONDON</h2>
      <h1>☀ {Math.round(props.weather.main.temp - 273.15)}°C</h1>
    </div>
  )
}
