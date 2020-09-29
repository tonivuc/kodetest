import React, { Component } from 'react';
//import './ListItem.css';

export default class ListItem extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="addedEquipmentListElement">
            <p>Album title</p>
            <p>User Name and email</p>
        </div>
    )
  }
}
