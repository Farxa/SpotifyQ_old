import React,{useState, useEffect} from "react";
import './createQ.css';
import axios from "axios";
import SpotifyWebApi from 'spotify-web-api-node';




export default function CreateQ(props) {
	const [input,setInput] = useState('');
	const [tracks,setTracks] = useState([]);
	const [queue,setQueue] = useState([]);
	const [devices, setDevices] = useState([]);
	const [selectedDevice, setSelecedDevice] = useState('');
	const token = props.token;
	
	const [message, setMessage] = useState('');
	console.log("API", props.spotifyAPI);

	let loggedInSpotifyApi = new SpotifyWebApi();


	useEffect(()=> {
		props.socket.on('track added', payload => {
			setQueue(q => [...q, payload.track]);
		  })
		if (props.match.params.inviteCode) {

			axios.get(`/api/auth/${props.match.params.inviteCode}`).then((res) => {
				console.log("This is the selectedDevice",res.data.selectedDevice);
				console.log("This is the token",res.data.token);
				loggedInSpotifyApi.setAccessToken(res.data.token);
				loggedInSpotifyApi.setSelecedDevice(res.data.selectedDevice)
				 

			}).catch(message => {
				setMessage(message)
			})
		} 	
	}, []) 



	const getAllDevices = () => {
		console.log(loggedInSpotifyApi)
		loggedInSpotifyApi.getMyDevices()
		.then(data =>{
			console.log("devices", data.body.devices)
			setDevices(data.body.devices)
		})
	}

	const selectDevice = event => {
		console.log("select e.target.val", event.target.value)
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
		  loggedInSpotifyApi.addToQueue(track.uri)
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

				<div className="flexItem1 device">
					<div className="deviceContainer">
						<button style={{marginBottom: '20px'}} onClick={()=> getAllDevices()}>Select a device  <i class="far fa-hand-pointer"></i></button>
          				{devices.length > 0 && (
                			<select style={{marginBottom: '15px', width: '170px', marginRight: '20px'}} 
							name="device" id="" onChange={selectDevice}>
                    		<option value="">Choose a device</option>
                    		{devices.map(device => (
                    		<option value={device.id}>{device.name}</option>
                   		 	))}
               		 		</select>
            			)}
					</div>

					<div className="inviteContainer">
					<div>
						<button style={{marginBottom: '20px'}} onClick={handleCreateQ}>Invite friends to join your Q</button>
					</div>
						
          				{inviteCode && (
              				<div>
             					 
            					<div style={{marginRight: '15px'}} onClick={() => {navigator.clipboard.writeText(createdQ_URL)}}>
								<input style={{marginRight: '15px'}} type="text" value={createdQ_URL} id="createdQ" style={{width: '160px'}}/>
								<i style={{fontSize:'25px', paddingLeft: '10px', cursor: 'pointer'}} class="fas fa-copy"></i>
								</div>
              				</div>
            			)}

					</div>

				</div>

				<div className="flexItem2 searchContainer">
							
					<input style={{width: '185px', marginBottom: '20px'}} value={input} onChange={e=> setInput(e.target.value)}/>
            		<button	style={{height: '40px', marginLeft: '10px'}} onClick={handleTrackSearch}><i class="fa fa-search"></i></button>
				
					
					<div>
						{ tracks.map(track=> (
               			<div className="searchResults" key={track.id}>
					   		
								<div className="addTrack" onClick={()=> addTrackToQueue(track)}>
								<div>
									<i style={{float: 'left', fontSize: '25px', marginRight: '6px', marginTop: '3px'}} class="fas fa-plus-circle"></i>
									<h4>{track.name}</h4>	
								</div>
								
								<div>
									<p>🎤 {track.artists[0].name}</p>
									</div>
								</div>
               			</div>
              			))}
				</div>
				</div>
				

				<div className=" flexItem3 Queue">
					<h2>Queue</h2>
          			{queue.map(queueTrack => (
						  <ul className="queueTracks">
							  <li>
							  <p>{queueTrack.name}</p>
							  </li>
						  </ul>
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



