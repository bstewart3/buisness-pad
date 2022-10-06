
import React from "react";
import { connect } from "react-redux";
import { fetchBusinesses } from "../../actions";
import { Link }  from 'react-router-dom'

class businessList extends React.Component {
    componentDidMount() {
        this.props.fetchBusinesses()
    }

    renderAdmin(business) {
        const currentUserId = localStorage.getItem('userId')
        if (business.userId === currentUserId) {
            return (
                <div className="right floated content">
                    <Link className="ui button primary" to={`/business/edit/${business.id}`}>
                        Edit
                    </Link>
                    <Link to={`/business/delete/${business.id}`} className="ui button negative">
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
                    <h3>Login to view your business ideas. </h3>
                </div>
            )
        } else {
            return this.props.businesses.map(business => {
                if(userId === business.userId){
                    return (
                        <div className="item" key={business.id}>
                            {this.renderAdmin(business)}
                            <i className="large middle aligned icon building"></i>
                            <div className="content">
                                <h3>
                                    <Link to={`/business/show/${business.id}`}>{business.title}</Link>
                                </h3> 
                                <div className="description">
                                    {business.description}
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
                    <Link to="/business/new" className="ui button primary">
                        Add A business Idea
                    </Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="card">
                <div className="ui container">
                    <h2>business Ideas:</h2>
                    <div className="ui celled list">{this.renderList()}</div>
                    {this.renderCreate()}
                </div>
            </div>

        )
    }
}


const mapState = (state) => {
    
    return {
            businesses: Object.values(state.businesses),
        }
}

export default connect(mapState, { fetchBusinesses })(businessList);