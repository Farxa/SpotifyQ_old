import { Link } from 'react-router-dom';

// here we destructure the fields from the props object
export default function Playlist({ title, _id }) {
	// console.log(title);
	return (
		<div>
			<Link to={`/playlists/${_id}`}>
				<h3>{title}</h3>
			</Link>
		</div>
	)
}