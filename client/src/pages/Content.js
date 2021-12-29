import React from 'react';
import CreateQ from './CreateQ';
import SpotifyWebApi from 'spotify-web-api-node';


export default function Content(props) {
	// props.spotifyAPI.getMe().then(user => {
    //     console.log('USER👉🏽', user)
    //   })
	let loggedInSpotifyApi = new SpotifyWebApi();


	return (
		<div style={{flexGrow: '1', padding: '15px'}}>
			<CreateQ spotifyAPI={loggedInSpotifyApi} socket={props.socket} token={props.token} setToken={props.setToken} spotifyAPI={props.spotifyAPI} {...props}/>
		</div>
	)
}


