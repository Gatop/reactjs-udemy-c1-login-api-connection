import Reflux from 'reflux';
import Actions from '../actions/Actions.js';
import * as HTTP from '../services/http'

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

    // Utilizamos  el servicio http que creamos para lanzar un request a la url
    // La respuesta la asignamos a la data que va a ser utilizada por la vista
    // funciona con una promesa
    getUsers() {
        const self = this;
        HTTP.get('https://reqres.in/api/users?page=2')
        .then((response) => {
            self.setState({
                data: response.data
            });
        })
    }
}

export default AppStore;
