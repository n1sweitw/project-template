import { hot } from 'react-hot-loader'
import React from 'react'
import { Grommet } from 'grommet'
import Test from './pages/test'

const App = () => (
  <Grommet plain>
    <Test />
  </Grommet>
)

export default hot(module)(App)
