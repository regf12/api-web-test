<template>
  <div>
		<b-navbar toggleable="lg" type="dark" variant="info">
			<b-navbar-brand href="#">NavBar</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item href="#">
						<router-link :to="{ name: 'home' }">
							Home
						</router-link>
					</b-nav-item>
					<b-nav-item href="#">
						<router-link :to="{ name: 'documentation' }">
							Documentation
						</router-link>
					</b-nav-item>
				</b-navbar-nav>

				<b-navbar-nav class="ml-auto">

				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
export default {};
</script>
