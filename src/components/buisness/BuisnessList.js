
import React from "react";
import { connect } from "react-redux";
import { fetchBuisnesses } from "../../actions";
import { Link }  from 'react-router-dom'

class BuisnessList extends React.Component {
    componentDidMount() {
        this.props.fetchBuisnesses()
    }

componentDidUpdate(){
    console.log('i updated')
}
    renderAdmin(buisness) {
        const currentUserId = localStorage.getItem('userId')
        if (buisness.userId === currentUserId) {
            return (
                <div className="right floated content">
                    <Link className="ui button primary" to={`/buisness/edit/${buisness.id}`}>
                        Edit
                    </Link>
                    <button className="ui button negative">
                        Delete
                    </button>
                </div>
            )
        }
    }


    renderList() {

        return this.props.buisnesses.map(buisness => {
            return (
                <div className="item" key={buisness.id}>
                    {this.renderAdmin(buisness)}
                    <i className="large middle aligned icon building"></i>
                    <div className="content">
                        <h3>
                            {buisness.formValues.title}
                        </h3> 
                        <div className="description">
                            {buisness.formValues.description}
                        </div>
                        
                    </div>
                </div>
            )
        })
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
            <div>
                <h2>Buisness Ideas:</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }
}


const mapState = (state) => {
    console.log(Object.values(state.buisnesses))
    return {
            buisnesses: Object.values(state.buisnesses),
        }
}

export default connect(mapState, { fetchBuisnesses })(BuisnessList);