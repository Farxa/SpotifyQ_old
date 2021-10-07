import React from 'react';
import CreateQ from './CreateQ';


export default function Content(props) {
	// props.spotifyAPI.getMe().then(user => {
    //     console.log('USER👉🏽', user)
    //   })

	return (
		<div>
			<CreateQ spotifyAPI={props.spotifyAPI} socket={props.socket} token={props.token} setToken={props.setToken} spotifyAPI={props.spotifyAPI} {...props}/>
		</div>
	)
}


