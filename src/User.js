import React, {Component} from 'react';

class User extends Component {  
    render(){
        const { user } = this.props
        return(
            <div>
                <h3>GitHub User Information</h3> 
                <div className="card blue lighten-2 white-text">
                    <div className="card-content">
                    <h4>{user.name}</h4>
                    <h4>{user.location}</h4>
                    </div>
                </div>
          </div>
        );
    }

} 

export default User;