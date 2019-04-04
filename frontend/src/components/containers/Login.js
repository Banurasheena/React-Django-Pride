import React, { Component } from 'react';


class Login extends Component {
    // state = { 
    //     email: '',
    //     pasword: '',
    //  }

    // onchange = (e) =>{
    //    this.setState({
    //        [e.target.name]: e.target.value,
    //    });
    // }
    
    // onSubmit = async () => {
    //     const response = await this.props.mutate({
    //         variables: this.state,
    //     });
    //     console.log(response);
    // }

   render() {
        return (

            <div className="container">
            <div class="card card-login mx-auto text-center bg-dark">
            <div className="card-header mx-auto bg-dark">
                <span> <img src="https://www.ingredientsnetwork.com/farmerspride-comp252078.png " className="w-75" alt="Logo" /></span>
                
        

            </div>
        
            <div className="card-body">
                <form action="" method="post">
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i class="fas fa-user"></i></span>
                    </div>
                    <input type="text" name="email" class="form-control" placeholder="Email id" />
                </div>

                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                    </div>
                    <input type="password" name="password" className="form-control" placeholder="Password" />
                </div>

                <div className="form-group">
                    <input type="submit" name="btn" value="Login" className="btn btn-outline-success float-right login_btn" />
                </div>

                </form>
            </div>
            </div>
            </div>
           
        );
    }
}    

 
export default Login;