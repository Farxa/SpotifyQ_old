import React, {useEffect} from "react";
import auth from "../services/auth";
import SpotifyWebApi from "spotify-web-api-node";

// Setting the spotifyApi, so that we can use it's functions
const spotifyApi = new SpotifyWebApi({
  clientId: "255a07b3950745cfa2d3741531875cb3"
});

const Dashboard = ({ code }) => {

  const accessToken = auth(code);

  useEffect(() => {
    if (!accessToken) return;

    // Setting Up the spotifyApi with AccessToken so that we can use its functions anywhere in the component without setting AccessToken value again & again. 
    spotifyApi.setAccessToken(accessToken);

    // Get user details with help of getMe() function
    spotifyApi.getMe().then(data => {
      console.log(data);
    })
  }, [accessToken]);

  return (
    <div>
      <h3>This is the datshboard for now</h3>    
    </div>
  );
};

export default Dashboard;