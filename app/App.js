import React from 'react'
import styles from './App.css'
import TogglingMessage from './components/TogglingMessage'

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
      </div>
    )
  }

}
