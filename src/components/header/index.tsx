import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.scss'
import MenuSVG from '../../assets/images/menu.svg'
import SearchSVG from '../../assets/images/search1.svg'
import DeleteSVG from '../../assets/images/close.svg'

interface headerProps {
  title: string
}
function Header(props: headerProps) {
  const history = useHistory()
  const [active, setActive] = useState<boolean>(false)
  const _onClick = () => {
    setActive(!active)
  }
  return (
    <div className={styles.header}>
      <ul className={styles.top}>
        {!active && (
          <li className={styles.menu} onClick={_onClick}>
            <img src={MenuSVG} alt="" />
          </li>
        )}
        {active && (
          <li className={styles.menu} onClick={_onClick}>
            <img src={DeleteSVG} alt="" />
          </li>
        )}
        <li className={styles.logo}>{props.title}</li>
        <li className={styles.search}>
          <img src={SearchSVG} alt="" />
        </li>
      </ul>
      <ul className={`${styles.nav} ${active ? styles.show : ''}`}>
        <li onClick={() => history.push('/home')}>首页</li>
        <li onClick={() => history.push('/news')}>时政题库</li>
      </ul>
    </div>
  )
}

export default Header
