import React from "react";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { signIn, signOut } from  '../actions'



class GoogleAuthIdentity extends React.Component {
    componentDidMount() {
        const signedIn = localStorage.getItem('signedIn')

        if(signedIn){
            document.getElementById('signInDiv').hidden = true
        }
        /*global google*/ 
        
            google.accounts.id.initialize({
                client_id: '700002742798-46vsvj4e6k4rbdqdn64uljoptb3ma9fp.apps.googleusercontent.com',
                callback: this.handleSignIn
            })
            google.accounts.id.renderButton(
                document.getElementById("signInDiv"),
                { theme: "outline", size: "default" }
            )
        

    }

    onAuthChange = (isSignedIn, userObject) => { 
        if(isSignedIn) {
            this.props.signIn(userObject.sub);
            
        } else {
            this.props.signOut();
            
        }
    }

    handleSignIn = (response) => {
        var userObject = jwt_decode(response.credential)
        const isSignedIn = true;
        const userId = userObject.sub

        this.onAuthChange(isSignedIn, userObject)

        localStorage.setItem('signedIn', 'true')
        localStorage.setItem('userId', userId )

        document.getElementById('signInDiv').hidden = true
    }

    handleSignOut= () => {
        const isSignedIn = false;

        localStorage.clear()
        this.onAuthChange(isSignedIn)
        document.getElementById('signInDiv').hidden = false
    }

    renderAuthButton() {
        const signedIn = localStorage.getItem('signedIn')
        if (signedIn == null) {
            return null
            
        }else if (signedIn) {
            
            return (
                <button id="signOutButton" onClick={ (e) => this.handleSignOut(e)} className="ui blue google button" style={{ marginTop: 15, marginRight: 10}} >
                <i className="google icon"/>
                Sign Out
                </button>
            )
        } else {
            return (
            <div>
                <div id="signInDiv" ></div>
            </div>        
            )
        }
    }

    render () {
            return (
            <div>
                <div id="signInDiv" style={{ marginTop: 10, marginRight: 10}}></div>
                <div>{ this.renderAuthButton() }</div>
            </div>
                
            ) 
    }
}

const mapStateToProps = (state) => { 
    return {isSignedIn: state.auth.isSignedIn,}
}
export default connect(mapStateToProps, {signIn, signOut}) (GoogleAuthIdentity);

