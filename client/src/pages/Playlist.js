// import React from 'react';
// import { useState, useEffect } from 'react';
// import SpotifyWebApi from 'spotify-web-api-node';
// import useAuth from '../services/useAuth';



// const spotifyApi = new SpotifyWebApi({
//     clientId: process.env.CLIENT_ID,
//   })



// export default function Playlist() {
//     const [title, setTitle] = useState('');
//     const [search, setSearch] = useState('');
//     const [searchrResults, setSearchResults] = useState([]);

//     useEffect(() => {
//         if (!accessToken) return
//         spotifyApi.setAccessToken(accessToken)
//     }, [accessToken])

//     useEffect(() => {
//         if (!search) return setSearchResults([])
//         if (!accessToken) return

//         spotifyApi.searchTracks(search).then(res => {
//             console.log(res)
//         })
//     }, [search, accessToken])
    

// 	return (
// 		<div>
// 			<h3>Create a new playlist</h3>
// 			<form>
//             <label htmlFor="search">Search for songs/artists</label>
//             <input type="search" id="search" name="search" value={search} onChange={e => setSearch(e.target.value)}/>
// 				{/* <label htmlFor="title">Title: </label>
// 				<input
// 					type="text"
// 					name="title"
// 					value={title}
// 					onChange={e => setTitle(e.target.value)}
// 				/> */}
//         <div>Tracks</div>
				
// 				<button type="submit">add this song to playlist</button>
// 			</form>
// 		</div>
// 	)
// }
