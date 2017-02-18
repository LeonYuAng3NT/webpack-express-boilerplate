import React from 'react'

export default class TogglingMessage extends React.Component {

	constructor(props) {
		console.log("[TogglingMessage]: in constructor")
		super(props)
		this.state = {
			test_msg: 'foo'
		}
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		console.log("[TogglingMessage]: foo" + this.state.test_msg)
	}
	
	render() {
		console.log("[TogglingMessage]: rendering")
		return (
			<div>
				<button onClick={this.toggle}>Click here !</button>
				YAYA KAWAII YO
			</div>
		)
	}
}