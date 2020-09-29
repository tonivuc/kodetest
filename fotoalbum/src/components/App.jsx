import React from 'react';
import './App.css';
import List from './photoAlbum/list/List.jsx';

function App() {
  return (
    <div className="App">
      <main>
        <h1>List of albums</h1>
        <List></List>
      </main>
    </div>
  );
}

export default App;
