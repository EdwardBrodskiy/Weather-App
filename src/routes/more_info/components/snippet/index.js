import { h } from 'preact'
import style from './style.css'

export const Snippet = ({ title, content }) => {
  return (
    <div class={style.snippet}>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  )
}
