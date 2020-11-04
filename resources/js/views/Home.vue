<template>
	<b-container id="content-search">

		<b-row class="my-3 px-3">
			<b-col cols="12">
				<b-form @submit="onSubmit" @reset="inputSearch=''">
					<b-input-group class="mt-3">
						<b-form-input v-model="inputSearch" placeholder="Enter your search"></b-form-input>
						<b-input-group-append class="bg-light">
							<b-button type="reset" variant="outline-danger" class="border-none" v-if="inputSearch!=''">
								<fa icon="trash-alt"></fa>
							</b-button>
							<b-button type="submit" variant="outline-info" class="border-none">
								<fa icon="search"></fa>
							</b-button>
						</b-input-group-append>
					</b-input-group>
				</b-form>
			</b-col>
			<b-col cols="12" class="my-3 px-3 count-search">
				{{resultCount}} resultados.
			</b-col>
		</b-row>

		<b-overlay :show="loading" rounded="sm" variant="transparent" opacity="0.90">
			<b-row class="my-3 content-cards">

				<b-col cols="12" lg="6" xl="4" v-for="(item,index) in results" :key="index">
					<a class="cards" href="#">

						<b-img left fluid thumbnail img-left class="lazyload m-2 img-item-cover" :data-src="imgfiles[item.source]" :alt="`${item.source} services`"></b-img>
						<div class="d-flex flex-column justify-content-between m-2 py-2 description">
							<h4 class="line-clamp">{{ item[namefiles[item.source]] }}</h4>
							<b-link v-if="urlfiles[item.source]!=null" :href="item[urlfiles[item.source]]" target=”_blank” class="">See more</b-link>
						</div>
						<div class="go-corner" href="#">
							<div class="go-arrow"> → </div>
						</div>

					</a>
				</b-col>

			</b-row>
		</b-overlay>

	</b-container>
</template>

<script>
import {
		mapGetters,
		mapActions
	} from 'vuex';

export default {
	components: {

	},

	data() {
    return {
			inputSearch: ''
    }
	},

	computed: {
		...mapGetters({
			results: 'getresults',
			resultCount: 'getresultCount',
			loading: 'getLoading',

			namefiles: 'getNamefiles',
			urlfiles: 'getUrlfiles',
			imgfiles: 'getImgfiles'
		}),

		parseSearch(){
			return this.inputSearch.replace(" ", "+");
		}
	},

	watch: {
		/* inputSearch: function () {
			if(this.inputSearch.length>3)this.DistpatchSearch([this])
		}, */
	},

	methods: {
		...mapActions({
			DistpatchSearch: 'search'
		}),

		onSubmit(){
			if(this.inputSearch.length>3)this.DistpatchSearch([this])
		}
	}

}
</script>

<style>


</style>
