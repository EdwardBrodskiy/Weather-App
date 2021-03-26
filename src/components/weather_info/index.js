import { h } from 'preact'
import style from './style.css'
// eslint-disable-next-line no-unused-vars
import icons from '../../style/weather-icons.css'
import { convert_to_icon } from '../../utils'

export const WeatherInfo = ({ data }) => {
  const current = data.list[0]
  const current_temp = Math.round(current.main.temp - 273.15)

  const current_state = current.weather[0].description
  const icon_class = convert_to_icon(current_state, data.city.sunrise, data.city.sunset)
  return (
    <div class={style.weatherInfo}>
      <h2>{data.city.name.toUpperCase()}</h2>
      <h1>
        <i class={`wi ${icon_class}`} /> {current_temp}°C
      </h1>

    </div>
  )
}
