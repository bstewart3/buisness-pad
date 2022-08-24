import React from "react";
import jwt_decode from "jwt-decode";

class GoogleAuthRefactor extends React.Component {
    state = { isSignedIn: null , user: null}
    

    handleCallbackResponse = (response) => {
        var userObject = jwt_decode(response.credential)
        console.log(userObject)
        this.setState({ isSignedIn: true, user: userObject })
        document.getElementById('signInDiv').hidden = true
    }

    componentDidMount() {
        /*global google*/ 
        google.accounts.id.initialize({
            client_id: '700002742798-46vsvj4e6k4rbdqdn64uljoptb3ma9fp.apps.googleusercontent.com',
            callback: this.handleCallbackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "default" }
        )

    }

    handleSignOut() {
        this.setState({ isSignedIn: null, user: null })
        document.getElementById('signInDiv').hidden = false
    }



    // onSignInClick = () =>{
    //     this.auth.signIn()
    // }
    // onSignOutClick = () =>{
    //     this.auth.signOut()
    // }
    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return null
        }else if (this.state.isSignedIn) {
            return (
                <button id="signOutButton" onClick={ (e) => this.handleSignOut(e)} className="ui red google button" >
                <i className="google icon"/>
                Sign Out
                </button>
            )
        } else {
            return (
            <div>
                <div id="signInDiv"></div>
            </div>        
            )
        }
    }





    render () {
            return (
            <div>
                <div id="signInDiv"></div>
              
                <div>{ this.renderAuthButton() }</div>
            </div>
                
            ) 
    }
}

export default GoogleAuthRefactor