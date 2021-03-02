import { h } from 'preact'
import { Router } from 'preact-router'

import Header from './header'

// Code-splitting is automated for `routes` directory
import Forecast from '../routes/forecast'
import Hourly from '../routes/hourly'
import MoreInfo from '../routes/more_info'

const App = () => (
  <div id='app'>
    <Header />
    <main>
      <Router>
        <Forecast path='/' />
        <Hourly path='/hourly' />
        <MoreInfo path='/more-info' />
      </Router>
    </main>
  </div>
)

export default App
