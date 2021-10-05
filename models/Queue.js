const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const queueSchema = new Schema({
    deviceID: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
	inviteLink: {
        type: String,
        required: true
    },
    tracks: [
		{
			title: {
				type: String,
				required: true
			},
			spotifyId: {
				type: String,
				required: true
			},
			played: {
				type: Boolean,
				default: false
			}
		}
	],
});

const Queue = mongoose.model('Queue', queueSchema);
module.exports = Queue;


// get token and deviceID and and inviteLink 