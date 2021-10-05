import React from 'react';
import CreateQ from './CreateQ';


export default function Content(props) {
	props.spotifyAPI.getMe().then(user => {
        console.log('USER👉🏽', user)
      })

	  

	return (
		<div className="container">
			<CreateQ spotifyAPI={props.spotifyAPI} token={props.token}/>
		</div>
	)
}


