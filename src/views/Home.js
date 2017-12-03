import React from 'react';
import Reflux from 'reflux';
import AppStore from '../stores/AppStore';
import Actions from '../actions/Actions';
import '../styles/Home.css';

// Importamos el componente Card
import Card from '../components/Card';

// Extends from reflux component
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

    // El metodo llama a la accion get Users que esta definida en el store
    showUsers(e){
        Actions.getUsers();
    }

    render() {
        // Por cada persona que traiga en data cada vez que se haga un render llamamos una card
        let people = this.state.data.map((currentValue, index, array) => {
            console.log(currentValue);
            return(
                <Card
                    key={index}
                    id={currentValue.id}
                    first_name={currentValue.first_name}
                    last_name={currentValue.last_name}
                    avatar={currentValue.avatar}/>
            );
        });
        return (
            <div className="Home">
                <div className="Home-header-box">
                    <h2 className="Home-header-title">Bienvenido</h2>
                    <button
                        onClick={ this.showUsers }
                        className="Home-header-button">Mostar Usuarios</button>
                </div>
                <div className="Home-body">
                    { people }
                </div>
            </div>
        );
    }
}

export default Home;
