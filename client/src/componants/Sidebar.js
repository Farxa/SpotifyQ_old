import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';
import './sidebar.css';
import {loginUrl} from '../spotifyConfig';


export default function Sidebar(props) {

  const handleLogout = () => {
		logout().then(() => {
			props.setToken(null);
		})
	}
    
    return (
      <nav className="containerSidebar">
			{props.token ? (
				<div className="links">
					<Link to="/queue">
						<button style={{width: '160px'}}>Create a Queue</button>
					</Link>
					<Link to="/" onClick={() => handleLogout()}>
						<button style={{width: '160px', marginTop: '20px'}}>Logout</button>
					</Link>
				</div>
			) : (
				<div >
					<div className="links">
            			<a href={loginUrl}><button style={{width: '160px', marginTop: '30px'}}>LOGIN WITH SPOTIFY</button></a>
        			</div>
				</div>
			)}
		</nav>
    )
}



