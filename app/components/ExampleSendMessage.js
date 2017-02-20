import React from 'react'

var count = 0

export default class ExampleSendMessage extends React.Component {

	constructor(props) {
		super(props)
		this.testSend = this.testSend.bind(this)
	}

	sendJson(json) {
		console.log("[ExampleSendMessage]: sending message")
		fetch('/test_send', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(json)
		})
	}

	testSend() {
		console.log("[ExampleSendMessage]: message %s", this.refs.myTextBox.value)
		var oJsonSend = {
			key: count,
			value: this.refs.myTextBox.value
		}
		count++
		this.sendJson(oJsonSend)
	}

	render() {
		console.log("[ExampleSendMessage]: rendering testmsg")

		return (
			<div>
				TestMessage: <input type="text" ref="myTextBox"/>
				<button onClick = {this.testSend}>Send It!</button>
			</div>
		)
	}
}