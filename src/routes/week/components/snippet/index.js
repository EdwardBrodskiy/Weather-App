import { h } from 'preact'
import Moment from 'moment'
import capitalize from 'capitalize'
import style from './style.css'
import icon_mapping from '../../../../mapping.json'

export const Snippet = ({ time, description, state, temp }) => {
  return (
    <div class={style.snippet}>
      <div class={style.text}>
        <p class={style.day}>{Moment(time).format('dddd')}</p>
        <p>{capitalize(description)}</p>
      </div>
      <div class={style.temp}>
        <p>{temp}°C</p>
      </div>
      <i class={`wi ${icon_mapping[state]}`} />
    </div>
  )
}
