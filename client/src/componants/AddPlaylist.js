import { useState } from 'react'
import axios from 'axios';

export default function AddPlaylist(props) {

	const API_URL = 'http://localhost:5005';

	const [title, setTitle] = useState('');
	// const [tracks, setTracks] = useState([]);

	const handleSubmit = e => {
		e.preventDefault();

		// make a post request to the server with the form fields in the body
		const requestBody = { title };
		axios.post(`${API_URL}/api/playlists`, requestBody)
			.then(response => {
				// reset the state and thereby reset the form
				setTitle('');
				
				// we need to trigger 'getAllPlaylists' in the Content page
				props.refreshProjects();
			})
			.catch(err => console.log(err))
	}

	return (
		<div>
			<h3>Add Playlist Form</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Title: </label>
				<input
					type="text"
					name="title"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<button type="submit">Create this Playlist</button>
			</form>
		</div>
	)
}