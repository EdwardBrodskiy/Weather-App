import { h } from 'preact'
import Moment from 'moment'
import capitalize from 'capitalize'
import style from './style.css'
import { convert_to_icon } from '../../../../utils'

export const Snippet = ({ time, description, state, temp }) => {

  const current_state = current.weather[0].description
  const icon_class = convert_to_icon(current_state, data.city.sunrise, data.city.sunset)

  return (
    <div class={style.snippet}>
      <div class={style.text}>
        <p class={style.day}>{Moment(time).format('dddd')} {temp}°C</p>
        <p>{capitalize(description)}</p>
      </div>
      <i class={`wi ${icon_class}`} />
    </div>
  )
}
