import React from 'react'
import { useRecoilValue, atom } from 'recoil'

import Player from '../player/player'
import World from '../world/world'
import Feed from '../feed/feed'

export default function Game() {
  return (
    <>
      <Player />
      <World />
      <Feed />
    </>
  )
}