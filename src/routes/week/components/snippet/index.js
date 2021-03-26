import { h } from 'preact'
import Moment from 'moment'
import capitalize from 'capitalize'
import style from './style.css'
import { convert_to_icon } from '../../../../utils'

export const Snippet = ({ time, description, temp, sunrise, sunset }) => {

  const icon_class = convert_to_icon(description, sunrise, sunset, time)

  return (
    <div class={style.snippet}>
      <div class={style.text}>
        <p class={style.day}>{Moment(time * 1000).format('dddd')} {temp}°C</p>
        <p>{capitalize(description)}</p>
      </div>
      <i class={`wi ${icon_class}`} />
    </div>
  )
}
