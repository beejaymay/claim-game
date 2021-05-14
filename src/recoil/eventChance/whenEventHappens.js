import { selector } from 'recoil'

import { activeEventTypes } from '../atoms'
import { totalEventChance } from './totalEventChance'

export default selector({
  key: 'whenEventHappens',
  get: ({ get }) => {
    return get(activeEventTypes).map(eventType => {
      return {
        ...eventType
        
      }
    })
  }
})