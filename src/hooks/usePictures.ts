import { useState } from 'react'

import img01 from '../assets/pictures/0001-01.png'
import img02 from '../assets/pictures/0002-01.png'
import img03 from '../assets/pictures/0003-01.png'
import img04 from '../assets/pictures/0004-01.png'
import img05 from '../assets/pictures/0005-01.png'
import img06 from '../assets/pictures/0006-01.png'
import img07 from '../assets/pictures/0007-01.png'
import img08 from '../assets/pictures/0008-01.png'
import img09 from '../assets/pictures/0009-01.png'
import img10 from '../assets/pictures/0010-01.png'
import img11 from '../assets/pictures/0011-01.png'
import img12 from '../assets/pictures/0012-01.png'
import img13 from '../assets/pictures/0013-01.png'
import img14 from '../assets/pictures/0014-01.png'

const fileNames = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
  img11,
  img12,
  img13,
  img14,
]

const pick = (n: number) => {
  if (n > fileNames.length) return

  return fileNames.sort(() => 0.5 - Math.random()).slice(0, n)
}

const usePictures = (numberPicked: number): [string[], () => void] => {
  const [files, setFiles] = useState(pick(numberPicked) ?? [])

  const reroll = () => {
    setFiles(pick(numberPicked) ?? [])
  }

  return [files, reroll]
}

export default usePictures
