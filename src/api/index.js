const express = require('express');
const routes = require('./routes/index');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'AnimeFreak API - 👋🌎🌍🌏',
    entries: [
      {
       "AnimeVideoHandler": "https://animefreak.chrismichael.now.sh/api/v1/AnimeVideoHandler/:id",
       "OngoingAnime": "https://animefreak.chrismichael.now.sh/api/v1/OngoingAnime",
       "Popular": "https://animefreak.chrismichael.now.sh/api/v1/Popular",
       "LatestEpisodes": "https://animefreak.chrismichael.now.sh/api/v1/LatestEpisodes/:page",
       "Movies": "https://animefreak.chrismichael.now.sh/api/v1/Movies/:page",
       "Ova": "https://animefreak.chrismichael.now.sh/api/v1/Ova/:page",
       "TV": "https://animefreak.chrismichael.now.sh/api/v1/TV/:page",
       "Search": "https://animefreak.chrismichael.now.sh/api/v1/Search/:query",
       "Genres": "https://animefreak.chrismichael.now.sh/api/v1/Genres/:genre/:page",
      }
    ]
  });
});

router.use('/', routes);

module.exports = router;