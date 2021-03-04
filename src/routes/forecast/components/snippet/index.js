import { h } from 'preact'
import Moment from 'moment';
import style from './style.css'
import icon_mapping from '../../../../mapping.json'

export const Snippet = ({ time, description, state }) => {
  return (
    <div class={style.snippet}>
      <div class={style.text}>
        <p>{Moment(time).format('LT')}</p>
        <p>{description}</p>
      </div>
      <i class={`wi ${icon_mapping[state]}`} />
    </div>
  )
}


