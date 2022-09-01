import React from "react";
import heroImage from '../assets/BuisnessPad.svg'

class LandingPage extends React.Component {
    render() {
        return (
                <div className="wrapper">
                    <div className="display-area">
                        <div className="container1">
                            <div className="left">
                                <div className="landing-txt">
                                    <h1 id="landingH1">Let your insights thrive.</h1>
                                    <h2 id="landingH2" >Share your knowledge with tomorrow.</h2>
                                    </div>
                                    <p id="landingP">
                                        The Wisdom Project was created to help document and share valuable knowledge from users around the world.
                                        Anonymously share your wisdoms and add to our growing encyclopedia of user insights.
                                    </p>
                                    <div className="landing-buttons">
                                        <button className="ui button secondary ">Try It</button>
                                        <button  className="ui button secondary">View A Sample</button>
                                    </div>
                                </div>
                            <div className="right">
                                <div className="hero">
                                    <img src={heroImage} alt=""></img>
                                </div> 
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default LandingPage