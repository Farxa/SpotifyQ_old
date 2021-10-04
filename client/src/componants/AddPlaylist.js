import React,{ useState, useEffect } from 'react'

import axios from 'axios';
import TrackSearchResult from './TrackSearchResults';
export default function AddPlaylist(props) {
 

	return (
		<div>
			<TrackSearchResult spotifyAPI={props.spotifyAPI}/>
		</div>
	)
}