
import React from "react";

class GoogleAuth extends React.Component {
    state = { isSignedIn: null }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '700002742798-46vsvj4e6k4rbdqdn64uljoptb3ma9fp.apps.googleusercontent.com',
                scope: 'email',
                plugin_name: 'BuisnessPad'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange()
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }

    onSignInClick = () =>{
        this.auth.signIn()
    }
    onSignOutClick = () =>{
        this.auth.signOut()
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return null
        }else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button" >
                    <i className="google icon"/>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign In
                </button>
            )
        }
    }

    render () {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth