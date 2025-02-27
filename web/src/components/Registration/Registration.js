import React from 'react';
import { Link } from 'react-router-dom';
import { handleChange } from '../../Helpers'
import $ from 'jquery';


class Registration extends React.Component {
    constructor()
    {
        super()
        this.state = {
            username: '',
            password: '',
            confirm: '',
            response: '',
            loggedIn: false 
        }
        
        this.handleChange = handleChange.bind(this);
        this.onRegister = this.onRegister.bind(this)
    }
    onRegister() {
        this.setState({response:''});
        if(!(this.state.password === this.state.confirm)) this.setState({Response: "Passwords do not match"});
        $.post(`${process.env.REACT_APP_API_URL}/user/register`,{'username': this.state.username,'password':this.state.password}).then(response => {
            if (response == 'existUser') this.setState({response: "This User already exists"});
            else if( response == 'idInvalid') this.onRegister();
            else this.setState({loggedIn: true});
        });
    }

    render()
    {
        return (
        <div className="container">
            <h1>Register</h1>

            <label htmlFor="login-user">username</label>
            <input 
                type="text" 
                className="form-control" 
                id="login-user" 
                name="username" 
                onChange={this.handleChange}
                value={this.state.username}
            ></input>
            
            <label htmlFor="login-pass">password</label>
            <input 
                type="password" 
                className="form-control" 
                id="login-pass" 
                name="password" 
                onChange={this.handleChange}
                value={this.state.password}
            ></input>
            
            <label htmlFor="login-confirm">confirm password</label>
            <input 
                type="password" 
                className="form-control" 
                id="login-confirm" 
                name="confirm" 
                onChange={this.handleChange}
                value={this.state.confirm}
            ></input>
            
            <div id="login-message" className={this.props.error ? "alert alert-danger" : ""}>{this.props.error}</div>
            <button className="btn btn-success" onClick={this.onRegister}>Register</button>
            <div id="Response">{this.state.response}</div>
            
            <p>Already have an account? Login <Link to="/login">here</Link></p>
        </div>
        )
    }   
}



export default Registration;