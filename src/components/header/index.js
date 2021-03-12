import { h } from 'preact'
import { Link } from 'preact-router/match'
import style from './style.css'
import baseroute from '../../baseroute'

const Header = () => (
  <header class={style.header}>
    <nav>
      <Link activeClassName={style.active} href={`${baseroute}/`}>
        Forecast
      </Link>
      <Link activeClassName={style.active} href={`${baseroute}/week`}>
        Week
      </Link>
      <Link activeClassName={style.active} href={`${baseroute}/more-info`}>
        More Info
      </Link>
    </nav>
  </header>
)

export default Header
