import React, { Component } from 'react';

class AddseasonE extends Component {
   
    render() { 
        return ( 
            <div class="explicit">
            <div class="row">
            <div class="col-md-offset-5 col-md-3">
            <div class="form-login">
            <h4>Add Season.</h4>
            <input type="text" id="userName" class="form-control input-sm chat-input" placeholder="Name" />
          
            <input type="text" id="userid" class="form-control input-sm chat-input" placeholder="Id" />
  
            <div class="wrapper">
            <span class="group-btn">     
                <a href="/season" class="btn btn-primary btn-md">submit <i class="fa fa-sign-in"></i></a>
            </span>
            </div>
            </div>
        
            </div>
            </div>
            </div>
         );
    }
}
 
export default AddseasonE;