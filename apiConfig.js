const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000";
const clientId = process.env.CLIENT_ID;

const scopes = [
  "streaming",
  "playlist-modify-public",
  "ugc-image-upload",
  "user-read-email",
  "user-read-private"
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;