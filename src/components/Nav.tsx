import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link, useHistory } from 'react-router-dom'

type NavProps = {
  reroll?: () => void
  font?: string
}

const useStyles = createUseStyles({
  nav: {
    margin: '70px 0',
    width: 125,
    height: 25,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: ({ font }: Pick<NavProps, 'font'>) => ({
    padding: 0,
    fontFamily: font,
    fontSize: 18,
    color: '#9b9b9b',
    textDecoration: 'none',
    background: 'none',
    border: 'none',

    '&:hover, &:focus': {
      color: '#000',
      cursor: 'pointer',
    },
  }),
  '@media (max-width: 425px)': {
    nav: {
      margin: 0,
      padding: '40px 40px 0 40px',
    },
  },
})

const Nav = ({
  reroll = () => {},
  font = "'Source Sans Pro', sans-serif",
}: NavProps) => {
  const styles = useStyles({ font })
  const history = useHistory()

  const handleWorkNavigation = () => {
    history.location.pathname === '/' ? reroll() : history.push('/')
  }

  return (
    <nav className={styles.nav}>
      <button
        className={styles.link}
        type="button"
        onClick={handleWorkNavigation}
      >
        Work
      </button>
      <Link className={styles.link} to="/about">
        About
      </Link>
    </nav>
  )
}

export default Nav
