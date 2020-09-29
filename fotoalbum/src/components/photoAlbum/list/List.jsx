import React, { Component } from 'react';
import ListItem from '../listItem/ListItem.jsx';

export default class List extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then((data) => {
      this.setState({ albums: data })
    })
    .catch(console.log)

    console.log(this.state);
  }

  render() {
    return (
      <ul>
          {console.log("Inside render: ",this.state)}
          {this.state.albums.map(album => (
              <ListItem key={album.id} title={album.title}></ListItem>
          ))}
      </ul>
    )
  }
}

