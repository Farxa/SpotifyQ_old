import React,{useState} from "react";
import axios from "axios";
import SpotifyWebApi from 'spotify-web-api-node';



export default function CreateQ(props) {
	const [input,setInput] = useState('');
	const [tracks,setTracks] = useState([]);
	const [queue,setQueue] = useState([]);
	const [devices, setDevices] = useState([]);
	const [selectedDevice, setSelecedDevice] = useState('');
	const token = props.token;


	console.log("THIS IS THE TOKEN:", token);
	console.log('selectedDevice:',selectedDevice);

	let loggedInSpotifyApi = new SpotifyWebApi();



	const getAllDevices = () => {
		loggedInSpotifyApi.getMyDevices()
		.then(data =>{
			setDevices(data.body.devices)
			console.log(data.body.devices)
		})
	}
	// console.log('DEVICES:',devices)

	const selectDevice = event => {
		setSelecedDevice(event.target.value)
	}

	const handlePlayClick = () => {
		
		loggedInSpotifyApi.transferMyPlayback([selectedDevice], {play: true})
		.then(function() {
			
		  console.log('Transfering playback to ' + selectedDevice);
		}, function(err) {
		  //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
		  console.log('Something went wrong!', err);
		});
	}

	const handlePauseClick = () => {
		
		loggedInSpotifyApi.transferMyPlayback([selectedDevice], {play: false})
		.then(function() {
			
		  console.log('Transfering playback to ' + selectedDevice);
		}, function(err) {
		  //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
		  console.log('Something went wrong!', err);
		});
	};

	const handleNextClick = () => {
		loggedInSpotifyApi.skipToNext()
		.then(data => {
			console.log("skip to next track", data)
		}, (err) => {
			console.log(err)
		})
	};

	const handlePreviousClick = () => {
		loggedInSpotifyApi.skipToPrevious()
		.then(data => {
			console.log("skip to previous track", data)
		}, (err) => {
			console.log(err)
		})
	}


	const handleTrackSearch= () => {
		loggedInSpotifyApi.searchTracks(input)
	  .then(data => {
		  setTracks(data.body.tracks.items)
   }, function(err) {
	console.error(err);
  });
  };
  
  const addTrackToQueue = (track)=> {
	  const existingTrackInQueue = queue.find(queueTrack=> queueTrack.id === track.id)
	  if(existingTrackInQueue) {
		  return
	  } else {
		  setQueue([...queue,track])
		  loggedInSpotifyApi.addToQueue(track.uri)
		  .then(data => {
			console.log(data)
		  })
		  
	  }
  };
const [inviteCode, setInviteCode] = useState('');
const API_URL = 'http://localhost:5005';


const handleCreateQ = e => {
	const requestBody = { selectedDevice, token, inviteCode };
	axios.post(`/api/queue`, requestBody)
		.then(res => {
			console.log("This is the res: ",res)
			setInviteCode(res.data.inviteCode)
		})
		.catch(err => console.log(err))
};


const copyToClipboard = () => {
	let copyText = document.getElementById("createdQ");
	copyText.select();
	copyText.setSelectionRange(0, 99999); 
	navigator.clipboard.writeText(copyText.value);
	alert("Copied the text: " + copyText.value);
  }

const createdQ_URL = `http://localhost:5005/${inviteCode}`;
  
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
		  <div className="row">
		  <button onClick={handleCreateQ}>Create this Queue</button>
		  {inviteCode && (
			  <>
			 <input type="text" value={createdQ_URL} id="createdQ"/> 
  			<button onClick={() => {navigator.clipboard.writeText(createdQ_URL)}}>Copy to Clipboard</button>
			  </>
			)}
		  </div>
		  
		  <div style={style}>
                <button type="button" onClick={() => {handlePreviousClick()}}>
                <i className="fa fa-backward fa-lg"></i>
				</button>
            	<button type="button" onClick={() => {handlePlayClick()}}>
					<i className="fa fa-play fa-lg"></i>
				</button>
				<button type="button" onClick={() => {handlePauseClick()}}>
					<i className="fa fa-pause fa-lg"></i>
				</button>
                <button type="button" onClick={() => {handleNextClick()}}>
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
    paddingBottom: '90px',
	textAlign:'center',
}



