import React from 'react';
import './login.css';
import { loginUrl } from './spotifyConfig';


export default function Login() {
    return (
        <div className="login">
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    )
}
