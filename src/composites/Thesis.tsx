import React from 'react'
import { createUseStyles } from 'react-jss'

import { Nav } from '../components'

const useStyles = createUseStyles({
  container: {
    height: 'auto',
    minHeight: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 750px 1fr',
    gridTemplateRows: '100px auto',
    gridTemplateAreas: `
      'header header header'
      'left   main   aside'`,
    backgroundColor: '#000',
  },
  header: {
    paddingRight: '8vw',
    display: 'flex',
    gridArea: 'header',
    gridColumn: '1 / span 3',
    justifyContent: 'flex-end',

    '& nav a, & nav button': {
      '&:hover, &:focus': {
        color: '#fff',
      },
    },
  },
  main: {
    display: 'grid',
    gridArea: 'main',
    alignContent: 'flex-start',
  },
  heading: {
    margin: '82px 0 40px',
    fontFamily: "'Source Sans Pro', sans-serif",
    fontSize: 64,
    fontWeight: 900,
    color: '#fff',
  },
  aside: {
    width: 44,
    paddingRight: '8vw',
    display: 'flex',
    gridArea: 'aside',
    justifyContent: 'center',
    justifySelf: 'flex-end',
    writingMode: 'vertical-rl',
    fontFamily: "'Source Sans Pro', sans-serif",
    fontSize: 21,
    textTransform: 'uppercase',
    lineHeight: 2.1,
    color: '#9b9b9b',

    '& a': {
      textDecoration: 'none',
      color: '#9b9b9b',

      '&:hover, &:focus': {
        textDecoration: 'underline',
        color: '#fff',
      },
    },
  },
  why: {
    '& p': {
      marginTop: 40,
      fontFamily: "'Source Sans Pro', sans-serif",
      fontSize: 28,
      lineHeight: 1.57,
      color: '#9b9b9b',

      '&:first-child': {
        marginTop: 0,
      },
    },

    '&:hover > p': {
      color: '#fff',
    },
  },
  who: {
    marginBottom: 160,

    '& p': {
      margin: '0 0 10px',
      fontFamily: "'Source Sans Pro', sans-serif",
      fontSize: 28,
      lineHeight: 1.57,
      color: '#9b9b9b',

      '& a': {
        textDecoration: 'none',
        color: '#9b9b9b',

        '&:hover, &:focus': {
          textDecoration: 'underline',
          color: '#fff',
        },
      },
    },
  },

  '@media (max-width: 425px)': {
    container: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '80px auto',
      gridTemplateAreas: `
        'header'
        'main'`,
    },
    header: {
      justifyContent: 'flex-start',
    },
    aside: {
      display: 'none',
    },
    heading: {
      margin: 0,
      padding: '0 40px 20px',
      fontSize: 36,
    },
    why: {
      padding: '0 40px 20px',

      '& p': {
        marginTop: 20,
        fontSize: 18,
        lineHeight: 1.56,
      },
    },
    who: {
      padding: '0 40px',

      '& p': {
        margin: '0 0 5px',
        fontSize: 18,
        lineHeight: 1.56,
      },
    },
  },
})

const Thesis = () => {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <h1 className={styles.heading}>Why?</h1>
        <article className={styles.why}>
          <p>
            For creative people, we as designers have been anything but when it
            comes to showcasing our work and ourselves.
          </p>
          <p>
            We hold conferences to celebrate our own “innovation,” but our
            portfolios offer only templated, mosaic showcases and groan-inducing
            “Thinker, Maker, Taco-aficionado” biographies.
          </p>
          <p>
            We dilute our work with pompous yet bland formats. We present our
            work as lazily and clichéd as the phrase cookie-cutter.
          </p>
          <p>
            The utility and minimal effort these templates provide is
            undeniable, but the disconnect between the words “creative” and
            “template” is glaring.
          </p>
        </article>
        <h1 className={styles.heading}>Who?</h1>
        <section className={styles.who}>
          <p>
            <a
              href="https://twitter.com/myloreyes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mylo Reyes
            </a>{' '}
            wrote, designed
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/jacob-stewart-29b9a980"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jake Stewart
            </a>{' '}
            developed
          </p>
        </section>
      </main>
      <aside className={styles.aside}>
        Follow&nbsp;
        <a
          href="https://twitter.com/myloreyes"
          target="_blank"
          rel="noopener noreferrer"
        >
          @myloreyes
        </a>
        &nbsp;on IG, Twit / Connect with&nbsp;
        <a
          href="https://www.linkedin.com/in/jacob-stewart-29b9a980"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jacob Stewart
        </a>
        &nbsp;on LinkedIn
      </aside>
    </div>
  )
}

export default Thesis
