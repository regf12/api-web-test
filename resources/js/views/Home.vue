<template>
	<b-container>

		<b-row class="my-3 px-3">
			<b-form-input v-model="inputSearch" placeholder="Enter your search"></b-form-input>
		</b-row>

		<b-row class="my-3 px-3">
			{{resultCount}} resultados.
		</b-row>

		<b-overlay :show="loading" rounded="sm" variant="white" opacity="0.90">
			<b-row class="my-3">

				<b-col cols="12" lg="6" xl="4" v-for="(item,index) in results" :key="index">
					<a class="cards" href="#">
						<b-img left fluid thumbnail img-left class="m-2 img-item-cover" :src="imgfiles[item.source]" alt="Service image"></b-img>
						<div class="d-flex flex-column justify-content-between py-3">
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

/*
.card .card-body[data-animation="center"] h4::before {
  transform-origin: center;
}

.card .card-body[data-animation="bonus"] h4::before {
  transform-origin: right;
}

.card .card-body[data-animation="bonus"] h4:hover::before {
  transform-origin: left;
  transform: scaleX(1);
  transition-timing-function: cubic-bezier(0.2, 1, 0.82, 0.94);
} */
</style>
