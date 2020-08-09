import React, { Component } from 'react';
import '../styles/Home.css';

class Home extends Component {
  render() {
    return (
        <div>
            <div className="home-page">
                <div className="party">
                    <h1 style={{fontSize: '48px'}}> <b>Party</b> with a <b>Purpose</b></h1>
                    {/*<button id="button" type="button" class="btn btn-lg">Contact</button>*/}
                </div>
            </div>
        </div>
    );
  }
}

export default Home;