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
        window.gapi.load('client:auth2', () => {
            google.accounts.id.initialize({
                client_id: '700002742798-46vsvj4e6k4rbdqdn64uljoptb3ma9fp.apps.googleusercontent.com',
                callback: this.handleSignIn
            })
            google.accounts.id.renderButton(
                document.getElementById("signInDiv"),
                { theme: "outline", size: "default" }
            )

            // this.auth = this.props;
            // this.onAuthChange(this.auth.isSignedIn)
            // console.log(this.auth)
            
    
            
        })

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

        this.onAuthChange(isSignedIn, userObject)

        localStorage.setItem('signedIn', 'true')
        

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
                <button id="signOutButton" onClick={ (e) => this.handleSignOut(e)} className="ui blue google button" >
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


const mapStateToProps = (state) => { 
    return {isSignedIn: state.auth.isSignedIn}
}
export default connect(mapStateToProps, {signIn, signOut}) (GoogleAuthIdentity);

