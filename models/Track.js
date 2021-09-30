const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const songSchema = new Schema({
    image: String,
	title: String,
    artist: String,
    duration: String,
});

const Track = mongoose.model('Track', trackSchema);
module.exports = Song;