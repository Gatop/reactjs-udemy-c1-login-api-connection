import Reflux from 'reflux';
import Actions from '../actions/Actions.js';

class AppStore extends Reflux.Store {
    constructor()[
        super();
        // link de las acciones disponibles en el archivo actions.js
        this.listenables = Actions;
    ]
}

export default AppStore;
