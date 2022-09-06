import React from "react";
import { Link } from "react-router-dom";
import GoogleAuthIdentity from "./GoogleAuthIdentity";
import { connect } from "react-redux";


class Header extends React.Component {
    renderNavLinks() {
        const signedIn = localStorage.getItem('signedIn')
        if(!signedIn) {
            return (
                <div className="right menu">
                <Link to="/" className="item">
                    <h3>Home </h3>
                </Link>
                <GoogleAuthIdentity />
            </div>
            )
        } else {
            return (
                <div id="rightMenu" className="right menu">
                <Link to="/" className="item">
                    <h3>Home </h3>
                </Link>
                <Link to="/buisness/new" className="item">
                    <h3>New</h3>
                </Link>
                <GoogleAuthIdentity />
            </div>
            )
        }
    }


    render(){
        return (
            <div id='header' className="ui secondary pointing menu">
                    <Link to="/home" id='logo' className="item large">
                        <h3 style={{fontSize: 24}}> &#128221;BuisnessPad</h3>
                    </Link>
                {this.renderNavLinks()}
            </div>
        )  
    }

}
const mapState = (state) => {
    return {
            auth: state.auth,
        }
}

export default connect(mapState, {   })(Header);