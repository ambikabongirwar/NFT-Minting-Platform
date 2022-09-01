import React, { Component } from 'react'
import Header from './Components/Header'
import AddNFTCard from './Components/Card'

export class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div style={{display: 'flex', justifyContent: 'center', margin: '0.4cm'}}>
        <AddNFTCard></AddNFTCard>
        </div>
      </div>
    )
  }
}

export default App