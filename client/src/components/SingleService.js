import React, {Component} from 'react';

/* eslint-disable */

class SingleService extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{textAlign: 'center', marginTop:'10px'}} className="single-service">
                <img src={this.props.img}/>
                <h4>{this.props.title}</h4>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default SingleService;