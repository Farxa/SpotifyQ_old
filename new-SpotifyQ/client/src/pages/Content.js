import React from 'react';
import CreateQ from './CreateQ';


export default function Content(props) {
	// props.spotifyAPI.getMe().then(user => {
    //     console.log('USER👉🏽', user)
    //   })

	return (
		<div style={{flexGrow: '1', padding: '15px'}}>
			<CreateQ spotifyAPI={props.spotifyAPI} socket={props.socket} token={props.token} setToken={props.setToken} {...props}/>
		</div>
	)
}