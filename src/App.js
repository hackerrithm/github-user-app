import React, { Component } from 'react';
import User  from './User'
import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {
        user: {}
    }

    getUser=() => {
        const name = this.refs.name.value;
        fetch(`http://api.github.com/users/${name}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    user: {
                        name: data.name,
                        location: data.location
                    }
                })
            })
    } 
    render() {
        const { user } = this.state;
        return (
            <div className = "App">
                <div className="container">
                    <div className="row">
                        <input type="text" id="text-entry" placeholder="enter username" ref="name"/>
                    </div>
                    <div className="row">
                        <button className="btn-flat red lighten-1 white-text" onClick={this.getUser}>User details</button>
                        
                    </div>
                    <div className="row">                       
                                <User user={user}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;