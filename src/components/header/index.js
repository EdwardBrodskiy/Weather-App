import { h } from 'preact'
import { Link } from 'preact-router/match'
import style from './style.css'
import { WeatherInfo } from '../weather_info'

const Header = (props) => (
  <header class={style.header}>
    <WeatherInfo data={props.data} />
    <nav>
      <Link activeClassName={style.active} href='/'>
        Forecast
      </Link>
      <Link activeClassName={style.active} href='/hourly'>
        Hourly
      </Link>
      <Link activeClassName={style.active} href='/more-info'>
        More Info
      </Link>
    </nav>
  </header>
)

export default Header
