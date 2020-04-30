const fetch = require('node-fetch');
const cheerio = require('cheerio');
const url = require('./urls');
const util = require('../utils');


const search = async(query) =>{
  const res = await fetch(`${url.SEARCH_URL}/topSearch?q=${query}`);
  const body = await res.json();
  const $ = cheerio.load(body);
  const promises = [];

  body.data.map(doc =>{
    const id = `watch/${doc.seo_name}`;
    const title = doc.name;
    promises.push(animeContentHandler(id).then(extra => ({
      title: title ? title : null,
      img: extra[0] ? extra[0].img : null,
      //genres: genres ? genres : null,
      //synopsis: synopsis ? synopsis : null,
      rating: extra[0] ? extra[0].rating : null,
      status: extra[0] ? extra[0].status : null,
      type: extra[0] ? extra[0].type : null,
      firstAired: extra[0] ? String(extra[0].firstAired).trim() : null,
      score: extra[0] ? extra[0].score : null,
      totalEps: extra[0] ? extra[0].totalEps : null,
      episodes: extra[0] ? extra[0].episodes : null,
    })));
  });
  return await Promise.all(promises)
};

const genres = async(genre , page) =>{
  const res = await fetch(`${url.GENRE_URL}/${genre}/page/${page}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.container div.centerAligner div.container-left div.big-list div.bl-grid').each((index , element) => {
    const $element = $(element);
    const id = $element.find('div.bl-box a.blb-title').attr('href').slice(26);
    const title = $element.find('div.bl-box a.blb-title').text().trim();
    //const img = $element.find('div.bl-box a.blb-image img').attr('src');
    const genres = [];
    $element.find('div.bl-box div.bld-right div.details').eq(0).find('a').each((j , el) =>{
      const $el = $(el);
      const genre = $el.attr('href').split('/')[5];
      genres.push(genre);
    });
    const synopsis = $element.find('div.bl-box div.bld-right div.details').eq(1).text().replace('Description :' , '').trim();
    promises.push(animeContentHandler(id).then(extra => ({
      title: title ? title : null,
      img: extra[0] ? extra[0].img : null,
      genres: genres ? genres : null,
      synopsis: synopsis ? synopsis : null,
      rating: extra[0] ? extra[0].rating : null,
      status: extra[0] ? extra[0].status : null,
      type: extra[0] ? extra[0].type : null,
      firstAired: extra[0] ? String(extra[0].firstAired).trim() : null,
      score: extra[0] ? extra[0].score : null,
      totalEps: extra[0] ? extra[0].totalEps : null,
      episodes: extra[0] ? extra[0].episodes : null,
    })));
  });
  return await Promise.all(promises);
};

const tv = async(page) =>{
  const res = await fetch(`${url.TV_URL}/page/${page}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.container div.centerAligner div.container-left div.big-list div.bl-grid').each((index , element) => {
    const $element = $(element);
    const id = $element.find('div.bl-box a.blb-title').attr('href').slice(26);
    const title = $element.find('div.bl-box a.blb-title').text().trim();
    //const img = $element.find('div.bl-box a.blb-image img').attr('src');
    const genres = [];
    $element.find('div.bl-box div.bld-right div.details').eq(0).find('a').each((j , el) =>{
      const $el = $(el);
      const genre = $el.attr('href').split('/')[5];
      genres.push(genre);
    });
    const synopsis = $element.find('div.bl-box div.bld-right div.details').eq(1).text().replace('Description :' , '').trim();
    promises.push(animeContentHandler(id).then(extra => ({
      title: title ? title : null,
      img: extra[0] ? extra[0].img : null,
      genres: genres ? genres : null,
      synopsis: synopsis ? synopsis : null,
      rating: extra[0] ? extra[0].rating : null,
      status: extra[0] ? extra[0].status : null,
      type: extra[0] ? extra[0].type : null,
      firstAired: extra[0] ? String(extra[0].firstAired).trim() : null,
      score: extra[0] ? extra[0].score : null,
      totalEps: extra[0] ? extra[0].totalEps : null,
      episodes: extra[0] ? extra[0].episodes : null,
    })));
  });
  return await Promise.all(promises);
};

