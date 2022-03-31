import React, { memo, Suspense } from 'react'
import { Spin } from 'antd'
import { renderRoutes } from 'react-router-config'
import { withRouter } from 'react-router-dom'
import routes from './router'
import styles from './App.module.scss'

const App = () => {
  return (
    <div className={styles.app} style={{ height: window.innerHeight }}>
      <Suspense
        fallback={
          <div>
            <Spin />
          </div>
        }
      >
        {renderRoutes(routes)}
      </Suspense>
    </div>
  )
}

export default withRouter(memo(App))
