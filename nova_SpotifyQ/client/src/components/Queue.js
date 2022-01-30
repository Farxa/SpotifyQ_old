import React from 'react';

export default function Queue(props) {
  return (
    <div className="row">
    <p>QUEUE TRACKS</p>
    {props.queue.map(queueTrack => (
       <div>
       <p>{queueTrack.name}</p>
       </div>
     ))}
    </div>
  )
}
