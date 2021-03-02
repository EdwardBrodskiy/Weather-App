import { h } from 'preact'
import style from './style.css'

const Forecast = () => (
  <div class={style.forecast}>
    <ul>
      <li>Monday Mostly Sunny ☀</li>
      <hr />
      <li>Tuesday Partly Cloudy &#x1F324;</li>
      <hr />
      <li>Wednesday Cloudy ☁</li>
      <hr />
      <li>Thursday Rainy 🌧</li>
      <hr />
    </ul>
  </div>
)

export default Forecast
