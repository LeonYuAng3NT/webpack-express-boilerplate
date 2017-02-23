import React from 'react'
import styles from './App.css'
import TogglingMessage from './components/TogglingMessage'
import ExampleAPICall from './components/ExampleAPICall'
import ExampleSendRequest from './components/ExampleSendRequest'
import SignUp from './components/Login/login'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'foo'
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <TogglingMessage />
        <ExampleAPICall />
        <ExampleSendRequest />
        <SignUp/>

      </div>
    )
  }

}