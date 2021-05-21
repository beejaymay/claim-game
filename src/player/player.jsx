import React, { useEffect } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

import { activePolicies } from '../recoil/activePolicies'
import { isPlayerTurn } from '../recoil/isPlayerTurn'
import { isWorldTurn } from '../recoil/isWorldTurn'
import { playerGold } from '../recoil/playerGold'
import { feed } from '../recoil/feed'
import { playerPaycheck } from '../recoil/playerPaycheck'

export default function Player() {

  const [ _activePolicies, setActivePolicies ] = useRecoilState(activePolicies)
  const [ _isPlayerTurn, setIsPlayerTurn ] = useRecoilState(isPlayerTurn)
  const [ _feed, setFeed ] = useRecoilState(feed)
  const [ _playerGold, setPlayerGold ] = useRecoilState(playerGold)
  const setIsWorldTurn = useSetRecoilState(isWorldTurn)
  const _playerPaycheck = useRecoilValue(playerPaycheck)

  const buyPolicy = (policy) => {
    setActivePolicies([..._activePolicies, policy])
    setFeed([..._feed, `You bought a ${policy.type} policy!`])
    setIsPlayerTurn(false)
    endTurn()
  }

  const payCheck = 15

  const skip = () => {
    setFeed([..._feed, `You ended your turn without changes.`])
    setIsPlayerTurn(false)
    endTurn()
  }

  const endTurn = () => {
    setIsPlayerTurn(false)
    setTimeout(() => {
      setIsWorldTurn(true)
    }, 500)
  }

  const payPlayer = () => {
    setPlayerGold(_playerGold + _playerPaycheck)
    setFeed([..._feed, `Your job paid you ${_playerPaycheck} gold.`])
  }

  const policy1 = {
    type: 'homeowners',
    premium: 2
  }

  useEffect(() => {
    if (_isPlayerTurn) {
      payPlayer()
    }
  }, [_isPlayerTurn])

  return (
    <div>
      <div>PLAYER (has {_playerGold} gold remaining)</div>
      <button disabled={!_isPlayerTurn} onClick={() => skip()}>End turn without changes</button><br />
      <button disabled={!_isPlayerTurn} onClick={() => buyPolicy(policy1)}>Buy a homeowners policy</button>
    </div>
  )
}