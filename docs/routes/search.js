/**
	*	@apiDefine urlParam Url Parameter
*/
/**
	*	@apiDefine headerParam Header Parameter
*/

/**
	*	@api {get} /search/{stringSearch} Api search
	*	@apiName Search
	*	@apiGroup Search
	*	@apiVersion 1.0.0
	*	@apiDescription This service allows to obtain the results of three different apis.
	*
	*	@apiParam (urlParam) {String} stringSearch Search parameter.
	*
	*	@apiSuccess {Number} resultCount Number of results with search matches.
	*	@apiSuccess {Array} results Data of results with search matches.
	*
	*	@apiSuccessExample Success-Response:
	*	HTTP/1.1 200 OK
	*	{
	*		"resultCount": 9,
	*		"results": [
	*			{
	*				"wrapperType": "track",
	*				"kind": "music-video",
	*				"artistId": 74214170,
	*				"collectionId": 131302210,
	*				"trackId": 129352706,
	*				"artistName": "Jack's Mannequin",
	*				"collectionName": "One Tree Hill, Vol. 2: Friends With Benefit (Music from the WB Television Series)",
	*				"trackName": "The Mixed Tape",
	*				"collectionCensoredName": "One Tree Hill, Vol. 2: Friends With Benefit (Music from the WB Television Series)",
	*				"trackCensoredName": "The Mixed Tape",
	*				"collectionArtistId": 80204262,
	*				"artistViewUrl": "https://music.apple.com/us/artist/jacks-mannequin/74214170?uo=4",
	*				"collectionViewUrl": "https://music.apple.com/us/music-video/the-mixed-tape/129352706?uo=4",
	*				"trackViewUrl": "https://music.apple.com/us/music-video/the-mixed-tape/129352706?uo=4",
	*				"previewUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video128/v4/f9/9b/55/f99b554c-24fa-136f-5bb4-0590931573d6/mzvf_5528930120957315186.640x480.h264lc.D2.p.m4v",
	*				"artworkUrl30": "https://is3-ssl.mzstatic.com/image/thumb/Video/v4/1d/32/e5/1d32e5dc-39f0-8db7-c7bb-7934cf9b864f/source/30x30bb.jpg",
	*				"artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Video/v4/1d/32/e5/1d32e5dc-39f0-8db7-c7bb-7934cf9b864f/source/60x60bb.jpg",
	*				"artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Video/v4/1d/32/e5/1d32e5dc-39f0-8db7-c7bb-7934cf9b864f/source/100x100bb.jpg",
	*				"collectionPrice": 11.99,
	*				"trackPrice": 1.99,
	*				"releaseDate": "2003-04-28T07:00:00Z",
	*				"collectionExplicitness": "notExplicit",
	*				"trackExplicitness": "notExplicit",
	*				"discCount": 1,
	*				"discNumber": 1,
	*				"trackCount": 17,
	*				"trackNumber": 17,
	*				"trackTimeMillis": 195567,
	*				"country": "USA",
	*				"currency": "USD",
	*				"primaryGenreName": "Alternative",
	*				"source": "itunes"
	*			},
	*			{
	*				"wrapperType": "track",
	*				"kind": "music-video",
	*				"artistId": 909253,
	*				"collectionId": 1445738051,
	*				"trackId": 1445738215,
	*				"artistName": "Jack Johnson",
	*				"collectionName": "To the Sea",
	*				"trackName": "You And Your Heart",
	*				"collectionCensoredName": "To the Sea",
	*				"trackCensoredName": "You And Your Heart (Closed-Captioned)",
	*				"artistViewUrl": "https://music.apple.com/us/artist/jack-johnson/909253?uo=4",
	*				"collectionViewUrl": "https://music.apple.com/us/music-video/you-and-your-heart-closed-captioned/1445738215?uo=4",
	*				"trackViewUrl": "https://music.apple.com/us/music-video/you-and-your-heart-closed-captioned/1445738215?uo=4",
	*				"previewUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video115/v4/f0/92/0c/f0920ce2-8bb7-5e62-b44c-36ce701fe7b1/mzvf_6922739671336234286.640x352.h264lc.U.p.m4v",
	*				"artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Video/v4/ae/be/c8/aebec8f3-2baa-7708-1cb9-af064c5423a4/source/30x30bb.jpg",
	*				"artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Video/v4/ae/be/c8/aebec8f3-2baa-7708-1cb9-af064c5423a4/source/60x60bb.jpg",
	*				"artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Video/v4/ae/be/c8/aebec8f3-2baa-7708-1cb9-af064c5423a4/source/100x100bb.jpg",
	*				"collectionPrice": 6.99,
	*				"trackPrice": -1,
	*				"releaseDate": "2010-06-01T07:00:00Z",
	*				"collectionExplicitness": "notExplicit",
	*				"trackExplicitness": "notExplicit",
	*				"discCount": 1,
	*				"discNumber": 1,
	*				"trackCount": 15,
	*				"trackNumber": 14,
	*				"trackTimeMillis": 197288,
	*				"country": "USA",
	*				"currency": "USD",
	*				"primaryGenreName": "Rock",
	*				"source": "itunes"
	*			},
	*			{
	*				"wrapperType": "track",
	*				"kind": "music-video",
	*				"artistId": 5557599,
	*				"collectionId": 264138681,
	*				"trackId": 263305433,
	*				"artistName": "David Guetta",
	*				"collectionName": "Pop Life (Extended Version)",
	*				"trackName": "Love Is Gone",
	*				"collectionCensoredName": "Pop Life (Extended Version)",
	*				"trackCensoredName": "Love Is Gone (Fred Rister & Joachim Garraud Remix)",
	*				"artistViewUrl": "https://music.apple.com/us/artist/david-guetta/5557599?uo=4",
	*				"collectionViewUrl": "https://music.apple.com/us/music-video/love-is-gone-fred-rister-joachim-garraud-remix/263305433?uo=4",
	*				"trackViewUrl": "https://music.apple.com/us/music-video/love-is-gone-fred-rister-joachim-garraud-remix/263305433?uo=4",
	*				"previewUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video128/v4/b8/b9/7c/b8b97c58-63b2-2013-bf07-2b9319d5e415/mzvf_2453882933791869571.640x384.h264lc.U.p.m4v",
	*				"artworkUrl30": "https://is5-ssl.mzstatic.com/image/thumb/Video/v4/2c/69/7e/2c697ec3-95b5-7dd8-4664-b7b460025e2f/source/30x30bb.jpg",
	*				"artworkUrl60": "https://is5-ssl.mzstatic.com/image/thumb/Video/v4/2c/69/7e/2c697ec3-95b5-7dd8-4664-b7b460025e2f/source/60x60bb.jpg",
	*				"artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Video/v4/2c/69/7e/2c697ec3-95b5-7dd8-4664-b7b460025e2f/source/100x100bb.jpg",
	*				"collectionPrice": 1.99,
	*				"trackPrice": 1.99,
	*				"releaseDate": "2007-09-18T07:00:00Z",
	*				"collectionExplicitness": "notExplicit",
	*				"trackExplicitness": "notExplicit",
	*				"discCount": 2,
	*				"discNumber": 2,
	*				"trackCount": 31,
	*				"trackNumber": 15,
	*				"trackTimeMillis": 222080,
	*				"country": "USA",
	*				"currency": "USD",
	*				"primaryGenreName": "Dance",
	*				"source": "itunes"
	*			},
	*			{
	*				"score": 16.380272,
	*				"show": {
	*					"id": 2478,
	*					"url": "http://www.tvmaze.com/shows/2478/surviving-jack",
	*					"name": "Surviving Jack",
	*					"type": "Scripted",
	*					"language": "English",
	*					"genres": ["Comedy", "Family"],
	*					"status": "Ended",
	*					"runtime": 30,
	*					"premiered": "2014-03-27",
	*					"officialSite": "https://www.fox.com/surviving-jack/",
	*					"schedule": {
	*						"time": "21:30",
	*						"days": ["Thursday"]
	*					},
	*					"rating": {
	*						"average": 7.3
	*					},
	*					"weight": 65,
	*					"network": {
	*						"id": 4,
	*						"name": "FOX",
	*						"country": {
	*							"name": "United States",
	*							"code": "US",
	*							"timezone": "America/New_York"
	*						}
	*					},
	*					"webChannel": null,
	*					"externals": {
	*						"tvrage": 35772,
	*						"thetvdb": 269587,
	*						"imdb": "tt2395482"
	*					},
	*					"image": {
	*						"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/13/33203.jpg",
	*						"original": "http://static.tvmaze.com/uploads/images/original_untouched/13/33203.jpg"
	*					},
						"summary": "<p>Set in Southern California, in 1991, the series centers on Jack Dunlevy, an ex-military man and no-nonsense guy who becomes a full-time parent when his w*ife decides to go to law school. He takes an unorthodox approach to keeping his teenagers, Frankie and Rachel, in line.</p>",
	*					"updated": 1602796433,
	*					"_links": {
	*						"self": {
	*							"href": "http://api.tvmaze.com/shows/2478"
	*						},
	*						"previousepisode": {
	*							"href": "http://api.tvmaze.com/episodes/186214"
	*						}
	*					}
	*				},
	*				"source": "tvmaze"
	*			},
	*			{
	*				"score": 16.155142,
	*				"show": {
	*					"id": 43031,
	*					"url": "http://www.tvmaze.com/shows/43031/jack-reacher",
	*					"name": "Jack Reacher",
	*					"type": "Scripted",
	*					"language": "English",
	*					"genres": ["Drama"],
	*					"status": "In Development",
	*					"runtime": 60,
	*					"premiered": null,
	*					"officialSite": null,
	*					"schedule": {
	*						"time": "",
	*						"days": []
	*					},
	*					"rating": {
	*						"average": null
	*					},
	*					"weight": 56,
	*					"network": null,
	*					"webChannel": {
	*						"id": 3,
	*						"name": "Amazon Prime",
	*						"country": null
	*					},
	*					"externals": {
	*						"tvrage": null,
	*						"thetvdb": 366924,
	*						"imdb": "tt9288030"
	*					},
	*					"image": null,
	*					"summary": "<p><b>Jack Reacher</b> is a drama series based on the character from Lee Child's bestselling novels.</p>",
	*					"updated": 1599335465,
	*					"_links": {
	*						"self": {
	*							"href": "http://api.tvmaze.com/shows/43031"
	*						}
	*					}
	*				},
	*				"source": "tvmaze"
	*			},
	*			{
	*				"score": 16.133999,
	*				"show": {
	*					"id": 30702,
	*					"url": "http://www.tvmaze.com/shows/30702/gentleman-jack",
	*					"name": "Gentleman Jack",
	*					"type": "Scripted",
	*					"language": "English",
	*					"genres": ["Drama", "Romance", "History"],
	*					"status": "Running",
	*					"runtime": 60,
	*					"premiered": "2019-04-22",
	*					"officialSite": "https://www.hbo.com/gentleman-jack",
	*					"schedule": {
	*						"time": "22:00",
	*						"days": ["Monday"]
	*					},
	*					"rating": {
	*						"average": 7.2
	*					},
	*					"weight": 89,
	*					"network": {
	*						"id": 8,
	*						"name": "HBO",
	*						"country": {
	*							"name": "United States",
	*							"code": "US",
	*							"timezone": "America/New_York"
	*						}
	*					},
	*					"webChannel": null,
	*					"externals": {
	*						"tvrage": null,
	*						"thetvdb": 348443,
	*						"imdb": "tt7211618"
	*					},
	*					"image": {
	*						"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/191/478580.jpg",
	*						"original": "http://static.tvmaze.com/uploads/images/original_untouched/191/478580.jpg"
	*					},
						"summary": "<p><b>Gentleman Jack</b> is a remarkable and unlikely love story set in the complex, changing world of 1832 Halifax - the cradle of the industrial revolution - just as it's all kicking off. The drama will explore Anne Lister's relationships at home with her family, her servants, her tenants and her industrial rivals, who will use any dirty tricks they can to bring her down. At its heart is her relationship with her would-be wife, the wealthy heiress Ann Walker. It has all the warmth, wit, humour a*nd complexity that audiences have come to associate with Sally Wainwright's writing.</p>",
	*					"updated": 1587311540,
	*					"_links": {
	*						"self": {
	*							"href": "http://api.tvmaze.com/shows/30702"
	*						},
	*						"previousepisode": {
	*							"href": "http://api.tvmaze.com/episodes/1628538"
	*						}
	*					}
	*				},
	*				"source": "tvmaze"
	*			},
	*			{
	*				"ID": "64",
	*				"Name": "Jackson,Aviel R.",
	*				"SSN": "835-83-9458",
	*				"DOB": "1943-09-07",
	*				"source": "crcind"
	*			},
	*			{
	*				"ID": "110",
	*				"Name": "Jackson,Dmitry U.",
	*				"SSN": "138-63-2738",
	*				"DOB": "1965-03-30",
	*				"source": "crcind"
	*			},
	*			{
	*				"ID": "189",
	*				"Name": "Jackson,Elvis U.",
	*				"SSN": "618-90-2037",
	*				"DOB": "1944-04-13",
	*				"source": "crcind"
	*			}
	*		],
	*		"resultCount": 37
	*	}
*/
