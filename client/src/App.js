import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';
import {getTokenFromResponse} from './spotifyConfig'
import Content from './pages/Content';
import ProtectedRoute from './componants/ProtectedRoute';
import Sidebar from './componants/Sidebar';
import Home from './pages/Home';
import socketIOClient from 'socket.io-client';



const spotifyAPI = new SpotifyWebApi({
  ClientId: "ea28d4ba34f34b44b59c640052c6e098"
});

const socket = socketIOClient('https://spotifiq.herokuapp.com/');

function App(props) {
  const [token, setToken] = useState(null);
  console.log('THE TOKEN:', token);

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotifyAPI.setAccessToken(_token);
    }
  }, [])

  const [user, setUser] = useState(props.user)

  const addUser = user => {
    setUser(user);
  }
  const addToken = token => {
    setToken(token);
  }

  return (
    <div className="App">
   
      <Sidebar token={token} setToken={addToken} />
      {/* <Home token={token} setToken={addToken}/> */}
      
      <Switch>
          <ProtectedRoute
          path='/queue'
          user={user}
          token={token}
          spotifyAPI={spotifyAPI}
          socket={socket}
          component={Content}
        />

        <Route
          exact path="/:inviteCode"
          render={props => <Content token={token} socket={socket} setToken={addToken} spotifyAPI={spotifyAPI} {...props} />}
        />  

        <Route
          exact path="/"
          render={props => <Home token={token} {...props} />}
        />

      </Switch>
      <footer className="footer">Created by Rahaf Abu Alhassan</footer>
    </div>
  );
}



export default App;