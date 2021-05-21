import React from 'react'
import { useRecoilState } from 'recoil'

import Player from '../player/player'
import World from '../world/world'
import Feed from '../feed/feed'

import { activePolicies } from '../recoil/activePolicies'
import { isWorldTurn } from '../recoil/isWorldTurn'

export default function Game() {
  return (
    <>
      <Player />
      <World />
      <Feed />
    </>
  )
}