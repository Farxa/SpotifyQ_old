const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const trackSchema = new Schema({
    spotifyId: {
        type: String,
        required: true
    },
	title: String,
    artist: String,
    duration: String,
});

const Track = mongoose.model('Track', trackSchema);
module.exports = Track;