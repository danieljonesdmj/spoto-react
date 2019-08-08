import React from "react";
import "./App.css";
import queryString from "querystring";

const appName = 'Spoto';

class NewPlaylist extends React.Component {
  render() {
    return (
      <div style={{ width: "40%", display: "inline-block" }}>
        <h2 style={{ color: "blue" }}>New Playlist</h2>
      </div>
    );
  }
}

class GeneratePlaylist extends React.Component {
  render() {
    return (
      <div style={{ width: "40%", display: "inline-block" }}>
        <h2 style={{ color: "blue" }}>Generate Playlist</h2>
      </div>
    );
  }
}

class Filter extends React.Component {
  render() {
    return (
      <div style={{ marginBottom: "60px", marginTop: "40px" }}>
        <input type="text" placeholder="Filter Playlists.." />
      </div>
    );
  }
}

class Playlist extends React.Component {
  render() {
    return (
      <div style={{ width: "25%", display: "inline-block" }}>
        <h3>Playlist name</h3>
        <h4>Genre</h4>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = Object.values(parsed).toString();

    fetch("https://api.spotify.com/v1/me", {
      headers: { Authorization: "Bearer " + accessToken }
    })
      .then(res => res.json())
      .then(data => this.setState({ user: { name: data.display_name } }));

    fetch("https://api.spotify.com/v1/me/playlists", {
      headers: { Authorization: "Bearer " + accessToken }
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          playlists: data.items.map(item => ({
            name: item.name,
            songs: []
          }))
        })
      );
  }

  render() {
    return (
      <div className="App">
        <h1 style={{ fontSize: "54px", color: "red" }}>{appName}</h1>
        <NewPlaylist />
        <GeneratePlaylist />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        {console.log("playlist", this.state.playlists.name)}
        {/* {console.log("name", this.state.user.name)}; */}
      </div>
    );
  }
}

export default App;
