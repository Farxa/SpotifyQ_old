import React from 'react';

export default function TrachSearch(props) {


  return (
    <div className="row">
    <p>Search for a Track</p>
    <input value={props.input} onChange={e=> props.setInput(e.target.value)}/>
    <button onClick={props.handleTrackSearch}>Search</button>
    <div className="row">
      { props.tracks.map(track=> (
       <div key={track.id}>
       <a href={track.external_urls.spotify}>{track.name}</a>
       <button onClick={()=> props.addTrackToQueue(track)}>Add to Queue</button>
       </div>
      ))}
    </div>
    </div>
  )
}
