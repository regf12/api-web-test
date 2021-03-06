define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "docs/main.js",
    "group": "/media/emilio/Utils/projects/portfolio/api-web-test/docs/main.js",
    "groupTitle": "/media/emilio/Utils/projects/portfolio/api-web-test/docs/main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/search/{stringSearch}",
    "title": "Api search",
    "name": "Search",
    "group": "Search",
    "version": "1.0.0",
    "description": "<p>This service allows to obtain the results of three different apis.</p>",
    "parameter": {
      "fields": {
        "Url Parameter": [
          {
            "group": "urlParam",
            "type": "String",
            "optional": false,
            "field": "stringSearch",
            "description": "<p>Search parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resultCount",
            "description": "<p>Number of results with search matches.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "results",
            "description": "<p>Data of results with search matches.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"resultCount\": 9,\n\t\"results\": [\n\t\t{\n\t\t\t\"wrapperType\": \"track\",\n\t\t\t\"kind\": \"music-video\",\n\t\t\t\"artistId\": 74214170,\n\t\t\t\"collectionId\": 131302210,\n\t\t\t\"trackId\": 129352706,\n\t\t\t\"artistName\": \"Jack's Mannequin\",\n\t\t\t\"collectionName\": \"One Tree Hill, Vol. 2: Friends With Benefit (Music from the WB Television Series)\",\n\t\t\t\"trackName\": \"The Mixed Tape\",\n\t\t\t\"collectionCensoredName\": \"One Tree Hill, Vol. 2: Friends With Benefit (Music from the WB Television Series)\",\n\t\t\t\"trackCensoredName\": \"The Mixed Tape\",\n\t\t\t\"collectionArtistId\": 80204262,\n\t\t\t\"artistViewUrl\": \"https://music.apple.com/us/artist/jacks-mannequin/74214170?uo=4\",\n\t\t\t\"collectionViewUrl\": \"https://music.apple.com/us/music-video/the-mixed-tape/129352706?uo=4\",\n\t\t\t\"trackViewUrl\": \"https://music.apple.com/us/music-video/the-mixed-tape/129352706?uo=4\",\n\t\t\t\"previewUrl\": \"https://video-ssl.itunes.apple.com/itunes-assets/Video128/v4/f9/9b/55/f99b554c-24fa-136f-5bb4-0590931573d6/mzvf_5528930120957315186.640x480.h264lc.D2.p.m4v\",\n\t\t\t\"artworkUrl30\": \"https://is3-ssl.mzstatic.com/image/thumb/Video/v4/1d/32/e5/1d32e5dc-39f0-8db7-c7bb-7934cf9b864f/source/30x30bb.jpg\",\n\t\t\t\"artworkUrl60\": \"https://is3-ssl.mzstatic.com/image/thumb/Video/v4/1d/32/e5/1d32e5dc-39f0-8db7-c7bb-7934cf9b864f/source/60x60bb.jpg\",\n\t\t\t\"artworkUrl100\": \"https://is3-ssl.mzstatic.com/image/thumb/Video/v4/1d/32/e5/1d32e5dc-39f0-8db7-c7bb-7934cf9b864f/source/100x100bb.jpg\",\n\t\t\t\"collectionPrice\": 11.99,\n\t\t\t\"trackPrice\": 1.99,\n\t\t\t\"releaseDate\": \"2003-04-28T07:00:00Z\",\n\t\t\t\"collectionExplicitness\": \"notExplicit\",\n\t\t\t\"trackExplicitness\": \"notExplicit\",\n\t\t\t\"discCount\": 1,\n\t\t\t\"discNumber\": 1,\n\t\t\t\"trackCount\": 17,\n\t\t\t\"trackNumber\": 17,\n\t\t\t\"trackTimeMillis\": 195567,\n\t\t\t\"country\": \"USA\",\n\t\t\t\"currency\": \"USD\",\n\t\t\t\"primaryGenreName\": \"Alternative\",\n\t\t\t\"source\": \"itunes\"\n\t\t},\n\t\t{\n\t\t\t\"wrapperType\": \"track\",\n\t\t\t\"kind\": \"music-video\",\n\t\t\t\"artistId\": 909253,\n\t\t\t\"collectionId\": 1445738051,\n\t\t\t\"trackId\": 1445738215,\n\t\t\t\"artistName\": \"Jack Johnson\",\n\t\t\t\"collectionName\": \"To the Sea\",\n\t\t\t\"trackName\": \"You And Your Heart\",\n\t\t\t\"collectionCensoredName\": \"To the Sea\",\n\t\t\t\"trackCensoredName\": \"You And Your Heart (Closed-Captioned)\",\n\t\t\t\"artistViewUrl\": \"https://music.apple.com/us/artist/jack-johnson/909253?uo=4\",\n\t\t\t\"collectionViewUrl\": \"https://music.apple.com/us/music-video/you-and-your-heart-closed-captioned/1445738215?uo=4\",\n\t\t\t\"trackViewUrl\": \"https://music.apple.com/us/music-video/you-and-your-heart-closed-captioned/1445738215?uo=4\",\n\t\t\t\"previewUrl\": \"https://video-ssl.itunes.apple.com/itunes-assets/Video115/v4/f0/92/0c/f0920ce2-8bb7-5e62-b44c-36ce701fe7b1/mzvf_6922739671336234286.640x352.h264lc.U.p.m4v\",\n\t\t\t\"artworkUrl30\": \"https://is1-ssl.mzstatic.com/image/thumb/Video/v4/ae/be/c8/aebec8f3-2baa-7708-1cb9-af064c5423a4/source/30x30bb.jpg\",\n\t\t\t\"artworkUrl60\": \"https://is1-ssl.mzstatic.com/image/thumb/Video/v4/ae/be/c8/aebec8f3-2baa-7708-1cb9-af064c5423a4/source/60x60bb.jpg\",\n\t\t\t\"artworkUrl100\": \"https://is1-ssl.mzstatic.com/image/thumb/Video/v4/ae/be/c8/aebec8f3-2baa-7708-1cb9-af064c5423a4/source/100x100bb.jpg\",\n\t\t\t\"collectionPrice\": 6.99,\n\t\t\t\"trackPrice\": -1,\n\t\t\t\"releaseDate\": \"2010-06-01T07:00:00Z\",\n\t\t\t\"collectionExplicitness\": \"notExplicit\",\n\t\t\t\"trackExplicitness\": \"notExplicit\",\n\t\t\t\"discCount\": 1,\n\t\t\t\"discNumber\": 1,\n\t\t\t\"trackCount\": 15,\n\t\t\t\"trackNumber\": 14,\n\t\t\t\"trackTimeMillis\": 197288,\n\t\t\t\"country\": \"USA\",\n\t\t\t\"currency\": \"USD\",\n\t\t\t\"primaryGenreName\": \"Rock\",\n\t\t\t\"source\": \"itunes\"\n\t\t},\n\t\t{\n\t\t\t\"wrapperType\": \"track\",\n\t\t\t\"kind\": \"music-video\",\n\t\t\t\"artistId\": 5557599,\n\t\t\t\"collectionId\": 264138681,\n\t\t\t\"trackId\": 263305433,\n\t\t\t\"artistName\": \"David Guetta\",\n\t\t\t\"collectionName\": \"Pop Life (Extended Version)\",\n\t\t\t\"trackName\": \"Love Is Gone\",\n\t\t\t\"collectionCensoredName\": \"Pop Life (Extended Version)\",\n\t\t\t\"trackCensoredName\": \"Love Is Gone (Fred Rister & Joachim Garraud Remix)\",\n\t\t\t\"artistViewUrl\": \"https://music.apple.com/us/artist/david-guetta/5557599?uo=4\",\n\t\t\t\"collectionViewUrl\": \"https://music.apple.com/us/music-video/love-is-gone-fred-rister-joachim-garraud-remix/263305433?uo=4\",\n\t\t\t\"trackViewUrl\": \"https://music.apple.com/us/music-video/love-is-gone-fred-rister-joachim-garraud-remix/263305433?uo=4\",\n\t\t\t\"previewUrl\": \"https://video-ssl.itunes.apple.com/itunes-assets/Video128/v4/b8/b9/7c/b8b97c58-63b2-2013-bf07-2b9319d5e415/mzvf_2453882933791869571.640x384.h264lc.U.p.m4v\",\n\t\t\t\"artworkUrl30\": \"https://is5-ssl.mzstatic.com/image/thumb/Video/v4/2c/69/7e/2c697ec3-95b5-7dd8-4664-b7b460025e2f/source/30x30bb.jpg\",\n\t\t\t\"artworkUrl60\": \"https://is5-ssl.mzstatic.com/image/thumb/Video/v4/2c/69/7e/2c697ec3-95b5-7dd8-4664-b7b460025e2f/source/60x60bb.jpg\",\n\t\t\t\"artworkUrl100\": \"https://is5-ssl.mzstatic.com/image/thumb/Video/v4/2c/69/7e/2c697ec3-95b5-7dd8-4664-b7b460025e2f/source/100x100bb.jpg\",\n\t\t\t\"collectionPrice\": 1.99,\n\t\t\t\"trackPrice\": 1.99,\n\t\t\t\"releaseDate\": \"2007-09-18T07:00:00Z\",\n\t\t\t\"collectionExplicitness\": \"notExplicit\",\n\t\t\t\"trackExplicitness\": \"notExplicit\",\n\t\t\t\"discCount\": 2,\n\t\t\t\"discNumber\": 2,\n\t\t\t\"trackCount\": 31,\n\t\t\t\"trackNumber\": 15,\n\t\t\t\"trackTimeMillis\": 222080,\n\t\t\t\"country\": \"USA\",\n\t\t\t\"currency\": \"USD\",\n\t\t\t\"primaryGenreName\": \"Dance\",\n\t\t\t\"source\": \"itunes\"\n\t\t},\n\t\t{\n\t\t\t\"score\": 16.380272,\n\t\t\t\"show\": {\n\t\t\t\t\"id\": 2478,\n\t\t\t\t\"url\": \"http://www.tvmaze.com/shows/2478/surviving-jack\",\n\t\t\t\t\"name\": \"Surviving Jack\",\n\t\t\t\t\"type\": \"Scripted\",\n\t\t\t\t\"language\": \"English\",\n\t\t\t\t\"genres\": [\"Comedy\", \"Family\"],\n\t\t\t\t\"status\": \"Ended\",\n\t\t\t\t\"runtime\": 30,\n\t\t\t\t\"premiered\": \"2014-03-27\",\n\t\t\t\t\"officialSite\": \"https://www.fox.com/surviving-jack/\",\n\t\t\t\t\"schedule\": {\n\t\t\t\t\t\"time\": \"21:30\",\n\t\t\t\t\t\"days\": [\"Thursday\"]\n\t\t\t\t},\n\t\t\t\t\"rating\": {\n\t\t\t\t\t\"average\": 7.3\n\t\t\t\t},\n\t\t\t\t\"weight\": 65,\n\t\t\t\t\"network\": {\n\t\t\t\t\t\"id\": 4,\n\t\t\t\t\t\"name\": \"FOX\",\n\t\t\t\t\t\"country\": {\n\t\t\t\t\t\t\"name\": \"United States\",\n\t\t\t\t\t\t\"code\": \"US\",\n\t\t\t\t\t\t\"timezone\": \"America/New_York\"\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t\"webChannel\": null,\n\t\t\t\t\"externals\": {\n\t\t\t\t\t\"tvrage\": 35772,\n\t\t\t\t\t\"thetvdb\": 269587,\n\t\t\t\t\t\"imdb\": \"tt2395482\"\n\t\t\t\t},\n\t\t\t\t\"image\": {\n\t\t\t\t\t\"medium\": \"http://static.tvmaze.com/uploads/images/medium_portrait/13/33203.jpg\",\n\t\t\t\t\t\"original\": \"http://static.tvmaze.com/uploads/images/original_untouched/13/33203.jpg\"\n\t\t\t\t},\n\t\t\t\t\t\"summary\": \"<p>Set in Southern California, in 1991, the series centers on Jack Dunlevy, an ex-military man and no-nonsense guy who becomes a full-time parent when his w*ife decides to go to law school. He takes an unorthodox approach to keeping his teenagers, Frankie and Rachel, in line.</p>\",\n\t\t\t\t\"updated\": 1602796433,\n\t\t\t\t\"_links\": {\n\t\t\t\t\t\"self\": {\n\t\t\t\t\t\t\"href\": \"http://api.tvmaze.com/shows/2478\"\n\t\t\t\t\t},\n\t\t\t\t\t\"previousepisode\": {\n\t\t\t\t\t\t\"href\": \"http://api.tvmaze.com/episodes/186214\"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"source\": \"tvmaze\"\n\t\t},\n\t\t{\n\t\t\t\"score\": 16.155142,\n\t\t\t\"show\": {\n\t\t\t\t\"id\": 43031,\n\t\t\t\t\"url\": \"http://www.tvmaze.com/shows/43031/jack-reacher\",\n\t\t\t\t\"name\": \"Jack Reacher\",\n\t\t\t\t\"type\": \"Scripted\",\n\t\t\t\t\"language\": \"English\",\n\t\t\t\t\"genres\": [\"Drama\"],\n\t\t\t\t\"status\": \"In Development\",\n\t\t\t\t\"runtime\": 60,\n\t\t\t\t\"premiered\": null,\n\t\t\t\t\"officialSite\": null,\n\t\t\t\t\"schedule\": {\n\t\t\t\t\t\"time\": \"\",\n\t\t\t\t\t\"days\": []\n\t\t\t\t},\n\t\t\t\t\"rating\": {\n\t\t\t\t\t\"average\": null\n\t\t\t\t},\n\t\t\t\t\"weight\": 56,\n\t\t\t\t\"network\": null,\n\t\t\t\t\"webChannel\": {\n\t\t\t\t\t\"id\": 3,\n\t\t\t\t\t\"name\": \"Amazon Prime\",\n\t\t\t\t\t\"country\": null\n\t\t\t\t},\n\t\t\t\t\"externals\": {\n\t\t\t\t\t\"tvrage\": null,\n\t\t\t\t\t\"thetvdb\": 366924,\n\t\t\t\t\t\"imdb\": \"tt9288030\"\n\t\t\t\t},\n\t\t\t\t\"image\": null,\n\t\t\t\t\"summary\": \"<p><b>Jack Reacher</b> is a drama series based on the character from Lee Child's bestselling novels.</p>\",\n\t\t\t\t\"updated\": 1599335465,\n\t\t\t\t\"_links\": {\n\t\t\t\t\t\"self\": {\n\t\t\t\t\t\t\"href\": \"http://api.tvmaze.com/shows/43031\"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"source\": \"tvmaze\"\n\t\t},\n\t\t{\n\t\t\t\"score\": 16.133999,\n\t\t\t\"show\": {\n\t\t\t\t\"id\": 30702,\n\t\t\t\t\"url\": \"http://www.tvmaze.com/shows/30702/gentleman-jack\",\n\t\t\t\t\"name\": \"Gentleman Jack\",\n\t\t\t\t\"type\": \"Scripted\",\n\t\t\t\t\"language\": \"English\",\n\t\t\t\t\"genres\": [\"Drama\", \"Romance\", \"History\"],\n\t\t\t\t\"status\": \"Running\",\n\t\t\t\t\"runtime\": 60,\n\t\t\t\t\"premiered\": \"2019-04-22\",\n\t\t\t\t\"officialSite\": \"https://www.hbo.com/gentleman-jack\",\n\t\t\t\t\"schedule\": {\n\t\t\t\t\t\"time\": \"22:00\",\n\t\t\t\t\t\"days\": [\"Monday\"]\n\t\t\t\t},\n\t\t\t\t\"rating\": {\n\t\t\t\t\t\"average\": 7.2\n\t\t\t\t},\n\t\t\t\t\"weight\": 89,\n\t\t\t\t\"network\": {\n\t\t\t\t\t\"id\": 8,\n\t\t\t\t\t\"name\": \"HBO\",\n\t\t\t\t\t\"country\": {\n\t\t\t\t\t\t\"name\": \"United States\",\n\t\t\t\t\t\t\"code\": \"US\",\n\t\t\t\t\t\t\"timezone\": \"America/New_York\"\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t\"webChannel\": null,\n\t\t\t\t\"externals\": {\n\t\t\t\t\t\"tvrage\": null,\n\t\t\t\t\t\"thetvdb\": 348443,\n\t\t\t\t\t\"imdb\": \"tt7211618\"\n\t\t\t\t},\n\t\t\t\t\"image\": {\n\t\t\t\t\t\"medium\": \"http://static.tvmaze.com/uploads/images/medium_portrait/191/478580.jpg\",\n\t\t\t\t\t\"original\": \"http://static.tvmaze.com/uploads/images/original_untouched/191/478580.jpg\"\n\t\t\t\t},\n\t\t\t\t\t\"summary\": \"<p><b>Gentleman Jack</b> is a remarkable and unlikely love story set in the complex, changing world of 1832 Halifax - the cradle of the industrial revolution - just as it's all kicking off. The drama will explore Anne Lister's relationships at home with her family, her servants, her tenants and her industrial rivals, who will use any dirty tricks they can to bring her down. At its heart is her relationship with her would-be wife, the wealthy heiress Ann Walker. It has all the warmth, wit, humour a*nd complexity that audiences have come to associate with Sally Wainwright's writing.</p>\",\n\t\t\t\t\"updated\": 1587311540,\n\t\t\t\t\"_links\": {\n\t\t\t\t\t\"self\": {\n\t\t\t\t\t\t\"href\": \"http://api.tvmaze.com/shows/30702\"\n\t\t\t\t\t},\n\t\t\t\t\t\"previousepisode\": {\n\t\t\t\t\t\t\"href\": \"http://api.tvmaze.com/episodes/1628538\"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"source\": \"tvmaze\"\n\t\t},\n\t\t{\n\t\t\t\"ID\": \"64\",\n\t\t\t\"Name\": \"Jackson,Aviel R.\",\n\t\t\t\"SSN\": \"835-83-9458\",\n\t\t\t\"DOB\": \"1943-09-07\",\n\t\t\t\"source\": \"crcind\"\n\t\t},\n\t\t{\n\t\t\t\"ID\": \"110\",\n\t\t\t\"Name\": \"Jackson,Dmitry U.\",\n\t\t\t\"SSN\": \"138-63-2738\",\n\t\t\t\"DOB\": \"1965-03-30\",\n\t\t\t\"source\": \"crcind\"\n\t\t},\n\t\t{\n\t\t\t\"ID\": \"189\",\n\t\t\t\"Name\": \"Jackson,Elvis U.\",\n\t\t\t\"SSN\": \"618-90-2037\",\n\t\t\t\"DOB\": \"1944-04-13\",\n\t\t\t\"source\": \"crcind\"\n\t\t}\n\t],\n\t\"resultCount\": 37\n}",
          "type": "json"
        }
      ]
    },
    "filename": "docs/routes/search.js",
    "groupTitle": "Search",
    "sampleRequest": [
      {
        "url": "https://api-web-test.herokuapp.com/api/search/{stringSearch}"
      }
    ]
  }
] });
