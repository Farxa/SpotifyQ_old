import React, { useState } from "react";
import axios from "axios";
import TrackSearch from "./TrackSearch";
import Queue from "./Queue";
import InviteAndCopy from "./InviteAndCopy";
import PlayBar from "./PlayBar";

export default function CreateQ(props) {
  const [input, setInput] = useState("");
  const [tracks, setTracks] = useState([]);
  const [queue, setQueue] = useState([]);
  const [inviteCode, setInviteCode] = useState("");
  const API_URL = "http://localhost:8000";

  const selectedDevice = props.selectedDevice;
  const token = props.token;
  const spotifyApi = props.spotifyApi

  const handleCreateQ = e => {
    const requestBody = { selectedDevice, token, inviteCode };
    axios
      .post(`/api/queue`, requestBody)
      .then(res => {
        console.log("This is the res: ", res);
        setInviteCode(res.data.inviteCode);
      })
      .catch();
  };

  const handleTrackSearch = () => {
    spotifyApi.searchTracks(input).then(
      data => {
        setTracks(data.body.tracks.items);
      },
      function (err) {
        console.log(err);
      }
    );
  };

  const addTrackToQueue = track => {
    const existingTrackInQueue = queue.find(
      queueTrack => queueTrack.id === track.id
    );
    if (existingTrackInQueue) {
      return;
    } else {
      setQueue([...queue, track]);
      spotifyApi.addToQueue(track.uri).then(data => {
        console.log(data);
      });
    }
  };

  const copyToClipboard = () => {
    const copyText = document.getElementById("createdQ");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the code: " + copyText.value);
  };

  const createdQ_URL = `http://localhost:8000/${inviteCode}`;

  return (
    <div className="container">

      <TrackSearch
        input={input}
        setInput={setInput}
        handleTrackSearch={handleTrackSearch}
        tracks={tracks}
        addTrackToQueue={addTrackToQueue}
      />

      <Queue queue={queue} />

      <InviteAndCopy 
        handleCreateQ={handleCreateQ} 
        inviteCode={inviteCode} 
        createdQ_URL={createdQ_URL}
      />

      <PlayBar spotifyAPI={spotifyApi} selectedDevice={selectedDevice} />

    </div>
  );
}
