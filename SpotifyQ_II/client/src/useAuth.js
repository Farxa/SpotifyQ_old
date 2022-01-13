import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios"

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState();

    useEffect(() => {
        axios
            .post("http://localhost:8000/login", {code})
            .then((res) => {

                window.history.pushState({}, null, "/");

                console.log(res.data);
                setAccessToken(res.data.accessToken);
            })
            .catch(() => {
                window.location = "/";
            });

    }, [code]);

    return accessToken;
}
