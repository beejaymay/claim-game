import React from 'react'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Game from "./game/game"

export default function App() {
  return (
    <div className='App'>
      <Router>
        <RecoilRoot>
          <Switch>
            <Route path='/'>
              <Game />
            </Route>
          </Switch>
        </RecoilRoot>
      </Router>
    </div>
  )
}
