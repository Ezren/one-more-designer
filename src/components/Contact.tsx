import React from 'react'
import { createUseStyles } from 'react-jss'

import { Profile } from '../hooks/useRandomProfile'

const useStyles = createUseStyles({
  contact: ({ font }: Pick<Profile, 'font'>) => ({
    margin: '30px 0 0',
    fontFamily: font,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 2.33,
    textTransform: 'uppercase',

    '& a': {
      textDecoration: 'none',
      color: '#9b9b9b',

      '&:hover, &:focus': {
        textDecoration: 'underline',
      },
    },
  }),
  '@media (max-width: 425px)': {
    contact: {
      padding: '0 40px',
      overflowWrap: 'anywhere',
    },
  },
})

const Contact = ({
  email: { callToAction, handle },
  name,
  font,
}: Pick<Profile, 'email' | 'name' | 'font'>) => {
  const styles = useStyles({ font })
  const emailAddress = `${handle}@${name.first}${name.last}.com`
    .split(' ')
    .join('')
    .split("'")
    .join('')

  return (
    <h3 className={styles.contact}>
      <a href={`mailto:${emailAddress}`}>{`${callToAction} ${emailAddress}`}</a>
    </h3>
  )
}

export default Contact
