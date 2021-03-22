import { h } from 'preact'
import capitalize from 'capitalize'
import style from './style.css'
import { Snippet } from './components/snippet'
import { Wind } from './components/wind'
import { Precipitacion } from './components/precipitation'
import { One_Call} from '../../config.json'
import { useEffect } from 'preact/hooks'
/*
const [pData, setPData] = useState({});
useEffect(() => {
  navigator.geolocation.getCurrentPosition(postion =>
    {
      const lat = postion.coords.latitude
      const lon = postion.coords.longitude
      getPrecipData(lat,lon)
       .then(result =>{
         setPData(result)
       })
    })
},[])

const getPrecipData = async (lat,lon) => {
  const url = `${One_Call.apiURL}lat=${lat}&lon=${lon}&appid=${One_Call.appId}`
  const response = await fetch(url)
  const result = await response.json()
  return Promise.resolve(result)
}
*/

const MoreInfo = (props) => {
  const current = props.data.list[0]
  console.log(current)
  return (
    <div class={style.moreInfo}>
      <ul>
        <h3>{capitalize.words(current.weather[0].description)}</h3>
        <Snippet title='Feels Like' content={`${Math.round(current.main.feels_like - 273.15)}°C`} />
        <hr />
        <Snippet title='Humidity' content={`${current.main.humidity}%`} />
        <hr />
        <Precipitacion title ='Precipitation' content={`${pData.minutely.precipitacion}`} />
        <hr />
        <Wind direction={current.wind.deg} speed={current.wind.speed} />
      </ul>
    </div>)
}



export default MoreInfo
