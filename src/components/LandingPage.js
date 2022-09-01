import React from "react";

class LandingPage extends React.Component {
    render() {
        return (
                <div className="wrapper">
                    <div className="display-area">
                        <div className="container">
                            <div className="left">
                                <div className="landing-txt">
                                    <h1>Let your insights thrive.</h1>
                                    <h2>Share your knowledge with tomorrow.</h2>
                                    </div>
                                    <p >
                                        The Wisdom Project was created to help document and share valuable knowledge from users around the world.
                                        Anonymously share your wisdoms and add to our growing encyclopedia of user insights.
                                    </p>
                                    <div className="landing-buttons">
                                        <button>Try It</button>
                                        <button>View A Sample</button>
                                    </div>
                                </div>
                            <div className="right">
                                <div className="hero">
                                    <img src='../assets/Creative_process_SVG.svg' alt=""></img>
                                </div> 
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default LandingPage