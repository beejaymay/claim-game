import React from 'react'
import { useRecoilState, atom } from 'recoil'

import Player from '../player/player'
import World from '../world/world'
import Feed from '../feed/feed'

import { policies } from './atoms/policies'

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
  const [_policies, setPolicies] = useRecoilState(policies)

  const randomDamage = () => {
    return Math.ceil(Math.random() * 10)
  }

  const clobberWorld = () => {
    let dmg = randomDamage() + 10
    let didHit = (Math.random() > 0.5)
    if (didHit) {
      setWorldDamage(worldDamage + dmg)
      setFeed([...feed, `Player CLOBBERED World for ${dmg} damage!`])
    } else {
      setFeed([...feed, `Player tried to CLOBBER World, but missed!`])
    }
    setIsPlayerTurn(false)
    setTimeout(() => {
      setIsWorldTurn(true)
    }, 500)
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
    let protection = _policies[0] ? _policies[0].protection : 0;
    let dmg = randomDamage() - protection
    dmg = dmg < 0 ? 0 : dmg
    setPlayerDamage(playerDamage + dmg)
    setFeed([...feed, `World bonked Player for ${dmg} damage.${protection > 0 ? " (protected from " + protection + " damage)" : ""}`])
    setIsWorldTurn(false)
    setIsPlayerTurn(true)
  }

  const addPolicy = () => {
    setPolicies([..._policies, {
      type: 'homeowners',
      protection: 5
    }])
    setFeed([...feed, `Player bought a 5 protection policy.`])
    setIsPlayerTurn(false)
    setTimeout(() => {
      setIsWorldTurn(true)
    }, 500)
  }

  return (
    <>
      <Player damage={playerDamage} addPolicy={addPolicy} bonk={bonkWorld} clobber={clobberWorld} isTurn={isPlayerTurn} />
      <World damage={worldDamage} bonk={bonkPlayer} isTurn={isWorldTurn} />
      <Feed feed={feed} />
    </>
  )
}