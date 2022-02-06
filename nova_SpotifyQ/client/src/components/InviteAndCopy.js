import React from "react";

export default function InviteAndCopy(props) {

  if (props.message) return (
    <div className="svenContainer">
      <img style={{height: '400px'}} src="https://www.fazemag.de/wp-content/uploads/2016/02/sven_marquardt_c_mitteldeutscher_verlag__1000.jpg" alt="Sven Marquardt" />
      <br />
        <h1 style={{textAlign: 'center'}}>Heute leider nicht</h1>
      </div>
    )

  return (
    <div className="row">
      <button onClick={props.handleCreateQ}>  
        Invite friends to join your Q
      </button>
      {props.inviteCode && (
        <>
          <input type="text" value={props.createdQ_URL} id="createdQ" />
          <button
            onClick={() => {
              navigator.clipboard.writeText(props.createdQ_URL);
            }}
          >
            Copy to Clipboard
          </button>
        </>
      )}
    </div>
  );
}
