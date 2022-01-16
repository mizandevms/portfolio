<template>
	<Carousel :settings="settings" :breakpoints="breakpoints" :wrap-around="true" :autoplay="2000">
		<Slide v-for="(item, index) in slide" :key="index">
			<div class="carousel__item">
				<!-- tour hobe -->
				<div class="relative h-80 w-full bg-cyan-800 bg-opacity-80 p-4 border border-gray-300 rounded-md shadow-md group snap-center">
					<figure class="h-full w-full relative">
						<img class="h-full w-full object-contain" :src="item.thumbnil" alt="" />
					</figure>
					<div class="absolute inset-0 h-full w-full rounded-md hidden group-hover:flex flex-col justify-center items-center space-y-4 transition-all delay-100 bg-gray-900 opacity-80">
						<span class="capitalize text-white text-sm" style="font-family: Pacifico">Company profile website</span>
						<a :href="item.href" target="_blank">
							<img class="h-12 w-auto object-contain" :src="item.logo" alt="" />
						</a>
					</div>
				</div>
			</div>
		</Slide>
	</Carousel>
</template>

<script>
import {defineComponent} from "vue"
import {Carousel, Slide} from "vue3-carousel"

import "vue3-carousel/dist/carousel.css"

export default defineComponent({
	name: "Basic",
	components: {
		Carousel,
		Slide,
	},
	props: {
		slide: Object,
	},
	data: () => ({
		// carousel settings
		settings: {
			itemsToShow: 1,
			snapAlign: "center",
		},
		// breakpoints are mobile first
		// any settings not specified will fallback to the carousel settings
		breakpoints: {
			// 700px and up
			700: {
				itemsToShow: 3,
				snapAlign: "center",
			},
			// 1024 and up
			1024: {
				itemsToShow: 4,
				snapAlign: "start",
			},
		},
	}),
})
</script>

<style>
.carousel__item {
	min-height: 100%;
	width: 100%;
	/* background-color: var(--vc-clr-primary); */
	color: var(--vc-clr-white);
	font-size: 20px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.carousel__slide {
	padding: 10px;
}

.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	border: 5px solid white;
}
</style>
