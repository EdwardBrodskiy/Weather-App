import { h } from 'preact'
// eslint-disable-next-line no-unused-vars
import style from './style.css'

export const Precipitation = ({ value }) => {
  return (
    <div class={style.precipitacion}>
      <p>{value}</p>
    </div>
  )
}
