import React from 'react'
import Home from './views/home'
import { renderRoutes } from 'react-router-config'
import routes from './router'

function App () {
  return (
    <div className="App">
      <Home />
      {renderRoutes(routes)}
    </div>
  )
}

export default App
