import React from 'react';
import './home.css'

export default function Home(props) {
    return (
        <div className="center-div">
        {props.token ?(
                <div >
				<h1>Welcome to SpotifyQ</h1>
                <br />
                <h3>⚠ To be able to queue up tracks when joining or creating a Queue, open Spotify first &
                 play/pause a track</h3>
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
