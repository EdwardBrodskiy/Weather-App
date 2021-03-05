import { h } from 'preact'
import style from './style.css'
// eslint-disable-next-line no-unused-vars
import icons from '../../style/weather-icons.css'
import icon_mapping from '../../mapping.json'

export const WeatherInfo = (props) => {
  const current = props.data.list[0]
  const current_temp = Math.round(current.main.temp - 273.15)
  const current_state = current.weather[0].main
  return (
    <div class={style.weatherInfo}>
      <h2>LONDON</h2>
      <h1>
        <i class={`wi ${icon_mapping[current_state]}`} /> {current_temp}°C
      </h1>
    </div>
  )
}
