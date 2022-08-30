import React from "react";
import { connect } from "react-redux";
import { fetchBuisness } from '../../actions' ;


class BuisnessShow extends React.Component {
    componentDidMount= () => {
        this.props.fetchBuisness(this.props.match.params.id);

    }

    render(){
        const buisness = this.props.buisness
        if(!this.props.buisness){
            <div>Loading...</div>
        } else {
            return (
            <div className="ui celled list">
                
                <h2>{buisness.title}</h2>
            
            <div className="item">
                <h3>Buisness Description:</h3>
                <h4>{buisness.description}</h4>
            </div>
            
            <div className="item">
                <h3>Unique Value Proposition:</h3>
                <h4>{buisness.valueProp}</h4> 
            </div>
            
            <div className="item">
                <h3>Ideal Customers:</h3>
                <h4>{buisness.customers}</h4>
            </div>
            
            <div className="item">
                <h3>MVP ideas:</h3>
                <h4>{buisness.mvp}</h4>
            </div>

        </div>
            )
        }
        


    }
};


const mapState = (state,ownProps) =>  {
    return { buisness: state.buisnesses[ownProps.match.params.id] }
}

export default connect(mapState, { fetchBuisness })(BuisnessShow);