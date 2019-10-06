import React, { Component } from "react";

class App extends Component {
  state = {
    user: "",
    profilInfo: {
      login: "",
      avatar_url: "",
      type: "",
      name: "",
      blog: "",
      public_repos: 0,
      public_gists: 0,
      followers: 0,
      following: 0
    }
  };

  getUser = () => {
    fetch(`http://api.github.com/users/${this.state.user}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          profilInfo: {
            login: data.login,
            avatar_url: data.avatar_url,
            type: data.type,
            name: data.name,
            blog: data.blog,
            public_repos: data.public_repos,
            followers: data.followers,
            following: data.following
          }
        });
      });
  };

  handleChange = e => {
    this.setState({
      user: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <input
              type="text"
              id="text-entry"
              placeholder="enter username"
              ref="name"
              value={this.state.user}
              onChange={this.handleChange}
            />
          </div>
          <div className="row">
            <button
              className="btn-flat black border-rounded lighten-1 white-text"
              onClick={this.getUser}
            >
              User details
            </button>
          </div>
          <p>
            <b>Name</b> {this.state.profilInfo.name}
          </p>
          <p>
            <b>Type</b> {this.state.profilInfo.type}
          </p>
          <p>
            <b>Login</b> {this.state.profilInfo.login}
          </p>
          <p>
            <b>Avatar</b> <img src={this.state.profilInfo.avatar_url} />
          </p>
          <p>
            <b>Blog</b> {this.state.profilInfo.blog}
          </p>
          <p>
            <b>Public Repos</b> {this.state.profilInfo.public_repos}
          </p>
          <p>
            <b>Followers</b> {this.state.profilInfo.followers}
          </p>
          <p>
            <b>Following</b> {this.state.profilInfo.following}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
