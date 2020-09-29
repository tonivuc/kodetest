import React, { Component } from 'react';
import ListItem from '../listItem/ListItem.jsx';
import './List.css';
import { checkFetchReponseStatus } from '../../../utils';

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
    .then(checkFetchReponseStatus)
    .then(res => res.json())
    .then((data) => {
      this.setState({ albums: data })
    })
    .catch((err) => {
      this.setState({albums: [{userId:0, id: 0, title: "Unable to retrieve albums "+err}]})
    });

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(checkFetchReponseStatus)
    .then(res => res.json())
    .then((data) => {
      this.setState({ users: data })
    })
    .catch((err) => {
      this.setState({users: [{id: 0, name: "Unable to retrieve users "+err}]})
    });
  }

  render() {
    return (
      <ul className="listOfItems">
          {this.state.albums.map(album => (
              generatedListItem(album, this.state.users)
          ))}
      </ul>
    )
  }
}

function generatedListItem(album, users) {
  var correctUser =  users.find(user => user.id === album.userId);
  if (correctUser == undefined) {
    correctUser = {
      name: "User unknown", 
      email: ""};
  }
  return <ListItem key={album.id} title={album.title} name={correctUser.name} email={correctUser.email}></ListItem>;
}
