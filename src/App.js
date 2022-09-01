import React, { Component } from 'react'
import Header from './Components/Header'
import AddNFTCard from './Components/Card'
import MyNfts from './Components/MyNfts'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact>
            <AddNFTCard></AddNFTCard>
          </Route>
          <Route path="/myNfts">
            <MyNfts></MyNfts>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App