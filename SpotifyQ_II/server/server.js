require('dotenv').config();
const express = require('express');
const cors = require('cors');
const spotifyWebApi = require('spotify-web-api-node');


const app = express();

app.use(cors()) // to handle the cross-origin requests
app.use(express.json()); // to parse JSON bodies

const port = process.env.PORT || 8000;

const credentials = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI || "http://localhost:3000"
};


app.post('refresh', (req, res) => {
  
})

app.post('/login', (req,res) => {
  //  setup 
      let spotifyApi = new spotifyWebApi(credentials)
  
  //  Get the "code" value posted from the client-side and get the user's accessToken from the spotify api     
      const code = req.body.code
  
      // Retrieve an access token
      spotifyApi.authorizationCodeGrant(code).then((data) => {
  
          // Returning the User's AccessToken in the json formate  
          res.json({
              accessToken : data.body.access_token,
          }) 
      })
      .catch((err) => {
          console.log(err);
          res.sendStatus(400)
      })
  
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})