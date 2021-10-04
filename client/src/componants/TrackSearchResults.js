import React,{useState, useEffect} from "react"

export default function TrackSearchResult(props) {
  
  const [input,setInput] = useState('')
  const [tracks,setTracks] = useState([])

  const handleTrackSearch= ()=> {
    props.spotifyAPI.searchTracks(input)
    .then(function(data) {
        setTracks(data.body.tracks.items)
 }, function(err) {
   console.error(err);
 });
}

console.log(tracks)
  return (
      <div style={{paddingTop: '100px', paddingLeft: '330px'}}>
      <h1>ε/̵͇̿̿/’̿’̿ ̿(◡︵◡)</h1>
        <input value={input} onChange={e=> setInput(e.target.value)}/>
        <button onClick={handleTrackSearch}>Search</button>
        <div>
         { tracks.map(track=> (
             <div>
             <a href={track.external_urls.spotify}> {track.name}</a>
          

             </div>
         ))}
        </div>
      </div>
    
  )
} 