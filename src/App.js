import React, {Component} from 'react';
import './App.css';

// Router
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Views
import Home from './views/Home';
import Login from './views/Login';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Login}/>
                    <Route path="/home" component={Home}/>
                </div>
            </Router>
        );
    }
}

export default App;
