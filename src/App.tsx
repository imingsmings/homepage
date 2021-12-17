import React from 'react'
import Home from './views/home'
import { renderRoutes } from 'react-router-config'
import routes from './router'

function App () {
  return (
    <>
      <Home />
      {renderRoutes(routes)}
    </>
  )
}

export default App
