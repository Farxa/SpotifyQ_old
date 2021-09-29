const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playlistSchema = new Schema({
	title: String,
	image: String,
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
});

const Playlist = mongoose.model('Playlist', playlistSchema);
module.exports = Playlist;