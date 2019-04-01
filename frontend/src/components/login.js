import React, { Component } from 'react';
import { Button, Input } from 'antd';


class Login extends Component {
    state = { 
        email: '',
        pasword: '',
     }

    onchange = (e) =>{
        if(e.target.name === 'isAdmin'){
            this.setState({
                [e.target.name]: e.target.checked,
            }
            );
        }else{
            this.setState({
                [e.target.name]: e.target.value,
            });
        }

    }
    render() { 
        return (  );
    }
}
 
export default Login;