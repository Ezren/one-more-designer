import React from 'react'
import { createUseStyles } from 'react-jss'

import { Profile } from '../hooks/useRandomProfile'
import ChicagoFlag from '../assets/flag-of-chicago-illinois.svg'

const useStyles = createUseStyles({
  footer: {
    display: 'flex',
    gridArea: 'footer',
    placeItems: 'center',
    placeContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
  },
  footerText: ({ font }: Pick<Profile, 'font'>) => ({
    display: 'flex',
    fontFamily: font,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 2.33,
    color: '#fff',
    textTransform: 'uppercase',

    '& a': {
      textDecoration: 'none',
      color: '#fff',

      '&:hover, &:focus': {
        textDecoration: 'underline',
      },
    },
  }),
  location: {
    display: 'inherit',
  },
  chicagoFlag: {
    marginLeft: '1%',
  },
  '@media (max-width: 425px)': {
    // !important needed due to a JSS bug
    footerText: {
      fontSize: '10px !important',
      letterSpacing: '1.67px !important',
    },
    location: {
      display: 'none',
    },
    chicagoFlag: {
      height: 15,
    },
  },
})

const Footer = ({ font }: Pick<Profile, 'font'>) => {
  const styles = useStyles({ font })

  return (
    <footer className={styles.footer}>
      <aside className={styles.footerText}>
        Made by&nbsp;
        <a
          href="https://twitter.com/myloreyes"
          target="_blank"
          rel="noopener noreferrer"
        >
          @myloreyes
        </a>
        &nbsp;and&nbsp;
        <a
          href="https://www.linkedin.com/in/jacob-stewart-29b9a980"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jake Stewart
        </a>
        <span className={styles.location}>&nbsp;in Chicago, IL</span>.
      </aside>
      <img
        className={styles.chicagoFlag}
        src={ChicagoFlag}
        alt="Flag of Chicago Illinois"
      />
    </footer>
  )
}

export default Footer
