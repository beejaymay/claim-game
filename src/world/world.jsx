import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { activeEventTypes } from './atoms'
import { totalEventChance } from './selectors'

export default function World(props) {

  const { damage, bonk, isTurn } = props

  const [_activeEventTypes, setActiveEventTypes] = useRecoilState(activeEventTypes)
  const _totalEventChance = useRecoilValue(totalEventChance)

  const addActiveEventType = (eventType) => {
    setActiveEventTypes([...activeEventTypes, eventType])
  }

  const randomizeEvent = () => {
    const random = Math.random()
    let totalChance = 0
    let randomEvent = null
    _activeEventTypes.every(eventType => {
      totalChance += eventType.chance
      if (random <= totalChance) {
        randomEvent = eventType
        return false
      }
      return true
    })
    return randomEvent
  }

  useEffect(() => {
    if (isTurn) {
      bonk()
    }
  })

  return (
    <div>
      <div>WORLD (has taken {damage} damage.)</div>
    </div>
  )
}