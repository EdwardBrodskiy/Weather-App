import { h } from 'preact'
import style from './style.css'

export const WeatherInfo = () => (
  <div class={style.weatherInfo}>
    <h2>LONDON</h2>
    <h1>☀ 18°C</h1>
  </div>
)
