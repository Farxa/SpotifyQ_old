import React, {useEffect, useState} from "react";
import useAuth from "../services/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import TrackSearchResults from "./TrackSearchResults";
import Topbar from "../componants/Topbar";
import Playbar from "../componants/Playbar";
import Sidebar from "../componants/Sidebar";

// Setting the spotifyApi, so that we can use it's functions
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID
});

const Content = ({ code }) => {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!accessToken) return;
    // Setting Up the spotifyApi with AccessToken so that we can use its functions anywhere in the component without setting AccessToken value again & again. 
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return

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
    }, [search, accessToken])

 

  return (
    <div style={styling}>
    <Topbar/>
    <Sidebar/>
      <div>
			<h3>Create a new playlist</h3>
			<form>
        <label htmlFor="search">Search for songs/artists</label>
        <input type="search" id="search" name="search" value={search} onChange={e => setSearch(e.target.value)}/>
				
        <div>{searchResults.map(track => (
          <TrackSearchResults track={track} key={track.id}/>
        ))}</div>


          <div>+ New Playlist</div>
        
				
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
  background: "#121212",
  display: "flex",
  position: "relative",
  color: "white",
}
export default Content;