import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
//import './ListItem.css';

export default class ListItem extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Segment className="addedEquipmentListElement">
            <p>{this.props.title}</p>
            <p>{this.props.name} and {this.props.email}</p>
        </Segment>
    )
  }
}
