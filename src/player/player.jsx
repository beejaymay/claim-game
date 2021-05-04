import React from "react"
import { useRecoilValue, useSetRecoilState, atom } from 'recoil'



const playerState = atom({
  key: 'playerBonked',
  default: 0
})

const worldState = atom({
  key: 'worldBonked',
  default: 0
})

export default function Player() {

  const getPlayerState = useRecoilValue(playerState)
  const setWorldState = useSetRecoilState(worldState)

  const bonkWorld = () => {
    setWorldState((prevWorldState) => {
      return 
    })
  }

  return (
    <div>
      <div>Player (bonked for {getPlayerState} damage)</div>
      <button>BONK the World</button>
    </div>
  )
}