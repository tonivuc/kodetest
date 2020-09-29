import React, { Component } from 'react';
import ListItem from '../listItem/ListItem.jsx';

export default class List extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      users: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then((data) => {
      this.setState({ albums: data })
    })
    .catch(console.log)

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ users: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <ul>
          {this.state.albums.map(album => (
              someFunc(album, this.state.users)
          ))}
      </ul>
    )
  }
}

function someFunc(album, users) {
  var correctUser =  users.filter(user => user.id === album.userId);
  return <ListItem key={album.id} title={album.title} userName={correctUser.name} email={correctUser.email}></ListItem>;
}