const ova = async(page) =>{
  const res = await fetch(`${url.OVA_URL}/page/${page}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.container div.centerAligner div.container-left div.big-list div.bl-grid').each((index , element) => {
    const $element = $(element);
    const id = $element.find('div.bl-box a.blb-title').attr('href').slice(26);
    const title = $element.find('div.bl-box a.blb-title').text().trim();
    //const img = $element.find('div.bl-box a.blb-image img').attr('src');
    const genres = [];
    $element.find('div.bl-box div.bld-right div.details').eq(0).find('a').each((j , el) =>{
      const $el = $(el);
      const genre = $el.attr('href').split('/')[5];
      genres.push(genre);
    });
    const synopsis = $element.find('div.bl-box div.bld-right div.details').eq(1).text().replace('Description :' , '').trim();
    promises.push(animeContentHandler(id).then(extra => ({
      title: title ? title : null,
      img: extra[0] ? extra[0].img : null,
      genres: genres ? genres : null,
      synopsis: synopsis ? synopsis : null,
      rating: extra[0] ? extra[0].rating : null,
      status: extra[0] ? extra[0].status : null,
      type: extra[0] ? extra[0].type : null,
      firstAired: extra[0] ? String(extra[0].firstAired).trim() : null,
      score: extra[0] ? extra[0].score : null,
      totalEps: extra[0] ? extra[0].totalEps : null,
      episodes: extra[0] ? extra[0].episodes : null,
    })));
  });
  return await Promise.all(promises);
};

const movies = async(page) =>{
  const res = await fetch(`${url.MOVIE_URL}/page/${page}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.container div.centerAligner div.container-left div.big-list div.bl-grid').each((index , element) => {
    const $element = $(element);
    const id = $element.find('div.bl-box a.blb-title').attr('href').slice(26);
    const title = $element.find('div.bl-box a.blb-title').text().trim();
    //const img = $element.find('div.bl-box a.blb-image img').attr('src');
    const genres = [];
    $element.find('div.bl-box div.bld-right div.details').eq(0).find('a').each((j , el) =>{
      const $el = $(el);
      const genre = $el.attr('href').split('/')[5];
      genres.push(genre);
    });
    const synopsis = $element.find('div.bl-box div.bld-right div.details').eq(1).text().replace('Description :' , '').trim();
    promises.push(animeContentHandler(id).then(extra => ({
      title: title ? title : null,
      img: extra[0] ? extra[0].img : null,
      genres: genres ? genres : null,
      synopsis: synopsis ? synopsis : null,
      rating: extra[0] ? extra[0].rating : null,
      status: extra[0] ? extra[0].status : null,
      type: extra[0] ? extra[0].type : null,
      firstAired: extra[0] ? String(extra[0].firstAired).trim() : null,
      score: extra[0] ? extra[0].score : null,
    })));
    promises.push(animeMovieContentHandler(id).then(extra => ({
      video: extra[0] ? extra[0].video : null,
    })));
  });
  return await Promise.all(promises);
};

