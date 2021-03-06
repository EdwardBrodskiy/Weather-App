import { h } from 'preact'
import { useState } from 'preact/compat'
import '../../style/weather-icons.min.css'
import style from './style.css'

const themes = {
  default: {
    '--background-color': 'linear-gradient(160deg, rgba(73, 9, 121, 1) 23%, rgba(114, 137, 218, 1) 100%)',
    '--text-color': '#ffffff',
    '--alt-text-color': '#ffffff',
    '--primary': '#7289da',
    '--secondary': '#99aab5',
    '--background-0': '#23272a',
    '--background-1': '#2c2f33',
  },
  high_contrast: {
    '--background-color': '#23272a',
    '--text-color': '#ffffff',
    '--alt-text-color': '#23272a',
    '--primary': '#7289da',
    '--secondary': '#99aab5',
    '--background-0': '#23272a',
    '--background-1': '#2c2f33'
  }
}

export const Themer = () => {
  const [theme, setTheme] = useState('default')

  return (
    <div class={style.themer}>
      <button onClick={event => {
        const new_theme = theme === 'default' ? 'high_contrast' : 'default'
        event.target.style.setProperty('background', themes[theme]['--background-color'])
        event.target.style.setProperty('color', themes[theme]['--text-color'])
        update_style(themes[new_theme])
        setTheme(new_theme)
      }}>{theme === 'default' ? 'High Contrast' : 'Default'} <i class='wi wi-moon-alt-third-quarter' /></button>
    </div>
  )
}

const update_style = theme => {
  for (const property in theme) {
    document.body.style.setProperty(property, theme[property])
  }
}
