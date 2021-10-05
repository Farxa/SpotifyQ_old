import React,{useState} from "react";
import './createQ.css';



export default function CreateQ(props) {
	const [input,setInput] = useState('');
	const [tracks,setTracks] = useState([]);
	const [queue,setQueue] = useState([]);
	const [devices, setDevices] = useState([]);
	const [selectedDevice, setSelecedDevice] = useState('');

	console.log(selectedDevice)

	const getAllDevices = () => {
		props.spotifyAPI.getMyDevices()
		.then(data =>{
			setDevices(data.body.devices)
			console.log(data.body.devices)
		})
	}
	console.log('DEVICES:',devices)

	const selectDevice = event => {
		setSelecedDevice(event.target.value)
	}

	const handlePlayClick = () => {
		
		props.spotifyAPI.transferMyPlayback(selectedDevice)
		.then(function() {
			
		  console.log('Transfering playback to ' + selectedDevice);
		}, function(err) {
		  //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
		  console.log('Something went wrong!', err);
		});
	}


	const handleTrackSearch= () => {
	  props.spotifyAPI.searchTracks(input)
	  .then(data => {
		  setTracks(data.body.tracks.items)
   }, function(err) {
	console.error(err);
  });
  }
  
  const addTrackToQueue = (track)=> {
	  const existingTrackInQueue = queue.find(queueTrack=> queueTrack.id === track.id)
	  if(existingTrackInQueue) {
		  return
	  } else {
		  setQueue([...queue,track])
		  props.spotifyAPI.addToQueue(track.uri)
		  .then(data => {
			console.log(data)
		  })
		  
	  }
  }
  console.log('queue:',queue)
  
	return (
		<div className="container">
		  <div className="row">
			<p>Search for a Track</p>
			<input value={input} onChange={e=> setInput(e.target.value)}/>
			<button onClick={handleTrackSearch}>Search</button>
			<div className="row">
			  { tracks.map(track=> (
			   <div key={track.id}>
			   <a href={track.external_urls.spotify}>{track.name}</a>
			   <button onClick={()=> addTrackToQueue(track)}>Add to Queue</button>
			   </div>
			  ))}
			</div>
		  </div>
  
		  <div className="row">
		  <p>QUEUE TRACKS</p>
		  {queue.map(queueTrack => (
			   <div>
			   <p>{queueTrack.name}</p>
			   </div>
		   ))}
		  </div>
		  
		  <div className="row">
		  <button onClick={()=> getAllDevices()}>Select a device</button>
		  {devices.length > 0 && (
				<select name="device" id="" onChange={selectDevice}>
					<option value="">Choose a device</option>
					{devices.map(device => (
						<option value={device.id}>{device.name}</option>
					))}
				</select>
			)}
		  </div>
		  
		  <div style={style}>
                <button type="button">
                <i className="fa fa-backward fa-lg"></i>
				</button>
            <button type="button" onClick={() => {handlePlayClick()}}>
					<i className="fa fa-play fa-lg"></i>
				</button>
                <button type="button">
					<i className="fa fa-forward fa-lg"></i>
				</button>
        </div>
		</div>
	  
	)
}

const style = {
    position: 'fixed',
    bottom: '0', 
    left: '0',
    height: '15px',
    background: 'black',
    color: 'white',
    width: '100% ',
    padding: '20px'
}



