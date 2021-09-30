const router = require("express").Router();
const Playlist = require('../models/Playlist');


router.get('/', (req,res,next) => {
  Playlist.find()
  .then(playlists => {
    res.status(200).json(playlists)
  })
  .catch(err => {
    next(err);
  })
})

router.post("/", (req, res, next) => {
  const {title} = req.body;
  Playlist.create({
    title
  })
  .then(Playlist => {
    res.status(201).json(Playlist)
    console.log(Playlist)
  })
  .catch(err => {
    next(err);
  })
});

router.get('/:id', (req,res,next) => {
  Playlist.findById(req.params.id)
		.then(playlist => {
			// check if the id is not valid
			if (!mongoose.Types.ObjectId.isValid(req.params.id))

			if (!playlist) {
				res.status(404).json(playlist);
			} else {
				res.status(200).json(playlist);
			}
		})
		.catch(err => {
			next(err);
		})
})

router.put('/:id', (req, res, next) => {
	const { title } = req.body;
	Playlist.findByIdAndUpdate(req.params.id, { title: title }, { new: true })
		.then(updatedPlaylist => {
			res.status(200).json(updatedPlaylist);
		})
		.catch(err => next(err));
});

// router.delete('/:id', (req, res, next) => {
// 	Playlist.findByIdAndDelete(req.params.id)
// 		.then(() => {
// 			res.status(200).json({ message: 'playlist deleted' });
// 		})
// });

module.exports = router;
