import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';
import './sidebar.css';


export default function Sidebar(props) {

  const handleLogout = () => {
		logout().then(() => {
			props.setUser(null);
		})
	}
    
    return (
      <nav className="container">
			{props.user ? (
				<div className="links">
					<Link to="/playlists">
						<button>All Playlists</button>
					</Link>
					<Link to="/" onClick={() => handleLogout()}>
						<button>Logout</button>
					</Link>
				</div>
			) : (
				<div className="links">
					<Link to="/signup">
						<button>Signup</button>
					</Link>
					<Link to="/login">
						<button>Login</button>
					</Link>
					<div>
						<button 
							onClick={() => {
								window.location = 'http://localhost:5005' + '/api/spotify/login';
							}}
						>Login with Spotify</button>
					</div>
				</div>
			)}
		</nav>
    )
}



