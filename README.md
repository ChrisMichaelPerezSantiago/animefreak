# **:triangular_flag_on_post: ANIMEFREAK API** (version 1.0.0)

![node version](https://img.shields.io/badge/node->=10.16.x-brightgreen.svg)
![npm version](https://img.shields.io/badge/npm->=6.9.x-brightgreen.svg)
<a href="https://github.com/ChrisMichaelPerezSantiago/animefreak/graphs/commit-activity">
  <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
</a>
<a href="https://github.com/ChrisMichaelPerezSantiago/animefreak/blob/master/LICENSE">
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
</a>
<img src="https://img.shields.io/badge/now.sh-deployed-brightgreen.svg" alt="">
<img src="https://badgen.net/badge/icon/now?icon=now&label" alt="">
<img src="https://img.shields.io/badge/animefreak-API-brightgreen.svg" alt="">
[![Build Status](https://travis-ci.org/ChrisMichaelPerezSantiago/animefreak.svg?branch=master)](https://travis-ci.org/ChrisMichaelPerezSantiago/animefreak)
<img src="https://img.shields.io/github/stars/ChrisMichaelPerezSantiago/animefreak?style=social" alt="">

         
 <a href="https://nodei.co/npm/animefreak/"><img src="https://nodei.co/npm/animefreak.png"></a>


         
>Animefreak is a custom API that provides data from the `animefreak.tv` website. You will have access to the entire catalog whether movies, series, current episodes, genres, search content, etc. with English subtitles.

---


## :tada: Updates in version v1.0.0 :tada:
- [x] *API documentation finished.*
- [x] *animefreak npm package available for use.*
- [x] *API available from the web*


## :rocket: Custom animefreak API Link
[animefreak api](https://animefreak.chrismichael.now.sh/api/v1/)

## **:wrench: Developer usage**

### **Set up project**

Before cloning the repo **be sure** you have installed:

- [**NODE**](https://www.google.com/search?q=how+to+install+node) (version >= 10.16.x)
- [**NPM**](https://www.google.com/search?q=how+to+install+npm) (version >= 6.9.x)

Then:

- Choose a folder project in your system and switch in `cd [folder path]`
- Clone the repo in your folder path `git clone https://github.com/ChrisMichaelPerezSantiago/animefreak.git`

---

### **Installation**

In order to install the project and all dependencies, enter in the project folder and run `npm install`

---

### Start Local Node/Express Server

```bash
npm run start
```

or

```bash
npm run dev
```

### Testing API Methods

```bash
npm run dev-api
```

---


## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

## API Documentation
```javascript
  const api = require('animefreak');
```
### 📣Read this please | To get the videos!📣
## api.animeVideoHandler([id])
---

*To get the videos (mp4) of each chapter, you only need to use the `api.animeVideoHandler` function that receives the id of the episode as a parameter.* 
*To verify the id of each episode, look at the episodes property:*

```json
 "episodes": [
    {
      "id": "tokyo-ghoul/episode/episode-1"
    },
    {
      "id": "tokyo-ghoul/episode/episode-2"
    },
    {
      "id": "tokyo-ghoul/episode/episode-3"
    },
    {
      "id": "tokyo-ghoul/episode/episode-4"
    },
    {
      "id": "tokyo-ghoul/episode/episode-5"
    },
    {
      "id": "tokyo-ghoul/episode/episode-6"
    },
    {
      "id": "tokyo-ghoul/episode/episode-7"
    },
    {
      "id": "tokyo-ghoul/episode/episode-8"
    },
    {
      "id": "tokyo-ghoul/episode/episode-9"
    },
    {
      "id": "tokyo-ghoul/episode/episode-10"
    },
    {
      "id": "tokyo-ghoul/episode/episode-11"
    },
    {
      "id": "tokyo-ghoul/episode/episode-12"
    }
  ]
```

*You just have to pass the `id` of the episode*

```javascript
api.animeVideoHandler('tokyo-ghoul/episode/episode-12')
  .then(res =>{
    console.log(res)
});
```

```json
// 20191209122332
// http://localhost:5000/api/v1/AnimeVideoHandler/tokyo-ghoul/episode/episode-12

{
  "video": [
    {
      "mp4": "http://st8.anime1.com/[HorribleSubs] Tokyo Ghoul - 12 [480p]_a1.mp4?st=5qJfe7rxHaGYg-8w0sJX5A&e=1575926181"
    }
  ]
}
```

*Now you just need to use the `mp4` property of each `episodes id` and pass it to the video element*

```html
<video width="400" controls>
  <source src="http://st8.anime1.com/[HorribleSubs] Tokyo Ghoul - 12 [480p]_a1.mp4?st=5qJfe7rxHaGYg-8w0sJX5A&e=1575926181" type="video/mp4">
  Your browser does not support HTML5 video.
</video>
```

## api.ongoingAnime()
---

```json
// 20191209123206
// http://localhost:5000/api/v1/OngoingAnime

{
  "anime": [
    {
      "title": "Okoshiyasu, Chitose-chan",
      "img": "https://www.animefreak.tv/meta/anime/8210/okoshiyasu-chitose-chan.jpg",
      "genres": [
        "comedy",
        "slice-of-life"
      ],
      "synopsis": "Chitose-chan is a penguin who lives in Kyoto. Getting in touch with people and getting fed delicious food as she curiously walks around Kyoto streets is her favourite thing to do. The story features popular places in Kyoto like Kiyomizu Temple, Ginkaku Temple, and Gion from the Penguin's point of view. This is a short story about a penguin that is nostalgic and warm, curing and relieving the heart.\n\n(Source: MAL News)",
      "rating": "Ongoing",
      "status": "TV Series",
      "type": "Oct 07, 2018",
      "firstAired": "undefined",
      "score": 10,
      "totalEps": 9,
      "episodes": [
        {
          "id": "okoshiyasu-chitose-chan/episode/episode-1"
        },
        {
          "id": "okoshiyasu-chitose-chan/episode/episode-2"
        },
        {
          "id": "okoshiyasu-chitose-chan/episode/episode-3"
        },
        {
          "id": "okoshiyasu-chitose-chan/episode/episode-4"
        },
        {
          "id": "okoshiyasu-chitose-chan/episode/episode-5"
        },
        {
          "id": "okoshiyasu-chitose-chan/episode/episode-6"
        },
        {
          "id": "okoshiyasu-chitose-chan/episode/episode-7"
        },
        {
          "id": "okoshiyasu-chitose-chan/episode/episode-8"
        },
        {
          "id": "okoshiyasu-chitose-chan/episode/episode-9"
        }
      ]
    },
  ]
}
```

## api.popular()
---
```json
// 20191209123320
// http://localhost:5000/api/v1/Popular

{
  "anime": [
    {
      "title": "Tensei shitara Slime Datta Ken",
      "img": "https://www.animefreak.tv/meta/anime/8179/tensei-shitara-slime-datta-ken.jpg",
      "genres": [
        "fantasy"
      ],
      "synopsis": "\"Rimuru Tempest\" is the new name of a slime in a fantasy world taken by a former 37-year-old human Satou Mikami after he is killed by a passing robber. Broken free from ordinary, stale past life, his fresh adventure in a fantasy world as a slime monster with unique abilities begins.",
      "rating": "Teen +13",
      "status": "Ongoing",
      "type": "TV Series",
      "firstAired": "Oct 01, 2018",
      "score": 9.23,
      "totalEps": 25,
      "episodes": [
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-1"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-2"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-3"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-4"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-5"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-6"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-7"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-8"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-9"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-10"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-11"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-12"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-13"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-14"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-15"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-16"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-17"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-18"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-19"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-20"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-21"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-22"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-23"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-24"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-25"
        }
      ]
    },
  ]
}
```

## api.latestEpisodes([page])
---
| Page From | Limit |
|-----------|--------
| 1         | N/A   |   

```json
// 20191209123421
// http://localhost:5000/api/v1/LatestEpisodes/1

{
  "anime": [
    {
      "title": "Stand My Heroes: Piece of Truth",
      "episode": 10,
      "episodePublished": "an hour ago",
      "img": "https://www.animefreak.tv/meta/anime/8423/stand-my-heroes-piece-of-truth.jpg",
      "type": "TV Series",
      "firstAired": "Oct 07, 2019",
      "score": 5.94,
      "totalEps": 10,
      "episodes": [
        {
          "id": "stand-my-heroes-piece-of-truth/episode/episode-1"
        },
        {
          "id": "stand-my-heroes-piece-of-truth/episode/episode-2"
        },
        {
          "id": "stand-my-heroes-piece-of-truth/episode/episode-3"
        },
        {
          "id": "stand-my-heroes-piece-of-truth/episode/episode-4"
        },
        {
          "id": "stand-my-heroes-piece-of-truth/episode/episode-5"
        },
        {
          "id": "stand-my-heroes-piece-of-truth/episode/episode-6"
        },
        {
          "id": "stand-my-heroes-piece-of-truth/episode/episode-7"
        },
        {
          "id": "stand-my-heroes-piece-of-truth/episode/episode-8"
        },
        {
          "id": "stand-my-heroes-piece-of-truth/episode/episode-9"
        },
        {
          "id": "stand-my-heroes-piece-of-truth/episode/episode-10"
        }
      ]
    },
    {
      "video": {
        "mp4": "http://st6.anime1.com/[HorribleSubs] Stand My Heroes - Piece of Truth - 10 [720p]_af.mp4?st=vzw__AEBHoTWSs_mLIIpsA&e=1575926830"
      }
    },
  ]
}
```

## api.movies([page])
---
| Page From | Limit |
|-----------|--------
| 1         | N/A   |   

```json
// 20191209123713
// http://localhost:5000/api/v1/Movies/1

{
  "movies": [
    {
      "title": "Kimi no Na wa.",
      "img": "https://www.animefreak.tv/meta/anime/5959/kimi-no-na-wa.jpg",
      "genres": [
        "school",
        "drama",
        "romance",
        "supernatural"
      ],
      "synopsis": "Description: The story is set one month after a comet has fallen for the first time in a thousand years in Japan. Mitsuha, a high school girl living in the countryside, wants to live in the city because she is tired of life in the country. Then, there's Taki. He's a high school student living in Tokyo with his friends while working as a part-timer at an Italian restaurant. He also has a strong interest in fine arts involving architecture. One day, Mitsuha dreams of herself as a young man. On the other hand, Taki also has a dream where he is a female student attending high school in the countryside. What's the secret behind their dreams?",
      "rating": "Teen +13",
      "status": "Finished",
      "type": "Movie",
      "firstAired": "Sep 08, 2016",
      "score": 9.54
    },
    {
      "video": {
        "mp4": "http://st2.anime1.com/Kimi no Na wa.mp4?st=TqbDTTWDVCeLgdqp1bh2iQ&e=1575927001"
      }
    },
  ]
}
```

## api.ova([page])
---
| Page From | Limit |
|-----------|--------
| 1         | N/A   |   

```json
// 20191209123814
// http://localhost:5000/api/v1/Ova/1

{
  "ova": [
    {
      "title": "Baki (2018)",
      "img": "https://www.animefreak.tv/meta/anime/5765/baki-2018.jpg",
      "genres": [
        "action",
        "shounen",
        "martial-arts"
      ],
      "synopsis": "Description: The protagonist, Baki Hanma, trains with an intense focus to become strong enough to surpass his father, Yujiro Hanma, the strongest fighter in the world. Five of the world's most violent and brutal death row inmates are gathering to face Baki. Their objective is to taste defeat -- their unmatched strength and skill have led them to grow bored of life itself, and they now seek out Baki in the hopes that he can overwhelm and utterly crush them. In this crisis, other underground martial art warriors gather to fight by Baki's side: Kaoru Hanayama, Gouki Shibukawa, Retsu Kaioh, and Doppo Orochi. An epic showdown between violent death row inmates and Baki and his friends begins!",
      "rating": "Everyone",
      "status": "Ongoing",
      "type": "OVA Series",
      "firstAired": "Jul 05, 2018",
      "score": 9.28,
      "totalEps": 26,
      "episodes": [
        {
          "id": "baki-2018/episode/episode-1"
        },
        {
          "id": "baki-2018/episode/episode-2"
        },
        {
          "id": "baki-2018/episode/episode-3"
        },
        {
          "id": "baki-2018/episode/episode-4"
        },
        {
          "id": "baki-2018/episode/episode-5"
        },
        {
          "id": "baki-2018/episode/episode-6"
        },
        {
          "id": "baki-2018/episode/episode-7"
        },
        {
          "id": "baki-2018/episode/episode-8"
        },
        {
          "id": "baki-2018/episode/episode-9"
        },
        {
          "id": "baki-2018/episode/episode-10"
        },
        {
          "id": "baki-2018/episode/episode-11"
        },
        {
          "id": "baki-2018/episode/episode-12"
        },
        {
          "id": "baki-2018/episode/episode-13"
        },
        {
          "id": "baki-2018/episode/episode-14"
        },
        {
          "id": "baki-2018/episode/episode-15"
        },
        {
          "id": "baki-2018/episode/episode-16"
        },
        {
          "id": "baki-2018/episode/episode-17"
        },
        {
          "id": "baki-2018/episode/episode-18"
        },
        {
          "id": "baki-2018/episode/episode-19"
        },
        {
          "id": "baki-2018/episode/episode-20"
        },
        {
          "id": "baki-2018/episode/episode-21"
        },
        {
          "id": "baki-2018/episode/episode-22"
        },
        {
          "id": "baki-2018/episode/episode-23"
        },
        {
          "id": "baki-2018/episode/episode-24"
        },
        {
          "id": "baki-2018/episode/episode-25"
        },
        {
          "id": "baki-2018/episode/episode-26"
        }
      ]
    },
  ]
}
```

## api.tv([page])
---
| Page From | Limit |
|-----------|--------
| 1         | N/A   |   

```json
// 20191209124004
// http://localhost:5000/api/v1/TV/1

{
  "tv": [
    {
      "title": "Tensei shitara Slime Datta Ken",
      "img": "https://www.animefreak.tv/meta/anime/8179/tensei-shitara-slime-datta-ken.jpg",
      "genres": [
        "fantasy"
      ],
      "synopsis": "Description: \"Rimuru Tempest\" is the new name of a slime in a fantasy world taken by a former 37-year-old human Satou Mikami after he is killed by a passing robber. Broken free from ordinary, stale past life, his fresh adventure in a fantasy world as a slime monster with unique abilities begins.",
      "rating": "Teen +13",
      "status": "Ongoing",
      "type": "TV Series",
      "firstAired": "Oct 01, 2018",
      "score": 9.23,
      "totalEps": 25,
      "episodes": [
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-1"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-2"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-3"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-4"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-5"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-6"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-7"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-8"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-9"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-10"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-11"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-12"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-13"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-14"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-15"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-16"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-17"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-18"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-19"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-20"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-21"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-22"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-23"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-24"
        },
        {
          "id": "tensei-shitara-slime-datta-ken/episode/episode-25"
        }
      ]
    },
  ]
}
```

## api.search([query])
---
```json
// 20191209124113
// http://localhost:5000/api/v1/search/tokyo

{
  "search": [
    {
      "title": "Tokyo Ghoul",
      "img": "https://www.animefreak.tv/meta/anime/7301/tokyo-ghoul.jpg",
      "rating": "Teen +17",
      "status": "Finished",
      "type": "TV Series",
      "firstAired": "Jul 03, 2014",
      "score": 9.23,
      "totalEps": 12,
      "episodes": [
        {
          "id": "tokyo-ghoul/episode/episode-1"
        },
        {
          "id": "tokyo-ghoul/episode/episode-2"
        },
        {
          "id": "tokyo-ghoul/episode/episode-3"
        },
        {
          "id": "tokyo-ghoul/episode/episode-4"
        },
        {
          "id": "tokyo-ghoul/episode/episode-5"
        },
        {
          "id": "tokyo-ghoul/episode/episode-6"
        },
        {
          "id": "tokyo-ghoul/episode/episode-7"
        },
        {
          "id": "tokyo-ghoul/episode/episode-8"
        },
        {
          "id": "tokyo-ghoul/episode/episode-9"
        },
        {
          "id": "tokyo-ghoul/episode/episode-10"
        },
        {
          "id": "tokyo-ghoul/episode/episode-11"
        },
        {
          "id": "tokyo-ghoul/episode/episode-12"
        }
      ]
    },
  ]
}
```


## api.genres([genre] , [page])
---
<table>
<tr><th>Genres</th><th>Page Info</th><th>
<tr><td>

|  Genres   | 
|-----------|
| action         |
| adventure , animation |
| cartoon , comedy |
| demons , drama |
| ecchi , english |
| fantasy |
| game |
| harem , historical , horror |
| kids |
| magic , martial-arts , mecha , military , music , mystery|
| parody , police , psychological |
| romance |
| samurai , school , sci-fi , seinen , shoujo , shoujo-ai , shounen , shounen-ai , slice-of-life , space , sports , super-power , supernatural |
| thriller |
| vampire |

</td><td>

| Page From | Limit |
|-----------|--------
| 1         | N/A   |   
</table>

```json
// 20191209124512
// http://localhost:5000/api/v1/Genres/action/1

{
  "anime": [
    {
      "title": "Tate no Yuusha no Nariagari",
      "img": "https://www.animefreak.tv/meta/anime/8257/tate-no-yuusha-no-nariagari.jpg",
      "genres": [
        "drama",
        "comedy",
        "seinen",
        "fantasy",
        "action",
        "adventure",
        "romance"
      ],
      "synopsis": "Description: Stories of old tell of four otherworldly heroes—wielding the sword, spear, bow, and shield—who defended the land from wave after wave of calamity. With the fate of the world in balance, the kingdom of Melromarc summons these legendary figures; in modern-day Japan, the call is answered, and the unwitting heroes are transported to this fantasy universe.\n\nThrust into Melromarc and given the title of \"Shield Hero,\" otaku Naofumi Iwatani is labeled the weakest due to his lack of offensive capability and apparent inexperience. When the heroes part ways to start their journeys, he only has one willing companion: the beautiful princess Malty Melromarc. However, she soon betrays him, steals all his money, and accuses him of taking advantage of her.\n\nFor his alleged crimes, Naofumi is branded a criminal and made outcast of society. With hatred filling his heart, he sets out alone, vowing vengeance against those who wronged him.",
      "rating": "Teen +13",
      "status": "Ongoing",
      "type": "TV Series",
      "firstAired": "Dec 31, 2018",
      "score": 9.22,
      "totalEps": 25,
      "episodes": [
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-1"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-2"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-3"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-4"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-5"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-6"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-7"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-8"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-9"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-10"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-11"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-12"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-13"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-14"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-15"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-16"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-17"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-18"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-19"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-20"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-21"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-22"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-23"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-24"
        },
        {
          "id": "tate-no-yuusha-no-nariagari/episode/episode-25"
        }
      ]
    },
  ]
}
```

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.


---

### **:robot: Author**

_*Chris Michael*_

> You can follow me on
[github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright © 2019 [Chris Michael](http://personal-porfolio.chrismichael.now.sh).
