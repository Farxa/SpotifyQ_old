import React from 'react';


export default function Home(props) {
    
    return (
        <>
        
				<div>
                <h2>Before you start:</h2>
                <h4>When joining or creating a Queue, open Spotify & play a
					track to be able to queue up tracks
                </h4>
                <div>
                <form  onSubmit="">
				<input
					type="text"
					name="join"
					
					placeholder="Queue Code"
				/>
                <button type="submit">Join a Queue</button>
                </form>
                </div>
					
				</div>
			
        </>
        
    )
}
