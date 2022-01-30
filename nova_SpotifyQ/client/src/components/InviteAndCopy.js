import React from "react";

export default function InviteAndCopy(props) {
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
