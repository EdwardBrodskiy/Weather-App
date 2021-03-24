import { h } from 'preact'
import '../../style/weather-icons.min.css'
import style from './style.css'


export const Loading = () => {
  return (
    <div class={style.loading}>
      <div class={style.loader}>Loading...</div>
    </div>

  )
}
