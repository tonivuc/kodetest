import React, { Component } from 'react';
import ListItem from '../listItem/ListItem.jsx';

export default class List extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
          <ListItem></ListItem>
      </ul>
    )
  }
}

