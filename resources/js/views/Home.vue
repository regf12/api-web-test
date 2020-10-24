<template>
	<b-container>

		<b-row class="my-3">
			<b-form-input v-model="inputSearch" placeholder="Enter your search"></b-form-input>
		</b-row>

		{{resultCount}} resultados.

		<b-row class="my-3">

			<b-col v-for="(item,index) in results" :key="index">
				<b-card img-src="https://placekitten.com/100/100" img-alt="Card image" fluid thumbnail img-left class="mb-3">
					<b-card-text>
						Some quick example text to build on the card and make up the bulk of the card's content.
					</b-card-text>
				</b-card>
			</b-col>

		</b-row>

	</b-container>
</template>

<script>
import {
		mapGetters,
		mapActions
	} from 'vuex';

export default {
	data() {
    return {
			inputSearch: '',
    }
	},

	computed: {
		...mapGetters({
			results: 'getresults',
			resultCount: 'getresultCount'
		}),

		parseSearch(){
			return this.inputSearch.replace(" ", "+");
		}
	},

	watch: {
		inputSearch: function () {
			if(this.inputSearch.length>3)this.DistpatchSearch([this])
		},
	},

	methods: {
		...mapActions({
			DistpatchSearch: 'search'
		}),
	}

}
</script>

<style>

</style>
