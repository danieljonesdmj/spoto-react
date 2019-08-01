import React from 'react';
import './App.css';

class NewPlaylist extends React.Component {
  render(){
    return (
      <div style={{width: '40%', display: 'inline-block'}}> 
        <h2 style={{color: 'blue'}}>New Playlist</h2>
      </div>
    )
  }
}

class GeneratePlaylist extends React.Component {
  render(){
    return (
      <div style={{width: '40%', display: 'inline-block'}}> 
        <h2 style={{color: 'blue'}}>Generate Playlist</h2>
      </div>
    )
  }
}

class Filter extends React.Component {
  render(){
    return (
      <div style={{marginBottom: '60px', marginTop: '40px'}}> 
        <input type='text' placeholder='Filter Playlists..'/>
      </div>
    )
  }
}

class Playlist extends React.Component {
  render(){
    return (
      <div style={{width: '25%', display: 'inline-block'}}>
        <h3>Playlist name</h3>
        <h4>Genre</h4>
      </div>
    )
  }
}

function App() {
  return (
    <div className='App'>
      <h1 style={{'font-size': '54px', color: 'red'}}>Spoto</h1>
      <NewPlaylist/>
      <GeneratePlaylist/>
      <Filter/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
    </div>
  );
}

export default App;
