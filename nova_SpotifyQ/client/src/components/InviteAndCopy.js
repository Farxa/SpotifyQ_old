import React, {useState, useEffect} from "react";
import QRCode from "qrcode";

export default function InviteAndCopy(props) {

  const inviteURL = props.createdQ_URL

  const [src, setSrc] = useState("");

  useEffect(() => {
    console.log("before qrcode",inviteURL);
    QRCode.toDataURL(props.createdQ_URL).then(inviteURL => {
      console.log("after qrcode",inviteURL);
      setSrc(inviteURL);
      
    });
  }, [])

  return (
    <div className="row">
      <button onClick={props.handleInviteQ}>
        Invite friends to join your Q
      </button>
      {props.inviteCode && (
        <>
          <input type="text" value={inviteURL} id="createdQ" />
          <button
            onClick={() => {
              navigator.clipboard.writeText(inviteURL);
            }}
          >
            Copy to Clipboard
          </button>
          <br />
          <br />
          <div>
            <img src={src} alt="qr-code" />
          </div>
          <br />
          <br />
        </>
      )}
    </div>
  );
}
