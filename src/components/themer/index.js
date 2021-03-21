import { h } from 'preact'
import { useState } from 'preact/compat'
import style from './style.css'

const themes = {
  default: {
    '--background-color': 'linear-gradient(160deg, rgba(73, 9, 121, 1) 23%, rgba(114, 137, 218, 1) 100%)',
    '--text-color': 'white'
  },
  high_contrast: {
    '--background-color': '#23272a',
    '--text-color': 'white'
  }
}

const Themer = () => {
  const [theme, setTheme] = useState('default')

  console.log(theme)
  for (const property in themes[theme]) {
    document.body.style.setProperty(property, themes[theme][property])
  }

  return (
    <div class={style.themer}>
      <button onClick={() => {
        console.log('hi')
        setTheme(theme === 'default' ? 'high_contrast' : 'default')
      }}>High Contrast</button>
    </div>
  )
}

export default Themer
