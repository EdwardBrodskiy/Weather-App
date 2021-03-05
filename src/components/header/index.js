import { h } from 'preact'
import { Link } from 'preact-router/match'
import style from './style.css'

const Header = () => (
  <header class={style.header}>
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
