import { h } from 'preact'
import style from './style.css'
import { Snippet } from './components/snippet'
import { Wind } from './components/wind'

const MoreInfo = (props) => {
  const current = props.data.list[0]
  console.log(current)
  return (
    <div class={style.moreInfo}>
      <ul>
        <h3>{current.weather[0].description}</h3>
        <Snippet title='Feels Like' content={`${Math.round(current.main.feels_like - 273.15)}°C`} />
        <hr />
        <Snippet title='Humidity' content={`${current.main.humidity}%`} />
        <hr />
        <Wind direction={current.wind.deg} speed={current.wind.speed} />
      </ul>
    </div>)
}

export default MoreInfo
