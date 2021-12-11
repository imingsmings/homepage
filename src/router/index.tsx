import React from 'react'
import { Redirect } from 'react-router-dom'

const Home = React.lazy(() => import('../views/home'))

const routes = [
  {
    path: '/',
    render: () => {
      return <Redirect to={'home'} />
    }
  },
  {
    path: '/home',
    component: Home,
    exact: true
  }
]

export default routes
