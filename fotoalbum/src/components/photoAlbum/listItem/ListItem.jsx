import React, { Component } from 'react';
//import './ListItem.css';

export default class ListItem extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="addedEquipmentListElement">
            <p>{this.props.title}</p>
            <p>{this.props.name} and {this.props.email}</p>
        </div>
    )
  }
}
