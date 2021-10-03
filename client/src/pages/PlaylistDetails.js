import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function PlaylistDetails(props) {

	const API_URL = 'http://localhost:5005';

	const [playlist, setPlaylist] = useState(null);

	const playlistId = props.match.params.id;

	const getPlaylist = () => {
		axios.get(`${API_URL}/api/playlists/${playlistId}`)
			.then(response => {
				console.log(response.data);
				setPlaylist(response.data);
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getPlaylist();
	}, [])

	return (
		<div>
			{playlist && (
				<>
					<h1>{playlist.title}</h1>
				</>
			)}
		</div>
	);
}