import React from 'react'
import styles from './App.css'
import TogglingMessage from './components/TogglingMessage'
import ExampleAPICall from './components/ExampleAPICall'

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
      </div>
    )
  }

}