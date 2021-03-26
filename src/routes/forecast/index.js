import { h } from 'preact'
import style from './style.css'
import { Snippet } from './components/snippet'

const Forecast = ({ data }) => {
  const { sunrise, sunset } = data.city
  const snippets = data.list.slice(1, 5).map((item, index) => (
    <div key={index}>
      <Snippet
        time={item.dt}
        description={item.weather[0].description}
        state={item.weather[0].main}
        temp={Math.round(item.main.temp - 273.15)}
        sunrise={sunrise}
        sunset={sunset}
      />
      <hr />
    </div>
  ))
  return (
    <div class={style.forecast}>
      <ul>{snippets}</ul>
    </div>
  )
}

export default Forecast
