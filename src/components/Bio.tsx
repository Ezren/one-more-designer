import React from 'react'
import { createUseStyles } from 'react-jss'

import { Profile } from '../hooks/useRandomProfile'

const useStyles = createUseStyles({
  bio: ({ font }: Pick<Profile, 'font'>) => ({
    margin: 0,
    fontFamily: font,
    fontSize: 28,
    lineHeight: 1.57,
    color: '#9b9b9b',
  }),
  '@media (max-width: 425px)': {
    bio: {
      padding: '0 40px',
      fontSize: 18,
      lineHeight: 1.56,
    },
  },
})

const Bio = ({ bio, font }: Pick<Profile, 'bio' | 'font'>) => {
  const styles = useStyles({ font })

  return <article className={styles.bio}>{bio}</article>
}

export default Bio
