import React from 'react'

const Home = React.lazy(() => import('../views/home'))
const News = React.lazy(() => import('../views/news'))

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/home',
    component: Home,
    exact: true
  },
  {
    path: '/news',
    component: News,
    exact: true
  }
]

export default routes
