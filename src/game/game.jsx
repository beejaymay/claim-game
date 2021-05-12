import React from 'react'
import { useRecoilState } from 'recoil'

import Player from '../player/player'
import World from '../world/world'
import Feed from '../feed/feed'

import { policies, worldDamage, playerDamage, isWorldTurn, isPlayerTurn, feed } from './atoms'

export default function Game() {
  const [_playerDamage, setPlayerDamage] = useRecoilState(playerDamage)
  const [_worldDamage, setWorldDamage] = useRecoilState(worldDamage)
  const [_isPlayerTurn, setIsPlayerTurn] = useRecoilState(isPlayerTurn)
  const [_isWorldTurn, setIsWorldTurn] = useRecoilState(isWorldTurn)
  const [_feed, setFeed] = useRecoilState(feed)
  const [_policies, setPolicies] = useRecoilState(policies)

  const randomDamage = () => {
    return Math.ceil(Math.random() * 10)
  }

  const clobberWorld = () => {
    let dmg = randomDamage() + 10
    let didHit = (Math.random() > 0.5)
    if (didHit) {
      setWorldDamage(_worldDamage + dmg)
      setFeed([..._feed, `Player CLOBBERED World for ${dmg} damage!`])
    } else {
      setFeed([..._feed, `Player tried to CLOBBER World, but missed!`])
    }
    setIsPlayerTurn(false)
    setTimeout(() => {
      setIsWorldTurn(true)
    }, 500)
  }

  const bonkWorld = () => {
    let dmg = randomDamage()
    setWorldDamage(_worldDamage + dmg)
    setFeed([..._feed, `Player bonked World for ${dmg} damage.`])
    setIsPlayerTurn(false)
    setTimeout(() => {
      setIsWorldTurn(true)
    }, 500)
  }

  const bonkPlayer = () => {
    let protection = _policies[0] ? _policies[0].protection : 0;
    let dmg = randomDamage() - protection
    dmg = dmg < 0 ? 0 : dmg
    setPlayerDamage(_playerDamage + dmg)
    setFeed([..._feed, `World bonked Player for ${dmg} damage.${protection > 0 ? " (protected from " + protection + " damage)" : ""}`])
    setIsWorldTurn(false)
    setIsPlayerTurn(true)
  }

  const addPolicy = () => {
    setPolicies([..._policies, {
      type: 'homeowners',
      protection: 5
    }])
    setFeed([..._feed, `Player bought a 5 protection policy.`])
    setIsPlayerTurn(false)
    setTimeout(() => {
      setIsWorldTurn(true)
    }, 500)
  }

  return (
    <>
      <Player damage={_playerDamage} addPolicy={addPolicy} bonk={bonkWorld} clobber={clobberWorld} isTurn={_isPlayerTurn} />
      <World damage={_worldDamage} bonk={bonkPlayer} isTurn={_isWorldTurn} />
      <Feed feed={_feed} />
    </>
  )
}