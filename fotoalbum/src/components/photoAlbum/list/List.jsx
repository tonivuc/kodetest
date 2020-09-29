import React, { Component } from 'react';
import ListItem from '../listItem/ListItem.jsx';
import './List.css';

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
      <ul className="listOfItems">
          {this.state.albums.map(album => (
              generateListItem(album, this.state.users)
          ))}
      </ul>
    )
  }
}

function generateListItem(album, users) {
  var correctUser =  users.filter(user => user.id === album.userId)[0];
  if (correctUser == undefined) {
    correctUser = {
      name: "User unknown", 
      email: ""};
  }
  return <ListItem key={album.id} title={album.title} name={correctUser.name} email={correctUser.email}></ListItem>;
}
