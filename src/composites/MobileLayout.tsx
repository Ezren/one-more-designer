import React from 'react'
import { createUseStyles } from 'react-jss'

import { Nav, Title, Name, Bio, Contact, Picture, Footer } from '../components'
import { LayoutProps } from './common'

const useStyles = createUseStyles({
  container: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: 'auto auto 70px',
    gridTemplateAreas: `
      'main'
      'picture'
      'footer'`,
    backgroundColor: '#fff',
  },
  main: {
    display: 'grid',
    gridArea: 'main',
    alignContent: 'flex-start',
    justifyItems: 'flex-start',
    marginBottom: 40,
  },
  pictures: {
    display: 'grid',
    gridArea: 'picture',
    gridTemplateRows: '1fr 1fr 1fr',
  },
})

const MobileLayout = ({
  reroll,
  profile,
  pictures,
}: Omit<LayoutProps, 'justification'>) => {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Nav reroll={reroll} font={profile.font} />
        <Name name={profile.name} font={profile.font} />
        <Title title={profile.title} font={profile.font} />
        <Bio bio={profile.bio} font={profile.font} />
        <Contact
          email={profile.email}
          name={profile.name}
          font={profile.font}
        />
      </main>
      <section className={styles.pictures}>
        <Picture
          style={{ display: 'grid', gridRow: 1, height: '75vw' }}
          src={pictures[0]}
        />
        <Picture
          style={{
            display: 'grid',
            gridRow: 2,
            height: '75vw',
            borderTop: 'none',
          }}
          src={pictures[1]}
        />
        <Picture
          style={{
            display: 'grid',
            gridRow: 3,
            height: '75vw',
            borderTop: 'none',
          }}
          src={pictures[2]}
        />
      </section>
      <Footer font={profile.font} />
    </div>
  )
}

export default MobileLayout
