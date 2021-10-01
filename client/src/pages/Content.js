import React, {useEffect, useState} from "react";

import SpotifyWebApi from "spotify-web-api-node";
import TrackSearchResults from "./TrackSearchResults";
import Topbar from "../componants/Topbar";
import Playbar from "../componants/Playbar";
import Sidebar from "../componants/Sidebar";
import { getTokenFromResponse } from "../spotifyConfig";
 
// Setting the spotifyApi, so that we can use it's functions
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID
});
 
const Content = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  
  const setInitialValue = () => {
    return (new URLSearchParams(window.location.search).get('token'))
  }
  
  const [token, setToken] = useState(() => setInitialValue())
 
  useEffect(() => {
    if (!token) return;
    // Setting Up the spotifyApi with AccessToken so that we can use its functions anywhere in the component without setting AccessToken value again & again. 
    spotifyApi.setAccessToken(token);
  }, [token]);

 
    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!token) return
 
        let cancel = false
        spotifyApi.searchTracks(search).then(res => {
          if (cancel) return
          setSearchResults(
            res.body.tracks.items.map(track => {
              return {
                title: track.name,
                id: track.id
              }
            })
          )
            
        })
        return () => (cancel = true)
    }, [search, token])
 
 
 
  return (
    <div style={styling}>
    <Topbar/>
    <Sidebar/>
      <div>
 
      <form>
        <label htmlFor="search">Search for songs/artists</label>
        <input type="search" id="search" name="search" value={search} onChange={e => setSearch(e.target.value)}/>
        
        <div>{searchResults.map(track => (
          <TrackSearchResults track={track} key={track.id}/>
        ))}</div>
 
        {/* <button type="submit">add this song to playlist</button> */}
      </form>
    </div>
    <Playbar/>  
    </div>
  );
};
 
const styling = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  position: "relative",
  color: "white",
}
export default Content;

