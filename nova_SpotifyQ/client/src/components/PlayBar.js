import React from "react";

export default function PlayBar(props) {

    const handlePlayClick = () => {
        console.log(props.spotifyAPI);
		
		props.spotifyAPI.transferMyPlayback([props.selectedDevice], {play: true})
		.then(function() {
			
		  console.log('Transfering playback to ' + props.selectedDevice);
		}, function(err) {
		  //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
		  console.log('Something went wrong!', err);
		});
	}

	const handlePauseClick = () => {
		
		props.spotifyAPI.transferMyPlayback([props.selectedDevice], {play: false})
		.then(function() {
			
		  console.log('Transfering playback to ' + props.selectedDevice);
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




  return (
    <div>
      <button
        type="button"
        onClick={() => {
          handlePreviousClick();
        }}
      >
        <i className="fa fa-backward fa-lg"></i>
      </button>

      <button
        type="button"
        onClick={() => {
          handlePlayClick();
        }}
      >
        <i className="fa fa-play fa-lg"></i>
      </button>

      <button
        type="button"
        onClick={() => {
          handlePauseClick();
        }}
      >
        <i className="fa fa-pause fa-lg"></i>
      </button>

      <button
        type="button"
        onClick={() => {
          handleNextClick();
        }}
      >
        <i className="fa fa-forward fa-lg"></i>
      </button>
    </div>
  );
}
