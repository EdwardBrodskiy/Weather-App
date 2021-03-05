import { h } from 'preact'
// eslint-disable-next-line no-unused-vars
import icons from '../../../../style/weather-icons-wind.css'
import style from './style.css'

export const Wind = ({ direction, speed }) => {
  return (
    <div class={style.wind}>
      <div>
        <p>
          Wind
        </p>
        <p>
          {speed} m/s
        </p>
      </div>

      <i class={`wi wi-wind towards-${direction}-deg`} />
    </div>
  )
}
