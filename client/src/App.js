import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';
import {getTokenFromResponse} from './spotifyConfig'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Content from './pages/Content';
import ProtectedRoute from './componants/ProtectedRoute';
import Sidebar from './componants/Sidebar';
import JoinQ from './pages/JoinQ';
import Home from './pages/JoinQ';




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
          exact path='/queue'
          user={user}
          token={token}
          spotifyAPI={spotifyAPI}
          component={Content}
        />

        {/* <Route
          exact path="/"
          render={<Home />}
        /> */}

        <Route
          exact path="/join a queue"
          render={props => <JoinQ setToken={addToken} {...props} />}
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
    </div>
  );
}



export default App;