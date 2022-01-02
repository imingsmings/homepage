import React from 'react'
import { renderRoutes } from 'react-router-config'
import routes from './router'
import Footer from './components/footer'

function App () {
  return (
    <>
      <Footer />
      {renderRoutes(routes)}
    </>
  )
}

export default App
