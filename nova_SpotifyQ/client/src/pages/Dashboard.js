import React, {useEffect, useState} from 'react';
import {useAuth} from '../useAuth';
import SpotifyWebApi from "spotify-web-api-node";
import Devices from '../components/Devices';
import CreateQ from '../components/CreateQ';
import {Link} from 'react-router-dom'
// import Logout from '../components/Logout';

const spotifyApi = new SpotifyWebApi({
    clientId: "ea28d4ba34f34b44b59c640052c6e098",
});

export default function Dashboard({code}) {
    const [token, setToken] = useState(null);
    const accessToken = useAuth(code);

    useEffect(() => {
        if (!accessToken) return;
        const _token = accessToken
        setToken(_token);
        spotifyApi.setAccessToken(accessToken);

        spotifyApi.getMe().then(data => {
            console.log(data);
        })
    }, [accessToken]);

    const [devices, setDevices] = useState([]);
	const [selectedDevice, setSelectedDevice] = useState('');
	

	const getAllDevices = () => {
		spotifyApi.getMyDevices()
		.then(data => {
			setDevices(data.body.devices)
			console.log("DEVICES", data.body.devices);
		})
	}

	const selectDevice = e => {
		setSelectedDevice(e.target.value)
	}

    return (
        <div>
        {/* <Logout token={accessToken}/> */}
            This is the home page 🏠
            <div>
            <Devices getAllDevices={getAllDevices} selectDevice={selectDevice} devices={devices}/>
            </div>

            <div>
                <CreateQ token={token} spotifyApi={spotifyApi} selectedDevice={selectedDevice} setToken={setToken} setSelecedDevice={selectDevice} />
            </div>
            
        </div>
    )
}
