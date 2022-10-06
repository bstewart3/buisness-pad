import React from "react";
import { connect } from "react-redux";
import { fetchBusiness } from '../../actions' ;
import { Link } from "react-router-dom";


class businessShow extends React.Component {
    componentDidMount= () => {
        this.props.fetchBusiness(this.props.match.params.id);

    }

    render(){
        const business = this.props.business
        if(!this.props.business){
            <div>Loading...</div>
        } else {
            return (
            <div className="card">
                <div className="ui celled list">
                        <Link to="/"><i className="large middle aligned icon arrow circle left"></i></Link>    
                        <h2>{business.title}</h2>
                        
                        <div className="item">
                            <h3>business Description:</h3>
                            <h4>{business.description}</h4>
                        </div>
                        
                        <div className="item">
                            <h3>Unique Value Proposition:</h3>
                            <h4>{business.valueProp}</h4> 
                        </div>
                        
                        <div className="item">
                            <h3>Ideal Customers:</h3>
                            <h4>{business.customers}</h4>
                        </div>
                        
                        <div className="item">
                            <h3>MVP ideas:</h3>
                            <h4>{business.mvp}</h4>
                        </div>
                </div>
            </div>    
            
            )
        }
        


    }
};


const mapState = (state,ownProps) =>  {
    return { business: state.businesses[ownProps.match.params.id] }
}

export default connect(mapState, { fetchBusiness })(businessShow);