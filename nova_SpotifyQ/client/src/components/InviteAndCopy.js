import React from "react";
import QRCode from "qrcode.react";

export default function InviteAndCopy(props) {

  return (
    <div className="row">
      <button onClick={props.handleInviteQ}>  
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
          <br />
          <br />
          <div>
            <QRCode value={props.createdQ_URL} style={{ marginRight: 50 }}/>
          </div>
          <br />
          <br />
        </>
      )}
    </div>
  );
}
