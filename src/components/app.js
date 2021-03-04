import { h } from 'preact'
import { useState, useEffect } from 'preact/compat'
import { Router } from 'preact-router'
import { apiEndPoint } from '../config.json'

import Header from './header'

// Code-splitting is automated for `routes` directory
import Forecast from '../routes/forecast'
import Hourly from '../routes/hourly'
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
    })().catch(err => {
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
      <Header data={data} />
      <main>
        <Router>
          <Forecast path='/' data={data} />
          <Hourly path='/hourly' />
          <MoreInfo path='/more-info' />
        </Router>
      </main>
    </div>
  )
}
export default App
