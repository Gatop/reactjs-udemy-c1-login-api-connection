import Reflux from 'reflux';
import Actions from '../actions/Actions.js';

class AppStore extends Reflux.Store {
    constructor() {
        super();
        // link de las acciones disponibles en el archivo actions.js
        this.listenables = Actions;
        // Estado que va a ser leido por el home
        this.state = {
            data: []
        }
    }

    getUsers() {
        alert("get_users");
    }
}

export default AppStore;
