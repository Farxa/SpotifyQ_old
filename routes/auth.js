const router = require("express").Router();
// const User = require('../models/User');
// const bcrypt = require('bcrypt');
const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors()) // To handle cross-origin requests
app.use(express.json()); // To parse JSON bodies

app.post('/refresh', (req, res) => {
	
	const refreshToken = req.body.refreshToken
	console.log('INTERVAL')
	const spotifyApi = new spotifyWebApi({
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		redirectUri: "http://localhost:3000",
		refreshToken,
	  })

	  spotifyApi.refreshAccessToken()
	  .then(data => {
		  console.log(data.body)
		  res.json({
			  accessToken: data.body.access_token,
			  expiresIn: data.body.expires_in
		  })
	  })
	  .catch(err => {
		  console.log(err)
		  res.sendStatus(400)
	  })
})

router.post('/login', (req, res) => {
		//  setup social login with spotify
		const spotifyApi = new spotifyWebApi({
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			redirectUri: "http://localhost:3000"
		  });

		//  Get the "code" value posted from the client-side and get the user's accessToken from the spotify api     
			const code = req.body.code
		
			// Retrieve an access token
			spotifyApi.authorizationCodeGrant(code).then((data) => {
		
				// Returning the User's AccessToken in the json formate  
				res.json({
					accessToken : data.body.access_token,
					refreshToken: data.body.refresh_token,
					expiresIn: data.body.expires_in

				}) 
			})
			.catch((err) => {
				console.log(err);
				res.sendStatus(400)
			})
});




module.exports = router;