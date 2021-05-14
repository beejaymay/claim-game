import React from 'react'
import { useRecoilValue } from 'recoil'

import { feed } from '../recoil/feed'

import './feed.css'

export default function Feed() {

  const _feed = useRecoilValue(feed)

  return (
    <div className='feed'>
      Here's what happened:
      { _feed.map((item, idx) => {
        return <div key={`item${idx}`}>{item}</div>
      })}
    </div>
  )
}