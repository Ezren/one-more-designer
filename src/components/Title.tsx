import React from 'react'
import { createUseStyles } from 'react-jss'

import { Profile } from '../hooks/useRandomProfile'

const useStyles = createUseStyles({
  title: ({ font }: Pick<Profile, 'font'>) => ({
    margin: 0,
    fontFamily: font,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 2.33,
    color: '#9b9b9b',
    textTransform: 'uppercase',
  }),
  '@media (max-width: 425px)': {
    title: {
      margin: '20px 0',
      padding: '0 40px',
    },
  },
})

const Title = ({ title, font }: Pick<Profile, 'title' | 'font'>) => {
  const styles = useStyles({ font })

  return <h1 className={styles.title}>{title}</h1>
}

export default Title
