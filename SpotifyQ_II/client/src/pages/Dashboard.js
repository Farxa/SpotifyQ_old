import React, {useEffect} from 'react';
import useAuth from '../useAuth';
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
    clientId: "ea28d4ba34f34b44b59c640052c6e098",
});

export default function Dashboard({code}) {
    const accessToken = useAuth(code);

    useEffect(() => {
        if (!accessToken) return;

        spotifyApi.setAccessToken(accessToken);

        spotifyApi.getMe().then(data => {
            console.log(data);
        })
    }, []);

    return (
        <div>
            This is the home page 🏠
        </div>
    )
}
