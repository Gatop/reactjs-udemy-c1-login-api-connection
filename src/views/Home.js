import React, {Component} from 'react';
import '../styles/Home.css';

class Home extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div className="Home">
                <div className="home-header-box">
                    <h2 className="Home-header-title">Bienvenido</h2>
                    <button className="Home-header-button">Mostar Usuarios</button>
                </div>
            </div>
        );
    }
}

export default Home;
