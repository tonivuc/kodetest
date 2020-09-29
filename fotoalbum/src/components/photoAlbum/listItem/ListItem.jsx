import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import './ListItem.css';

export default class ListItem extends Component {

  render() {
    return (
        <Segment>
            <p className="albumTitle">{this.props.title}</p>
            <p>Uploader: {this.props.name} , <span className="emailText">{this.props.email}</span> </p>
        </Segment>
    )
  }
}
