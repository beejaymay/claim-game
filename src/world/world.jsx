import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import { isWorldTurn } from '../recoil/isWorldTurn'
import { isPlayerTurn } from '../recoil/isPlayerTurn'
import { activePolicies } from '../recoil/activePolicies'
import { playerGold } from '../recoil/playerGold'
import { feed } from '../recoil/feed'

export default function World() {

  const [ _isWorldTurn, setIsWorldTurn ] = useRecoilState(isWorldTurn)
  const [ _isPlayerTurn, setIsPlayerTurn ] = useRecoilState(isPlayerTurn)
  const [ _playerGold, setPlayerGold ] = useRecoilState(playerGold)
  const [ _feed, setFeed ] = useRecoilState(feed)
  const _activePolicies = useRecoilValue(activePolicies)

  const collectPremiums = () => {
    const totalPremiums = _activePolicies.map(policy => policy.premium).reduce((acc, cur) => acc + cur)
    setPlayerGold(_playerGold - totalPremiums)
    setFeed([..._feed, `You paid ${totalPremiums} gold in total premiums.`])
  }

  useEffect(() => {
    if (_isWorldTurn) {
      if (_activePolicies.length > 0) {
        collectPremiums()
      }
      setIsWorldTurn(false)
      setIsPlayerTurn(true)
    }
  }, [_isWorldTurn])

  return (
    <div>
      <div>WORLD</div>
    </div>
  )
}