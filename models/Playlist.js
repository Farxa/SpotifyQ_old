const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    id: {
        type: String,
        required: true
    },
	title: String,
	image: String,
    tracks: [{
        type: Schema.Types.ObjectId,
        ref: 'Track'
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
});

const Playlist = mongoose.model('Playlist', playlistSchema);
module.exports = Playlist;