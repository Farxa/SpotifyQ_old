const router = require("express").Router();
const Playlist = require('../models/Playlist');

// get all playlists
router.get('/playlists', (req, res, next) => {
	Playlist.find()
		.then(playlists => {
			res.status(200).json(playlists);
		})
		.catch(err => next(err));
});


// create a playlist
router.post('/playlists', (req, res, next) => {
	const { title, tracks } = req.body;
	Playlist.create({
		title,
        tracks
	})
		.then(playlist => {
			
			res.status(201).json(playlist);
		})
		.catch(err => {
			next(err);
		})
})

// get a specific playlist
router.get('/:id', (req, res, next) => {
	Playlist.findById(req.params.id)
		.then(playlist => {

			if (!playlist) {
				res.status(404).json(playlist);
			} else {
				res.status(200).json(playlist);
			}
		})
		.catch(err => {
			next(err);
		})
});

// router.put('/:id', (req, res, next) => {
// 	const { title, tracks } = req.body;
// 	Playlist.findByIdAndUpdate(req.params.id, { title: title, tracks: tracks }, { new: true })
// 		.then(updatedPlaylist => {
// 			res.status(200).json(updatedPlaylist);
// 		})
// 		.catch(err => next(err));
// });

// router.delete('/:id', (req, res, next) => {
// 	Playlist.findByIdAndDelete(req.params.id)
// 		.then(() => {
// 			res.status(200).json({ message: 'playlist deleted' });
// 		})
// });

module.exports = router;