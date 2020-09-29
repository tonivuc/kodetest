import React from 'react';
import './App.css';
import AlbumList from './photoAlbum/list/AlbumList.jsx';

function App() {
  return (
    <div className="App">
      <main>
        <h1>List of albums</h1>
        <AlbumList></AlbumList>
      </main>
    </div>
  );
}

export default App;
