import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { withRouter } from 'react-router-dom'
import routes from './router'
import styles from './App.module.scss'
import Header from './components/header'

const App = () => {
  return (
    <div className={styles.app}>
      <Suspense fallback={<div>Loading...</div>}>
        {renderRoutes(routes)}
      </Suspense>
    </div>
  )
}

export default withRouter(memo(App))
