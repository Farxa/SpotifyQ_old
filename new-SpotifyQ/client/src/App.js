import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';
import {getTokenFromResponse} from './spotifyConfig'
import Content from './pages/Content';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';




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
      <Routes>
      <Route
          path='/queue'
          element={<Content token={token} {...props}/>}
          />

        
        <Route
          exact path="/"
          element={<Home token={token} {...props} />}
        />
      </Routes>
          

    
      {/* <footer className="footer">Created by Rahaf Abu Alhassan</footer> */}
    </div>
  );
}



export default App;