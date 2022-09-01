
import React from "react";
import { connect } from "react-redux";
import { fetchBuisnesses } from "../../actions";
import { Link }  from 'react-router-dom'

class BuisnessList extends React.Component {
    componentDidMount() {
        this.props.fetchBuisnesses()
    }

    renderAdmin(buisness) {
        const currentUserId = localStorage.getItem('userId')
        if (buisness.userId === currentUserId) {
            return (
                <div className="right floated content">
                    <Link className="ui button primary" to={`/buisness/edit/${buisness.id}`}>
                        Edit
                    </Link>
                    <Link to={`/buisness/delete/${buisness.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
            )
        }
    }


    renderList() {
        const userId = localStorage.getItem('userId');
        
        if (userId === null) {
            return (
                <div>
                    <h3>Login to view your buisness ideas. </h3>
                </div>
            )
        } else {
            return this.props.buisnesses.map(buisness => {
                if(userId === buisness.userId){
                    return (
                        <div className="item" key={buisness.id}>
                            {this.renderAdmin(buisness)}
                            <i className="large middle aligned icon building"></i>
                            <div className="content">
                                <h3>
                                    <Link to={`/buisness/show/${buisness.id}`}>{buisness.title}</Link>
                                </h3> 
                                <div className="description">
                                    {buisness.description}
                                </div>
                                
                            </div>
                        </div>
                    )
                } else {
                    return null
                }
            })
        }

 
        

    }


    renderCreate() {
        const isSignedIn = localStorage.getItem('signedIn')

        if(isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/buisness/new" className="ui button primary">
                        Add A Buisness Idea
                    </Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="card">
                <div className="ui container">
                    <h2>Buisness Ideas:</h2>
                    <div className="ui celled list">{this.renderList()}</div>
                    {this.renderCreate()}
                </div>
            </div>

        )
    }
}


const mapState = (state) => {
    
    return {
            buisnesses: Object.values(state.buisnesses),
        }
}

export default connect(mapState, { fetchBuisnesses })(BuisnessList);