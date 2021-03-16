import { h } from 'preact'
import { useState, useEffect } from 'preact/compat'
import { Router } from 'preact-router'
import { createHashHistory } from 'history'
import { apiEndPoint } from '../config.json'

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
    (async () => {
      const response = await fetch(apiEndPoint)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const result = await response.json()
      setIsLoaded(true)
      setData(result)
    })().catch((err) => {
      setError(err)
    })
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
            <Forecast path='/' data={data} />
            <Week path='/week' data={data} />
            <MoreInfo path='/more-info' data={data} />
          </Router>
        </main>
      </div>
    </div>
  )
}
export default App
