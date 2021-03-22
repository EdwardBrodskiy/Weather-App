import { h } from 'preact'
import { useState, useEffect } from 'preact/compat'
import capitalize from 'capitalize'
import style from './style.css'
import { Snippet } from './components/snippet'
import { Wind } from './components/wind'
import { Precipitation } from './components/precipitation'
import { One_Call } from '../../config.json'


const MoreInfo = ({ data }) => {
  const [error, setError] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [pData, setPData] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(postion => {
      const lat = postion.coords.latitude
      const lon = postion.coords.longitude
      getPrecipData(lat, lon)
        .then(result => {
          setPData(result)
          setIsLoaded(true)
        }).catch((err) => {
          setError(err)
        })
    })
  }, [])

  const current = data.list[0]
  if (error.message) {
    return <h1>Error: {error.message}</h1>
  } else if (!isLoaded) {
    return <h1>Loading</h1>
  }
  console.log(pData)
  return (
    <div class={style.moreInfo}>
      <ul>
        <h3>{capitalize.words(current.weather[0].description)}</h3>
        <Snippet title='Feels Like' content={`${Math.round(current.main.feels_like - 273.15)}°C`} />
        <hr />
        <Snippet title='Humidity' content={`${current.main.humidity}%`} />
        <hr />
        <Precipitation title='Precipitation' content={`${pData.minutely.precipitation}`} />
        <hr />
        <Wind direction={current.wind.deg} speed={current.wind.speed} />
      </ul>
    </div>)
}

const getPrecipData = async (lat, lon) => {
  const url = `${One_Call.apiURL}lat=${lat}&lon=${lon}&appid=${One_Call.appId}`
  const response = await fetch(url)
  const result = await response.json()
  return Promise.resolve(result)
}


export default MoreInfo
