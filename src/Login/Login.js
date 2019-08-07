import React, { Component } from 'react';
import './Login.css';

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    
        this.handleChange = this.handleChange.bind(this);
          }

      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
    render () {
  
        return (
        
                <div>
                   <h3> Username: </h3>
                    <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                    <h3>Password: </h3>
                    <input name="password" type="text" value={this.state.password} onChange={this.handleChange}/>
                    <button className="login_button" onClick={this.props.handleClick(this.state.username, this.state.password)}>
                    Submit
                  </button>
                </div>
        ) ;
    }
}

export default Login;