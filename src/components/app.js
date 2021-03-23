import { h } from 'preact'
import { useState, useEffect } from 'preact/compat'
import { Router } from 'preact-router'
import { createHashHistory } from 'history'
import baseroute from '../baseroute'

import { Days_3Hour } from '../config.json'

import Header from './header'
import { WeatherInfo } from './weather_info'

// Code-splitting is automated for `routes` directory
import Forecast from '../routes/forecast'
import Week from '../routes/week'
import MoreInfo from '../routes/more_info'

const App = () => {
  const [error, setError] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [data, setData] = useState([])


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        console.log(`lon ${lon} lat ${lat}`)
        get_weather(lat, lon)
          .then(result => {
            setIsLoaded(true)
            setData(result)
          }).catch((err) => {
            setError(err)
          })
      })
    } else {
      setError(Error('Geolocation required'))
    }

  }, [])

  if (error.message) {
    return <h1>Error: {error.message}</h1>
  } else if (!isLoaded) {
    return <h1>Loading</h1>
  }
  return (
    <div id='app'>
      <WeatherInfo data={data} />
      <div id='otherInfo'>
        <Header />
        <main>
          <Router history={createHashHistory()}>
            <Forecast path={`${baseroute}/`} data={data} />
            <Week path={`${baseroute}/week`} data={data} />
            <MoreInfo path={`${baseroute}/more-info`} data={data} />
          </Router>
        </main>
      </div>
    </div>
  )
}

const get_weather = async (lat, lon) => {
  const url = `${Days_3Hour.apiURL}lat=${lat}&lon=${lon}&appid=${Days_3Hour.appId}`
  const response = await fetch(url)
  if (!response.ok) {
    throw Error(response.statusText)
  }
  const result = await response.json()

  return Promise.resolve(result)
}

export default App

