import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

export default new Vuex.Store({

	state: {
		results: [],
		resultCount: 0
	},

	getters: {
		getresults: state => state.results,
		getresultCount: state => state.resultCount
	},

	mutations: {
		updated (state , payload) {
			state.results = payload.results;
			state.resultCount = payload.resultCount;
		}
	},

	actions: {
		search ({ commit }, [context]) {
			context.axios.get(`http://127.0.0.1:8000/api/search/${context.parseSearch}`)
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
