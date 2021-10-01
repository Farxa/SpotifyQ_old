import './App.css';
import Login from './pages/Login';
import Content from './pages/Content';
import {Route} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getTokenFromResponse } from './spotifyConfig';
import SpotifyWebApi from 'spotify-web-api-node';


const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID
});


function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotifyApi.setAccessToken(_token);
      spotifyApi.getMe().then(user => {
        
        console.log('USER👉🏽', user)
      })
    }

    // console.log('I HAVE A TOKEN MODAFUCKAS ', token);
  }, [])
  
  return (
    <div className="App">
      {/* {code ? <Content code={code} /> : <Login />} */}
      {/* <Signup/> */}
      {
        token ? (
          <Content/>
        ) : (
          <Login />
        )
      }
      
      
      
      
    </div>
  );
}

export default App;
