import React, {Component} from 'react';
import Reflux from 'reflux';
import AppStore from '../stores/AppStore';
import Actions from '../actions/Actions';
import '../styles/Home.css';

class Home extends Reflux.Component {
    constructor(){
        super();
        // Declaramos state para que pueda acceder a los stados en la store
        this.state = {};
        // Conectamos con la store
        this.store = AppStore;
        // Variables de estado que se van a compartir entre el store y el home
        this.storeKeys = ['data'];
        this.showUsers = this.showUsers.bind(this);
    }

    showUsers(e){
        Actions.getUsers();
    }

    render() {
        return (
            <div className="Home">
                <div className="Home-header-box">
                    <h2 className="Home-header-title">Bienvenido</h2>
                    <button
                        onClick={ this.showUsers }
                        className="Home-header-button">Mostar Usuarios</button>
                </div>
            </div>
        );
    }
}

export default Home;
