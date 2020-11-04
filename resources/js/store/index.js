import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

export default new Vuex.Store({

	state: {
		request: null,

		results: [],
		resultCount: 0,
		loading: false,

		namefiles: {
			itunes: 'trackName',
			tvmaze: 'name',
			crcind: 'Name'
		},
		urlfiles: {
			itunes: 'trackViewUrl',
			tvmaze: 'url',
			crcind: null
		},
		imgfiles: {
			itunes: 'https://res.cloudinary.com/regf/image/upload/v1604268241/test/itunes.jpg',
			tvmaze: 'https://res.cloudinary.com/regf/image/upload/v1604268241/test/tvmaze.jpg',
			crcind: 'https://res.cloudinary.com/regf/image/upload/v1604268240/test/crcind.png'
		}
	},

	getters: {
		getresults: state => state.results,
		getresultCount: state => state.resultCount,
		getLoading: state => state.loading,

		getNamefiles: state => state.namefiles,
		getUrlfiles: state => state.urlfiles,
		getImgfiles: state => state.imgfiles
	},

	mutations: {

		loading (state, payload) {
			state.loading = payload;
		},

		updated (state, payload) {
			state.resultCount = payload.resultCount;
			state.results = payload.results.sort(function (a, b) {
				if ( a[state.namefiles[a.source]] > b[state.namefiles[b.source]] ) {
					return 1;
				}
				if ( a[state.namefiles[a.source]] < b[state.namefiles[b.source]]) {
					return -1;
				}
				return 0;
			});
			state.loading = false;
		}

	},

	actions: {

		search ({ state, commit }, [context]) {
			commit('loading', true);
			process.env.MIX_APP_URL;
			context.axios.get(`/search/${context.parseSearch}`)
			.then((response) => {
				console.log(response);
				commit('updated', {
					results: response.data.results,
					resultCount: response.data.resultCount
				})
			})
		}

	},

	modules: {

	}

})
