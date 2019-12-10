const app = require('../src/app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const {expect} = chai;

chai.use(chaiHttp);


describe('> server ...' , () =>{
  it('Welcome user to animefreak api' , ok =>{
    chai
      .request(app)
      .get('/')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.headers['content-type']).contains('application/json');
        expect(res.body.message).to.equal('🦄🌈✨👋🌎🌍🌏✨🌈🦄');
        ok();
      });
  });

  it('MAIN ENTRY - GET Method /api/v1/' , ok =>{
    chai
      .request(app)
      .get('/api/v1/')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.entries).to.be.an('Array');
        ok();
      });
  });
});


describe('> entries ...' , () =>{
  it('GET Method /api/v1/AnimeVideoHandler/:id' , ok =>{
    chai
      .request(app)
      .get('/api/v1/AnimeVideoHandler/tokyo-ghoul/episode/episode-1')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.video).to.be.an('array');
        expect(res.body.video[0]).to.have.deep.property('mp4');
      })
      ok();
  });
  it('GET Method /api/v1/OngoingAnime' , ok =>{
    chai
      .request(app)
      .get('/api/v1/OngoingAnime')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.anime).to.not.be.empty;
        expect(res.body.anime[0]).to.have.property('title');
      })
      ok();
  });
  it('GET Method /api/v1/Popular' , ok =>{
    chai
      .request(app)
      .get('/api/v1/Popular')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.anime).to.not.be.empty;
        expect(res.body.anime[0]).to.have.property('title');
      })
      ok();
  });
  it('GET Method /api/v1/LatestEpisodes/:page' , ok =>{
    chai
      .request(app)
      .get('/api/v1/LatestEpisodes/1')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.anime).to.not.be.empty;
        expect(res.body.anime[0]).to.have.property('title');
      })
      ok();
  });
  it('GET Method /api/v1/Movies/:page' , ok =>{
    chai
      .request(app)
      .get('/api/v1/Movies/1')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.movies).to.not.be.empty;
        expect(res.body.movies[0]).to.have.property('title');
      })
      ok();
  });
  it('GET Method /api/v1/Ova/:page' , async ok =>{
    chai
      .request(app)
      .get('/api/v1/Ova/1')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.ova).to.not.be.empty;
        expect(res.body.ova[0]).to.have.property('title');
      })
      ok();
  });
  it('GET Method /api/v1/TV/:page' , ok =>{
    chai
      .request(app)
      .get('/api/v1/TV/1')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.tv).to.not.be.empty;
        expect(res.body.tv[0]).to.have.property('title');
      })
      ok();
  });
  it('GET Method /api/v1/Search/:query' , ok =>{
    chai
      .request(app)
      .get('/api/v1/Search/tokyo ghoul')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.search).to.not.be.empty;
      })
      ok();
  });
  it('GET Method /api/v1/Genres/:genre/:page' , ok =>{
    chai
      .request(app)
      .get('/api/v1/Genres/action/1')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.anime).to.not.be.empty;
        expect(res.body.anime[0]).to.have.property('title');
      })
      ok();
  });
});