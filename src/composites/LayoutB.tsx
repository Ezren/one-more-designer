import React from 'react'
import { createUseStyles } from 'react-jss'

import { justifications, LayoutStyleProps, LayoutProps } from './common'

import { Nav, Title, Name, Bio, Contact, Picture, Footer } from '../components'

const useStyles = createUseStyles({
  container: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 60vh',
    gridTemplateRows: '1fr 1fr 1fr 70px',
    gridTemplateAreas: `
      'main   picture'
      'main   picture'
      'main   picture'
      'footer footer'`,
    backgroundColor: '#fff',
  },
  main: ({ justification }: LayoutStyleProps) => ({
    display: 'grid',
    gridArea: 'main',
    gridRow: '1 / span 3',
    alignContent: 'center',
    justifyItems: justification,
    textAlign: justification === 'flex-start' ? 'left' : justification,
    padding: '0 8%',
  }),
  pictures: {
    display: 'grid',
    gridRow: '1 / span 3',
    gridArea: 'picture',
    gridTemplateRows: '1fr 1fr',
  },
})

const LayoutB = ({ justification, reroll, profile, pictures }: LayoutProps) => {
  const styles = useStyles({ justification: justifications[justification] })

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Title title={profile.title} font={profile.font} />
        <Name name={profile.name} font={profile.font} />
        <Bio bio={profile.bio} font={profile.font} />
        <Contact
          email={profile.email}
          name={profile.name}
          font={profile.font}
        />
        <Nav reroll={reroll} font={profile.font} />
      </main>
      <section className={styles.pictures}>
        <Picture
          style={{
            display: 'grid',
            gridRow: 1,
          }}
          src={pictures[0]}
        />
        <Picture
          style={{
            display: 'grid',
            gridRow: 2,
          }}
          src={pictures[1]}
        />
      </section>
      <Footer font={profile.font} />
    </div>
  )
}

export default LayoutB
