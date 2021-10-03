import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Playlist from '../componants/Playlist';
import AddPlaylist from '../componants/AddPlaylist';

export default function Content() {
	const API_URL = 'http://localhost:5005';

	const [playlists, setPlaylists] = useState([]);

	const getAllPlaylists = () => {
		// get request to the server
		axios.get(`${API_URL}/api/playlists`)
			.then(response => {
				// console.log(response)
				setPlaylists(response.data);
			})
			.catch(err => console.log(err));
	}

	useEffect(() => {
		// get all the playlists from the server
		getAllPlaylists();
		// bc of the empty dependency array we only get all the playlists  
		// on the first render (when the component is mounted)
	}, [])


	return (
		<div>
			{playlists.map(playlist => <Playlist key={playlist._id} {...playlist} />)}

			<AddPlaylist refreshPlaylists={getAllPlaylists} />
		</div>
	)
}


