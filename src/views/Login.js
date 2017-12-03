import React, {Component} from 'react';
import '../styles/Login.css';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(){
        super();

        // estados
        this.state = {
            username: '',
            password: '',
            isLogged: false
        }

        // Metodos
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        // Validar para dejar ingresar al home
        // Se valida con el estado is logged y se rendera el componente
        if (this.state.username === "admin" && this.state.password === "admin123") {
            this.setState({
                username: '',
                password: '',
                isLogged: true
            });
        } else {
            alert("credenciales invalidas");
            this.setState({
                username: '',
                password: '',
                isLogged: false
            });
        }

    }

    render() {
        return (
            <div className="Login">
                {this.state.isLogged ?
                    <Redirect to="/home" />
                    :
                    <div className="Login-box">
                        <form onSubmit={this.onSubmit}>
                            <div className="Login-box-formbox">
                                <label className="Login-box-username">Username: </label>
                                <input
                                    type="text"
                                    className="Login-username-input"
                                    value={ this.state.username }
                                    onChange={ (e) => { this.setState({ username: e.target.value }) }}/>
                            </div>
                            <div className="Login-box-formbox">
                                <label className="Login-box-password">Password: </label>
                                <input
                                    type="password"
                                    className="Login-password-input"
                                    value={ this.state.password }
                                    onChange={ (e) => { this.setState({ password: e.target.value }) }}/>
                            </div>
                            <button type="submit" className="Login-submit">Login</button>
                        </form>
                    </div>
                }
            </div>
        );
    }
}

export default Login;
