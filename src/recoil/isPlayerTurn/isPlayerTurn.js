import { atom, useSetRecoilState } from 'recoil'

export default atom({
  key: 'isPlayerTurn',
  default: true
})