const latestEpisodes = async(page) =>{
  const res = await fetch(`${url.LATEST_EPS_URL}/page/${page}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.container div.container-item div.date-list div.dl-item').each((index , element) =>{
    const $element = $(element);
    const id = $element.find('div.name a').attr('href').slice(32);
    const contentId = 'watch/' + $element.find('div.name a').attr('href').split('/')[4];
    const title = $element.find('div.name a').text().split('-')[0].trim();
    const episodePublished = $element.find('div.time').text();
    const episode = parseInt($element.find('div.name a').text().split('\n')[1].match(/\d+/) , 10);
    promises.push(animeContentHandler(contentId).then(extra => ({
      title: title ? title : null,
      episode: episode ? episode : null,
      episodePublished: episodePublished ? episodePublished: null,
      img: extra[0] ? extra[0].img : null,
      type: extra[0] ? extra[0].type : null,
      firstAired: extra[0] ? String(extra[0].firstAired).trim() : null,
      score: extra[0] ? extra[0].score : null,
      totalEps: extra[0] ? extra[0].totalEps : null,
      episodes: extra[0] ? extra[0].episodes : null,
    })));
    promises.push(animeVideoHandler(id).then(extra => ({
      video: extra[0] ? extra[0] : null,
    })));
  });
  return await Promise.all(promises)
};

const popular = async() =>{
  const res = await fetch(`${url.POPULAR_URL}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.main div.container div.centerAligner div.container-left div.big-list div.wide-anime-box').each((index , element) => {
    const $element = $(element);
    const id = $element.find('a').attr('href').slice(26);
    const title = $element.find('div.wab-right h3.wab-title').text().trim();
    //const img = $element.find('a').attr('style').match(/(https?:\/\/[^ ]*)/)[1].replace(')' , '').trim();
    //const genres = [];
    //$('div.wab-links a').each((j , el) =>{
    //  const $el = $(el);
    //  const genre = $el.attr('href').split('/')[5];
    //  genres.push(genre);
    //});
    const synopsis = $element.find('div.wab-right div.wab-desc').text().trim();
    promises.push(animeContentHandler(id).then(extra => ({
      title: title ? title : null,
      img: extra[0] ? extra[0].img : null,
      genres: extra[0] ? extra[0].genres : null,
      synopsis: synopsis ? synopsis : null,
      rating: extra[0] ? extra[0].rating : null,
      status: extra[0] ? extra[0].status : null,
      type: extra[0] ? extra[0].type : null,
      firstAired: extra[0] ? String(extra[0].firstAired).trim() : null,
      score: extra[0] ? extra[0].score : null,
      totalEps: extra[0] ? extra[0].totalEps : null,
      episodes: extra[0] ? extra[0].episodes : null,
    })));
  });
  return await Promise.all(promises);
};

