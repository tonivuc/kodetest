import React from 'react';
import { Segment } from 'semantic-ui-react';
import './ListItem.css';

export default function ListItem(props) {
  return (
    <Segment>
        <p className="albumTitle">{props.title}</p>
        <p>Uploader: {props.name} , <span className="emailText">{props.email}</span> </p>
    </Segment>
  );
}