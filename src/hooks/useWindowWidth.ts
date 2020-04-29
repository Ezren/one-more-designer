import { useState, useEffect } from 'react'

const useWindowWidth = () => {
  const getWidth = () => window.innerWidth
  const [windowWidth, setWindowWidth] = useState(getWidth())

  useEffect(() => {
    const handleResize = () => setWindowWidth(getWidth())

    window.addEventListener('resize', handleResize)

    return function cleanup() {
      window.removeEventListener('resize', handleResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return windowWidth
}

export default useWindowWidth
