import { selector } from 'recoil'

import { activeEventTypes } from '../atoms'

export default selector({
  key: 'totalEventChance',
  get: ({ get }) => {
    return get(activeEventTypes).map(eventType => {
      return eventType.chance
    }).reduce((sum, current) => sum + current, 0)
  }
})