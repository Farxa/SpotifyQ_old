import React from 'react';
import './home.css'

export default function Home(props) {
    return (
        <div className="center-div">
        {props.token ?(
                <div >
				<h1>Welcome to SpotifyQ</h1>
                <br />
                <h3>⚠ Open your Spotify in the background 
                <h4>to be able to connect your device 
                and queue up tracks when joining or creating a Queue</h4></h3>
				</div> 
        ) : (
                <div >
				<h1>Welcome to SpotifyQ</h1>
                <br />
                <h3>Login with your Spotify to continue</h3>
				</div> 
        )}
           
        </div>
    )
}
