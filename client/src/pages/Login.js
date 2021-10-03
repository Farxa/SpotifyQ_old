import { useState } from 'react'
import { login } from '../services/auth';
import './login.css';

export default function Login(props) {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		console.log(username, password)

		login(username, password)
			.then(response => {
				console.log(response);
				if (response.message) {
					// reset the form 
					setUsername('');
					setPassword('');
					// set the message
					setMessage(response.message);
				} else {
					// user is correctly signed up in the backend
					// add the user to the state of App.js
					props.setUser(response);
					// redirect to the playlists overview
					props.history.push('/');
				}
			})
			.catch(err => console.log(err));
	}

	return (
		<>
			<h3>Login</h3>
			<form className="login" onSubmit={handleSubmit}>
				<label htmlFor="username">Username: </label>
				<input
					type="text"
					name="username"
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<button type="submit">Log in 🔑</button>
				{message && (
					<h3>{message}</h3>
				)}
                <div className="login">
                    <a href='#'>Login with Spotify</a>
                </div>
			</form>
		</>
	)
}