const express = require('express');
const router = express.Router();
const api = require('../api');


router.get('/AnimeVideoHandler/:id([^/]+/[^/]+[^/]+/[^/]+)' , (req , res) =>{
  let id = req.params.id;
  api.animeVideoHandler(id)
    .then(video =>{
      res.status(200).json({
        video
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/OngoingAnime' , (req , res) =>{
  api.ongoingAnime()
    .then(anime =>{
      res.status(200).json({
        anime
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/Popular' , (req , res) =>{
  api.popular()
    .then(anime =>{
      res.status(200).json({
        anime
      });
    }).catch((err) =>{
      console.error(err);
    });
});

// Total pages unknown.
router.get('/LatestEpisodes/:page' , (req , res) =>{
  const page = req.params.page;
  api.latestEpisodes(page)
    .then(anime =>{
      res.status(200).json({
        anime
      });
    }).catch((err) =>{
      console.error(err);
    });
});

// Total pages unknown.
router.get('/Movies/:page' , (req , res) =>{
  const page = req.params.page;
  api.movies(page)
    .then(movies =>{
      res.status(200).json({
        movies
      });
    }).catch((err) =>{
      console.error(err);
    });
});

// Total pages unknown.
router.get('/Ova/:page' , (req , res) =>{
  const page = req.params.page;
  api.ova(page)
    .then(ova =>{
      res.status(200).json({
        ova
      });
    }).catch((err) =>{
      console.error(err);
    });
});

// Total pages unknown.
router.get('/TV/:page' , (req , res) =>{
  const page = req.params.page;
  api.tv(page)
    .then(tv =>{
      res.status(200).json({
        tv
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/Search/:query' , (req , res) =>{
  const query = req.params.query;
  api.search(query)
    .then(search =>{
      res.status(200).json({
        search
      });
    }).catch((err) =>{
      console.error(err);
    });
});

// Total pages unknown.
router.get('/Genres/:genre/:page' , (req , res) =>{
  const genre = req.params.genre;
  const page = req.params.page;
  api.genres(genre , page)
    .then(anime =>{
      res.status(200).json({
        anime
      });
    }).catch((err) =>{
      console.error(err);
    });
});



module.exports = router;