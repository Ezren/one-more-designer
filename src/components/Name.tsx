import React from 'react'
import { createUseStyles } from 'react-jss'

import { Profile } from '../hooks/useRandomProfile'

const useStyles = createUseStyles({
  name: ({ font }: Pick<Profile, 'font'>) => ({
    margin: '20px 0 10px',
    fontFamily: font,
    fontSize: 64,
    fontWeight: 900,
    color: '#000',
  }),
  '@media (max-width: 425px)': {
    name: {
      margin: '20px 0 0',
      padding: '0 40px',
      fontSize: 36,
    },
  },
})

const Name = ({ name, font }: Pick<Profile, 'name' | 'font'>) => {
  const styles = useStyles({ font })

  return <h2 className={styles.name}>{`${name.first} ${name.last}`}</h2>
}

export default Name
