import React from 'react';
import {Link} from 'react-router-dom';
import { logout } from '../useAuth';

export default function Logout(props) {

    const handleLogout = () => {
		logout().then(() => {
			props.setToken(null);
		})
	}


    return (
        <Link to="/" onClick={() => handleLogout()}>
			<button>Logout</button>
		</Link>
    )
}
