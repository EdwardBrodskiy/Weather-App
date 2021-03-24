import { h } from 'preact'
// eslint-disable-next-line no-unused-vars
import style from './style.css'

export const Precipitation = ({ title, value }) => {
  return (
    <div class={style.precipitation}>
      <p>{title}</p>
      <p>{value}</p>
    </div>
  )
}
