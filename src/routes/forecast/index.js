import { h } from 'preact'
import style from './style.css'
import { Snippet } from './components/snippet'

const Forecast = (props) => {
  const snippets = props.data.list.slice(1, 5).map((item, index) => (
    <div key={index}>
      <Snippet
        time={item.dt_txt}
        description={item.weather[0].description}
        state={item.weather[0].main}
        temp={Math.round(item.main.temp - 273.15)}
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
