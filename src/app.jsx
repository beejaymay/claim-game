import React from 'react'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className='App'>
      <Router>
        <RecoilRoot>
          <Switch>
            <Route path='/'>
              <h1>Claim Game</h1>
            </Route>
          </Switch>
        </RecoilRoot>
      </Router>
    </div>
  )
}
