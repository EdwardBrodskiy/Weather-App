import { h } from 'preact'
import style from './style.css'
import { Snippet } from './components/snippet'

const Week = (props) => {
  const dailyData = props.data.list.filter(reading => {
    return reading.dt_txt.includes("12:00:00")
  })

  const snippets = dailyData.map((item, index) => (
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
    <div class={style.week}>
      <ul>{snippets}</ul>
    </div>
  )
}

export default Week
