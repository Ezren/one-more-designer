import React from 'react'
import { createUseStyles } from 'react-jss'

import { justifications, LayoutStyleProps, LayoutProps } from './common'

import { Nav, Title, Name, Bio, Contact, Picture, Footer } from '../components'

const useStyles = createUseStyles({
  container: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 4fr 1fr',
    gridTemplateRows: '140px auto auto 70px',
    gridTemplateAreas: `
      'header  header  header'
      'left    main    right'
      'picture picture picture'
      'footer  footer  footer'`,
    backgroundColor: '#fff',
  },
  header: {
    display: 'grid',
    gridColumn: '1 / span 3',
    girdArea: 'header',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 100,
  },
  main: ({ justification }: LayoutStyleProps) => ({
    display: 'grid',
    gridArea: 'main',
    alignContent: 'flex-start',
    justifyItems: justification,
    textAlign: justification === 'flex-start' ? 'left' : justification,
    height: '35vh',
    minHeight: 325,
    marginBottom: 100,
  }),
  pictures: {
    display: 'grid',
    gridColumn: '1 / span 3',
    gridArea: 'picture',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
  },
})

const LayoutA = ({ justification, reroll, profile, pictures }: LayoutProps) => {
  const styles = useStyles({ justification: justifications[justification] })

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Nav reroll={reroll} font={profile.font} />
      </header>
      <main className={styles.main}>
        <Title title={profile.title} font={profile.font} />
        <Name name={profile.name} font={profile.font} />
        <Bio bio={profile.bio} font={profile.font} />
        <Contact
          email={profile.email}
          name={profile.name}
          font={profile.font}
        />
      </main>
      <section className={styles.pictures}>
        <Picture
          style={{
            display: 'grid',
            gridRow: 1,
            gridColumn: 1,
            height: '40vw',
          }}
          src={pictures[0]}
        />
        <Picture
          style={{
            display: 'grid',
            gridRow: 1,
            gridColumn: 2,
            height: '40vw',
          }}
          src={pictures[1]}
        />
        <Picture
          style={{
            display: 'grid',
            gridRow: 2,
            gridColumn: 1,
            height: '40vw',
          }}
          src={pictures[2]}
        />
        <Picture
          style={{
            display: 'grid',
            gridRow: 2,
            gridColumn: 2,
            height: '40vw',
          }}
          src={pictures[3]}
        />
      </section>
      <Footer font={profile.font} />
    </div>
  )
}

export default LayoutA
