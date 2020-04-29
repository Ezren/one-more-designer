import React, { useState } from 'react'

import { LayoutA, LayoutB, MobileLayout } from '.'
import { getRandomInt } from '../utils'
import { useWindowWidth, useRandomProfile, usePictures } from '../hooks'

const Layouts = () => {
  const windowWidth = useWindowWidth()
  const [layout, setLayout] = useState(getRandomInt(2))
  const [justification, setJustification] = useState(getRandomInt(2))
  const [profile, rerollProfile] = useRandomProfile()
  const [pictures, rerollPictures] = usePictures(4)

  const reroll = () => {
    setLayout(getRandomInt(2))
    setJustification(getRandomInt(2))
    rerollProfile()
    rerollPictures()
  }

  const layouts = [
    <LayoutA
      key="layout-a"
      justification={justification}
      profile={profile}
      pictures={pictures}
      reroll={reroll}
    />,
    <LayoutB
      key="layout-b"
      justification={justification}
      profile={profile}
      pictures={pictures}
      reroll={reroll}
    />,
  ]

  return windowWidth > 500 ? (
    layouts[layout]
  ) : (
    <MobileLayout profile={profile} pictures={pictures} reroll={reroll} />
  )
}

export default Layouts
