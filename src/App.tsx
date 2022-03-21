import React from 'react'
import { renderRoutes } from 'react-router-config'
import routes from './router'
import News from './news'

function App () {
  return (
    <>
      <News />
      {renderRoutes(routes)}
    </>
  )
}

export default App
