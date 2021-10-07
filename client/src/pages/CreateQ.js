import React,{useState, useEffect} from "react";
import './createQ.css';
import axios from "axios";




export default function CreateQ(props) {
	const [input,setInput] = useState('');
	const [tracks,setTracks] = useState([]);
	const [queue,setQueue] = useState([]);
	const [devices, setDevices] = useState([]);
	const [selectedDevice, setSelecedDevice] = useState('');
	const token = props.token;
	
	const [message, setMessage] = useState('');
	console.log("API", props.spotifyAPI);


	useEffect(()=> {
		props.socket.on('track added', payload => {
			setQueue(q => [...q, payload.track]);
		  })
		if (props.match.params.inviteCode) {

			axios.get(`/api/auth/${props.match.params.inviteCode}`).then((res) => {
				console.log("This is the selectedDevice",res.data.selectedDevice);
				console.log("This is the token",res.data.token);
				 setSelecedDevice(res.data.selectedDevice)
				 props.spotifyAPI.setAccessToken(res.data.token);

			}).catch(message => {
				setMessage(message)
			})
		} 	
	}, []) 



	const getAllDevices = () => {
		props.spotifyAPI.getMyDevices()
		.then(data =>{
			setDevices(data.body.devices)
		})
	}

	const selectDevice = event => {
		setSelecedDevice(event.target.value)
	}

	const handlePlayClick = () => {
		
		props.spotifyAPI.transferMyPlayback([selectedDevice], {play: true})
		.then(function() {
			
		  console.log('Transfering playback to ' + selectedDevice);
		}, function(err) {
		  //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
		  console.log('Something went wrong!', err);
		});
	}

	const handlePauseClick = () => {
		
		props.spotifyAPI.transferMyPlayback([selectedDevice], {play: false})
		.then(function() {
			
		  console.log('Transfering playback to ' + selectedDevice);
		}, function(err) {
		  //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
		  console.log('Something went wrong!', err);
		});
	};

	const handleNextClick = () => {
		props.spotifyAPI.skipToNext()
		.then(data => {
			console.log("skip to next track", data)
		}, (err) => {
			console.log(err)
		})
	};

	const handlePreviousClick = () => {
		props.spotifyAPI.skipToPrevious()
		.then(data => {
			console.log("skip to previous track", data)
		}, (err) => {
			console.log(err)
		})
	}


	const handleTrackSearch= () => {
	  props.spotifyAPI.searchTracks(input)
	  .then(data => {
		  console.log('TRACKS:', data.body.tracks.items)
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
		  setQueue([...queue,track]);
		  props.socket.emit('new track', {
			  track: track
		  })
		  props.spotifyAPI.addToQueue(track.uri)
		  .then(data => {
			console.log(data)
		  })
		  
	  }
  };
const [inviteCode, setInviteCode] = useState('');

const handleCreateQ = e => {
	const requestBody = { selectedDevice, token, inviteCode };
	axios.post(`/api/queue`, requestBody)
		.then(res => {
			setInviteCode(res.data.inviteCode)
		})
		.catch(err => console.log(err))
};

const createdQ_URL = `https://spotifiq.herokuapp.com/${inviteCode}`;
  if (message) return (
	<div className="svenContainer">
		<img style={{height: '400px'}} src="https://www.fazemag.de/wp-content/uploads/2016/02/sven_marquardt_c_mitteldeutscher_verlag__1000.jpg" alt="Sven Marquardt" />
		<br />
  		<h1 style={{textAlign: 'center'}}>Heute leider nicht</h1>
  	</div>
  )
	return (
		<div>
			<div className="containerQ">

				<div className="device">
					<div className="deviceContainer">
						<button onClick={()=> getAllDevices()}><i class="far fa-hand-pointer"> Select a device</i></button>
          				{devices.length > 0 && (
                			<select name="device" id="" onChange={selectDevice}>
                    		<option value="">Choose a device</option>
                    		{devices.map(device => (
                    		<option value={device.id}>{device.name}</option>
                   		 	))}
               		 		</select>
            			)}
					</div>

				</div>

				
				<div className="searchContainer">
						<form style={{margin:'auto', maxWidth:'300px'}}>
  							<input value={input} onChange={e=> setInput(e.target.value)} placeholder="Search for a Track" name="search"/>
  							<button onClick={handleTrackSearch}><i class="fa fa-search"></i></button>
						</form>
            			{/* <input value={input} onChange={e=> setInput(e.target.value)}/>
            			<button	button onClick={handleTrackSearch}>Search</button> */}
					
					<div className="searchResults">
						{ tracks.map(track=> (
               			<div key={track.id}>
					   	<div>
					   		<h4>{track.name}</h4>
							<p>🎤{track.artists[0].name}</p>	
							<button className="buttonQ" onClick={()=> addTrackToQueue(track)}>+</button>
							
					   </div>
               			</div>
              			))}
				</div>
				</div>
				

				<div className="Queue">
					<div className="inviteContainer">
						<button onClick={handleCreateQ}>Invite friends to join your Q</button>
          				{inviteCode && (
              				<div>
             					<input type="text" value={createdQ_URL} id="createdQ" style={{width: '160px'}}/> 
            					<button className="buttonQ" onClick={() => {navigator.clipboard.writeText(createdQ_URL)}}>Copy to Clipboard</button>
              				</div>
            			)}

					</div>
					<h2>Queue</h2>
          			{queue.map(queueTrack => (
               		<div>
               			<p>{queueTrack.name}</p>
               		</div>
           			))}

				</div>

				

				

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



