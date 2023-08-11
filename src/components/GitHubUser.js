import React, { Component } from 'react';

class GitHubUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/shreydivy')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching user data from GitHub API');
        }
        return response.json();
      })
      .then(user => {
        this.setState({ user });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const { user, error } = this.state;

    if (error) {
      return <p>Error: {error}</p>;
    }

    if (!user) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h2>GitHub User</h2>
        <p>Username: {user.login}</p>
        <p>Name: {user.name}</p>
        <p>AvatarURL: {user.avatar_url}</p>
        <img src={user.avatar_url} height={250} width={250} />
        <p>Location: {user.location}</p>
        <p>Public Repositories: {user.public_repos}</p>
        <p>Type: {user.type}</p>
        
        {/* Add more desired user information */}
      </div>
    );
  }
}

export default GitHubUser;