const ongoingAnime = async() =>{
  const res = await fetch(`${url.ONGOING_URL}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.container div.centerAligner div.container-left div.big-list div.bl-grid').each((index , element) => {
    const $element = $(element);
    const id = $element.find('div.bl-box a.blb-title').attr('href').slice(26);
    const title = $element.find('div.bl-box a.blb-title').text().trim();
    //const img = $element.find('div.bl-box a.blb-image img').attr('src');
    const genres = [];
    $element.find('div.bl-box div.bld-right div.details').eq(0).find('a').each((j , el) =>{
      const $el = $(el);
      const genre = $el.attr('href').split('/')[5];
      genres.push(genre);
    });
    const synopsis = $element.find('div.bl-box div.bld-right div.details').eq(1).text().replace('Description :' , '').trim();
    promises.push(animeContentHandler(id).then(extra => ({
      title: title ? title : null,
      img: extra[0] ? extra[0].img : null,
      genres: genres ? genres : null,
      synopsis: synopsis ? synopsis : null,
      rating: extra[0] ? extra[0].rating : null,
      status: extra[0] ? extra[0].status : null,
      type: extra[0] ? extra[0].type : null,
      firstAired: extra[0] ? String(extra[0].firstAired).trim() : null,
      score: extra[0] ? extra[0].score : null,
      totalEps: extra[0] ? extra[0].totalEps : null,
      episodes: extra[0] ? extra[0].episodes : null,
    })));
  });
  return await Promise.all(promises);
};

const animeContentHandler = async(id) =>{
  const res = await fetch(`${url.BASE_URL}/${id}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.main div.container').each((index , element) =>{
    const $element = $(element);
    const genres = [];
    $element.find('div.animeDetail-top div.animeDetail-tags div.animeDetail-item').eq(1).find('a.blueColor').each((j , el) =>{
      const $el = $(el);
      const genre = $el.attr('href').split('/')[5];
      genres.push(genre);
    });
    if(typeof genres[0] === 'undefined'){
      $element.find('div.animeDetail-top div.animeDetail-tags div.animeDetail-item').eq(0).find('a.blueColor').each((j , el) =>{
        const $el = $(el);
        const genre = $el.attr('href').split('/')[5];
        genres.push(genre);
      });
    }
    const tempGenres = genres.filter(x => !!x);
    const img = $element.find('div.animeDetail-top div.animeDetail-image img').attr('src');
    const rating = $element.find('div.animeDetail-top div.animeDetail-tags div.animeDetail-item').eq(3).text().split(':')[1].trim();
    const status = $element.find('div.animeDetail-top div.animeDetail-tags div.animeDetail-item').eq(4).text().split(':')[1].trim();
    const type = $element.find('div.animeDetail-top div.animeDetail-tags div.animeDetail-item').eq(5).text().split(':')[1].trim();
    const firstAired = $element.find('div.animeDetail-top div.animeDetail-tags div.animeDetail-item').eq(6).text().split(':')[1];
    const score = parseFloat($element.find('div.animeDetail-top div.animeDetailRate div.animeDetailRate-right').text().trim());
    let totalEps = parseInt($element.find('div.container-left div.container-item div.ci-contents div.ci-ct ul.check-list li a')
      .eq(0).attr('href').split('/')[6].split('-')[1], 
      10
    );
    try{
      if(totalEps !== totalEps){
        totalEps = parseInt($element.find('div.container-left div.container-item div.ci-contents div.ci-ct ul.check-list li a')
          .eq(1).attr('href').split('/')[6].split('-')[1],
          10
        );
      }
    }catch(error){
      console.log(error);
    }
    const animeId = $element.find('div.container-left div.container-item div.ci-contents div.ci-ct ul.check-list li a')
      .eq(0).attr('href').split('/')[4];
    let episodes = Array.from({length: totalEps} , (v , k) =>{
      return{
        //${url.BASE_URL}/watch/${id}
        id: `${animeId}/episode/episode-${k + 1}`
      }
    });
    //if(util.isEmpty(episodes) && totalEps !== totalEps){
    //  episodes.push(animeId)
    //}
    promises.push({
      img: img,
      genres: tempGenres,
      rating: rating,
      status: status,
      type: type,
      firstAired: firstAired,
      score: score,
      totalEps: totalEps,
      episodes: episodes,
    });
  });
  return await Promise.all(promises);
};

const animeMovieContentHandler = async(id) =>{
  const res = await fetch(`${url.BASE_URL}/${id}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('div.main div.container').each((index , element) =>{
    const $element = $(element);
    const animeId = $element.find('div.container-left div.container-item div.ci-contents div.ci-ct ul.check-list li a').attr('href').slice(32);
    promises.push(animeVideoHandler(animeId).then(extra => ({
      video: extra[0] ? extra[0] : null,
    })));
  });
  return await Promise.all(promises);
};

//animeMovieContentHandler('watch/kimi-no-na-wa')
//  .then(d =>{
//    console.log(d);
//  })

const animeVideoHandler = async(id) =>{
  const res = await fetch(`${url.BASE_URL}/watch/${id}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const scripts = $('script');
  const video = [];

  Array.from({length: scripts.length} , (v , k) =>{
    const $script = $(scripts[k]);
    const contents = $script.html();
    try{
      if((contents || '').includes('var file = "')) {
        const mp4 = contents.split('var file = ')[1].split(';')[0].split(`"`)[1]
        var file = mp4;
        
        //Technique used by the animefreak page to obtain the real src of the mp4
        // Therefore, most srcs should now work and reproduce correctly.
        const _file = file.split("anime1.com/")[1]
        const random = Math.floor(Math.random() * (11 - 6 + 1) ) + 6;
        const realMP4 = `https://st${random}.anime1.com/` + _file;
        video.push({mp4: realMP4});
      }
    }catch(error){
      console.log(error);
    }
  });
  return await Promise.all(video);
};

module.exports = {
  animeVideoHandler,
  ongoingAnime,
  popular,
  latestEpisodes,
  movies,
  ova,
  tv,
  search,
  genres
};