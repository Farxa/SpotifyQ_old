import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Playlist from '../componants/Playlist';
import AddPlaylist from '../componants/AddPlaylist';

export default function Content(props) {
	props.spotifyAPI.getMe().then(user => {
        console.log('USER👉🏽', user)
      })

	  

	return (
		<div>
			<AddPlaylist spotifyAPI={props.spotifyAPI} token={props.token}/>
		</div>
	)
}


