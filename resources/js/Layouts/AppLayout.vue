<template>
	<div>
		<!-- Page Content -->
		<main class="">
			<!-- <Header /> -->
			<slot></slot>
			<Footer />
		</main>
	</div>
</template>

<script>
import {defineComponent} from "vue"
import JetApplicationMark from "@/Jetstream/ApplicationMark.vue"
import JetBanner from "@/Jetstream/Banner.vue"
import JetDropdown from "@/Jetstream/Dropdown.vue"
import JetDropdownLink from "@/Jetstream/DropdownLink.vue"
import JetNavLink from "@/Jetstream/NavLink.vue"
import JetResponsiveNavLink from "@/Jetstream/ResponsiveNavLink.vue"
import {Head, Link} from "@inertiajs/inertia-vue3"
import Header from "../Layouts/Shared/Header.vue"
import Footer from "../Layouts/Shared/Footer.vue"

export default defineComponent({
	props: {
		title: String,
	},

	components: {
		Head,
		JetApplicationMark,
		JetBanner,
		JetDropdown,
		JetDropdownLink,
		JetNavLink,
		JetResponsiveNavLink,
		Link,
		Header,
		Footer,
	},

	data() {
		return {
			showingNavigationDropdown: false,
		}
	},

	methods: {
		switchToTeam(team) {
			this.$inertia.put(
				route("current-team.update"),
				{
					team_id: team.id,
				},
				{
					preserveState: false,
				}
			)
		},

		logout() {
			this.$inertia.post(route("logout"))
		},
	},
})
</script>
