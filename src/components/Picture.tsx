import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fafbfd',
    border: '1px solid #d2e3f9',
    boxSizing: 'border-box',
    overflow: 'hidden',
    verticalAlign: 'middle',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
})

const Picture = ({ style, src }: { style: object; src: string }) => {
  const styles = useStyles()

  console.log(src)

  return (
    <div className={styles.container} style={style}>
      <img className={styles.image} src={src} alt="My portfolio piece" />
    </div>
  )
}

export default Picture
