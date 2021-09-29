const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const songSchema = new Schema({
    image: String,
	title: String,
    artist: String,
	likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    duration: String,
});

const Song = mongoose.model('Song', songSchema);
module.exports = Song;