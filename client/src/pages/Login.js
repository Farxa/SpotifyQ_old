import React from 'react';
import './login.css';
import { loginUrl } from './spotifyConfig';


export default function Login() {
    return (
        // add logo here maybe
        <div className="login">
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    )
}
