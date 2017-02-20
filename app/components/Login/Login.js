import React from 'react'

export default class ExampleSendRequest extends React.Component {
    constructor(props) {
        super(props)
    }

    testSignup(req,res) {

        console.log(req);
        fetch('/test_signup', {
            method: 'POST',

            body: JSON.stringify({
                userName: req.body.userName,
                password: req.body.password,
            })
        })
    }

    render() {
        console.log("[ExampleSendRequest]: rendering button")

        return (
            <div>
                <div><input type="text" name="userName" id="userName">username</input>></div>
                <div><input type="password" name="password" id="password">password</input>></div>
                <button onClick = {this.testSignup}>Sign up!</button>
            </div>
        )
    }
}