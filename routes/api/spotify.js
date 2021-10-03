const router = require('express').Router();
const querystring = require('query-string');

require('dotenv').config();


let redirect_uri = 'http://localhost:3000' || 'http://localhost:5005/api/spotify/callback';

const authEndpoint = "https://accounts.spotify.com/authorize";

// route: api/spotify/login
router.get('/login', function (req,res) {
    res.redirect(
        authEndpoint +
			querystring.stringify({
				response_type: 'code',
				clientID: process.env.CLIENT_ID,
				scope:
					'user-read-private user-read-email playlist-modify-private playlist-modify-public user-read-currently-playing user-read-playback-state user-modify-playback-state',
				redirect_uri
			})
    );
});



// route: api/spotify/callback
router.get('/callback', function (req, res) {
	let code = req.query.code || null;
	let authOptions = {
		url: 'https://accounts.spotify.com/api/token',
		form: {
			code: code,
			redirect_uri,
			grant_type: 'authorization_code'
		},
		headers: {
			Authorization:
				'Basic ' +
				Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64')
		},
		json: true
	};
	request.post(authOptions, (err, res, body) => {
		var access_token = body.access_token;
		let uri = 'http://localhost:3000/playlists';
		res.redirect(uri + '?access_token=' + access_token);
	});
});

module.exports = router;