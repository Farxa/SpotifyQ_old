import React, {useState} from 'react';
import axios from 'axios';

export default function CreateQ(props) {
  const [input, setInput] = useState('');
  const [tracks, setTracks] = useState([]);
  const [queue, setQueue] = useState([]);
  const [inviteCode, setInviteCode] = useState('');
  const API_URL = 'http://localhost:8000';

  const selectedDevice = props.selectedDevice;
  const token = props.token



  const handleCreateQ = e => {
    const requestBody = {selectedDevice, token, inviteCode};
    axios.post(`/api/queue`, requestBody)
    .then(res => {
      console.log("This is the res: ",res);
      setInviteCode(res.data.inviteCode)
    })
    .catch()
  }
  

  const handleTrackSearch = () => {
    props.spotifyApi.searchTracks(input)
    .then(data => {
      setTracks(data.body.tracks.items)
    }, function(err) {
      console.log(err);
    });
  };


  const addTrackToQueue = (track) => {
    const existingTrackInQueue = queue.find(queueTrack => queueTrack.id === track.id)
    if (existingTrackInQueue) {
      return
    } else {
      setQueue([...queue, track])
      props.spotifyApi.addToQueue(track.uri)
      .then(data => {
        console.log(data);
      })
    }
  };
  
  
  return (
  <div>
      Queue
  </div>
  )
}
