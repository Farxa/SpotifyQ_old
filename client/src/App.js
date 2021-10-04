import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';
import {getTokenFromResponse} from './spotifyConfig'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Content from './pages/Content';
import PlaylistDetails from './pages/PlaylistDetails';
import ProtectedRoute from './componants/ProtectedRoute';
import Sidebar from './componants/Sidebar';
import Playbar from './componants/Playbar';
import Topbar from './componants/Topbar';



const spotifyAPI = new SpotifyWebApi({
  ClientId: process.env.CLIENT_ID
});

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

    // console.log('I HAVE A TOKEN MODAFUCKAS ', token);
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
      <Switch>
      
          <ProtectedRoute
          exact path='/playlists'
          user={user}
          token={token}
          spotifyAPI={spotifyAPI}
          component={Content}
        />
      
        <ProtectedRoute
          exact path='/playlists/:id'
          user={user}
          component={PlaylistDetails}
        />

        <Route
          exact path="/signup"
          render={props => <Signup setUser={addUser} {...props} />}
        />
        <Route
          exact path="/login"
          render={props => <Login setUser={addUser} {...props} />}
        />
      </Switch>
      <Playbar/>
    </div>
  );
}



export default App;