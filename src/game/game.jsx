import React from 'react'
import { useRecoilState, atom } from 'recoil'

import Player from '../player/player'
import World from '../world/world'
import Feed from '../feed/feed'

const _worldDamage = atom({
  key: 'worldDamage',
  default: 0
})

const _playerDamage = atom({
  key: 'playerDamage',
  default: 0
})

const _isPlayerTurn = atom({
  key: 'isPlayerTurn',
  default: true
})

const _isWorldTurn = atom ({
  key: 'isWorldTurn',
  default: false
})

const _feed = atom({
  key: 'feed',
  default: []
})

export default function Game() {
  const [playerDamage, setPlayerDamage] = useRecoilState(_playerDamage)
  const [worldDamage, setWorldDamage] = useRecoilState(_worldDamage)
  const [isPlayerTurn, setIsPlayerTurn] = useRecoilState(_isPlayerTurn)
  const [isWorldTurn, setIsWorldTurn] = useRecoilState(_isWorldTurn)
  const [feed, setFeed] = useRecoilState(_feed)

  const randomDamage = () => {
    return Math.ceil(Math.random() * 10)
  }

  const bonkWorld = () => {
    let dmg = randomDamage()
    setWorldDamage(worldDamage + dmg)
    setFeed([...feed, `Player bonked World for ${dmg} damage.`])
    setIsPlayerTurn(false)
    setTimeout(() => {
      setIsWorldTurn(true)
    }, 500)
  }

  const bonkPlayer = () => {
    let dmg = randomDamage()
    setPlayerDamage(playerDamage + dmg)
    setFeed([...feed, `World bonked Player for ${dmg} damage.`])
    setIsWorldTurn(false)
    setIsPlayerTurn(true)
  }

  return (
    <>
      <Player damage={playerDamage} action={bonkWorld} isTurn={isPlayerTurn} />
      <World damage={worldDamage} action={bonkPlayer} isTurn={isWorldTurn} />
      <Feed feed={feed} />
    </>
  )
}