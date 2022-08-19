import React from "react";
import { Link } from "react-router-dom";
import GoogleAuthIdentity from "./GoogleAuthIdentity";


const Header = () => {
    return (
        <div className="ui secondary pointing menu">
                <Link to="/" className="item">
                    BuisnessPad
                </Link>
            <div className="right menu">

                <Link to="/" className="item">
                    Home 
                </Link>
                <Link to="/buisness/new" className="item">New</Link>
                <GoogleAuthIdentity />
            </div>
        </div>
    )
}

export default Header;