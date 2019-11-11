const express = require('express');
const router = express.Router();

//Song Model
const Song = require('../../models/Song');

//@route GET api/songs
//@desc Get All Songs
//@access Public

router.get('/', async (req, res) => {
  try {
    const songs = await Song.find().sort({ likes: -1 });
    res.json(songs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route Post api/songs
//@desc Add a Song
//@access Public

router.post('/', async (req, res) => {
  try {
    const newSong = new Song({
      title: req.body.title,
      artist: req.body.artist
    });

    const song = await newSong.save();

    res.json(song);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/songs/like/:id
// @desc     Like a Song
// @access   Public
router.put('/likes/:id', async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    song.likes++;
    await song.save();
    res.json(song.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
