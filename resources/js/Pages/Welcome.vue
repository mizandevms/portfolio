<template>
	<app-layout>
		<section class="bg-primaryColor">
			<div class="max-w-5xl mx-auto">
				<div class="grid grid-cols-2 gap-x-6 justify-center items-center py-6 relative">
					<article class="text-white col-span-1 space-y-3">
						<span class="text-xl sm:text-4xl capitalize" style="font-family: Pacifico"> Hello Listener</span>
						<h1 class="text-xl sm:text-4xl"><span> I'm</span> <strong>Mizanur Rahman Mizan</strong></h1>
						<p class="text-lg sm:text-xl text-justify">I consider myself to be a results-oriented, hardworking, dependable, and capable worker; who is not easily affected by job stress and will be a strong asset to your department and organization in a variety of duties. I would like to introduce myself to new technologies and have the capability to capture swift learning.</p>
					</article>
					<figure class="col-span-1">
						<img class="h-[27rem] w-auto object-cover mx-auto" src=" /images/me.jpg" alt="" />
					</figure>
					<!-- arrow sign -->
					<figure class="absolute bottom-16 left-0 right-0">
						<img class="h-24 w-auto object-cover mx-auto transform -rotate-45" src=" /images/icon/arrow.png" alt="" />
					</figure>
				</div>
			</div>
		</section>

		<!-- projects slide -->
		<section class="curveBg h-auto pb-8">
			<div class="container mx-auto overflow-hidden">
				<h1 class="flex flex-col space-y-3">
					<span class="text-sm text-white italic font-medium">PROJECTS WORKING PROCESS</span>
					<span class="text-4xl text-secondaryColor font-extrabold">LASTEST <span class="text-white"> WORKING</span> PROJECT</span>
				</h1>
				<Slider3D :slide="slide" />
			</div>
		</section>

		<!-- skill & language -->
		<section class="container mx-auto">
			<div class="flex justify-evenly items-center gap-6">
				<div class="px-8">
					<h1 class="text-2xl sm:text-4xl font-medium capitalize text-cyan-700 py-4" style="font-family: Pacifico">SKILLS</h1>
					<div class="flex items-center">
						<ul class="list-inside list-disc text-gray-600">
							<li class="flex justify-start items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
									/>
								</svg>
								Vue Js
							</li>
							<li class="flex justify-start items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
									/>
								</svg>
								React Js
							</li>
							<li class="flex justify-start items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
									/>
								</svg>
								Laravel
							</li>
							<li class="flex justify-start items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
									/>
								</svg>
								Inertia.js
							</li>
							<li class="flex justify-start items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
									/>
								</svg>
								Tailwind CSS
							</li>
							<li class="flex justify-start items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
									/>
								</svg>
								Deploying in Digitalocen using forge laravel
							</li>
						</ul>
						<img class="h-40 w-auto object-contain hover:translate-x-3 transition-all duration-500 cursor-pointer" src="/images/icon/undraw_resume_re_hkth.svg" alt="" />
					</div>
				</div>
				<div class="px-8">
					<h1 class="text-2xl sm:text-4xl font-medium capitalize text-cyan-700 py-4" style="font-family: Pacifico">language</h1>
					<div class="flex items-center">
						<ul class="list-inside list-disc text-gray-600">
							<li class="flex justify-start items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-700" viewBox="0 0 20 20" fill="currentColor">
									<path
										fill-rule="evenodd"
										d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
								C
							</li>
							<li class="flex justify-start items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-700" view Box="0 0 20 20" fill="currentColor">
									<path
										fill-rule="evenodd"
										d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
								C++
							</li>
							<li class="flex justify-start items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-700" vi ewBox="0 0 20 20" fill="currentColor">
									<path
										fill-rule="evenodd"
										d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
								Java
							</li>
							<li class="flex justify-start items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-700" vie wBox="0 0 20 20" fill="currentColor">
									<path
										fill-rule="evenodd"
										d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
								javaScript
							</li>
							<li class="flex justify-start items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-700" viewBox="0 0 20 20" fill="currentColor">
									<path
										fill-rule="evenodd"
										d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
								HTML5
							</li>
						</ul>
						<img class="h-40 w-auto object-contain hover:translate-x-3 transition-all duration-500 cursor-pointer" src="../../../public/images/icon/undraw_programming_re_kg9v.svg" alt="" />
					</div>
				</div>
			</div>
		</section>

		<!-- job experience -->
		<section class="container mx-auto">
			<h1 class="text-2xl sm:text-4xl font-medium capitalize italic text-primaryColor py-4" style="font-family: Pacifico">Job <span class="text-secondaryColor">experience</span></h1>

			<div class="grid grid-cols-2 gap-24 justify-center items-center">
				<figure class="relative">
					<img class="relative h-72 w-full rounded-md border border-primaryColor p-2" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />

					<div class="absolute top-10 -right-20 flex flex-col space-y-3 justify-start">
						<span class="py-3 px-6 text-sm text-white bg-primaryColor w-full rounded-md border border-gray-50 flex justify-end items-center gap-x-2 hover:translate-x-3 transition-all duration-500 cursor-pointer">
							<img class="h-8 w-16 object-contain" src="/images/icon/primex.svg" alt="" />
							Primex Information System Limited</span
						>
						<span class="py-3 px-6 text-sm text-white bg-primaryColor w-full rounded-md border border-gray-50 flex justify-end items-center gap-x-2 hover:translate-x-3 transition-all duration-500 cursor-pointer">
							<img class="h-8 w-16 object-contain" src=" /images/icon/mistrisolutions.jpg" alt="" />
							Mistri Solutions</span
						>
						<span class="py-3 px-6 text-sm text-white bg-primaryColor w-full rounded-md border border-gray-50 flex justify-end items-center gap-x-2 hover:translate-x-3 transition-all duration-500 cursor-pointer">
							<img class="h-10 w-16 object-contain" src="/images/icon/amharc-techLogo.png" alt="" />
							AmharcTech <span class="text-xs">(Contractual)</span></span
						>
					</div>
				</figure>
				<Carousel class="experience" :wrap-around="true" :autoplay="2000">
					<Slide v-for="(item, index) in experience" :key="index">
						<div class="carousel__item">
							<div class="border border-primaryColor p-6 rounded-md experienceBg">
								<div class="flex !justify-between items-center">
									<h1 class="text-primaryColor font-medium flex-1 text-left">{{ item.name }}</h1>
									<img class="h-16 w-28 object-contain" :src="item.logo" alt="" />
								</div>
								<article class="text-gray-500 text-sm text-left">{{ item.details }}</article>
							</div>
						</div>
					</Slide>
				</Carousel>
			</div>
		</section>

		<!-- Education -->
		<section class="container mx-auto">
			<h1 class="text-2xl sm:text-4xl font-medium capitalize italic text-primaryColor py-4" style="font-family: Pacifico">Education</h1>
			<div class="relative h-96 w-full">
				<figure class="relative h-full w-full">
					<img class="relative rounded-md shadow-md h-full w-full object-cover" src="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=847&q=80" alt="" />
					<div class="absolute rounded-md shadow-md inset-0 h-full w-full bg-primaryColor opacity-70"></div>
				</figure>
				<div class="absolute inset-0 h-full w-full grid grid-cols-3 gap-8 justify-center text-white p-8">
					<div class="col-span-1 flex flex-col space-y-3 relative">
						<div class="relative h-full w-full">
							<img class="h-20 w-20 object-contain" src="../../../public/images/icon/undraw_education_f8ru.svg" alt="" />
							<article class="text-justify">
								Education plays a very important role in our lives. Just like food is essential for your physical well-being, education is essential for our overall growth. It is important for our physical, mental well-being. It is necessary to achieve success in life. Education gives us the confidence to move in society and it is the only and vital way to success as well as personal growth. But being well educated does’ not mean only receiving awards and certificates, getting a
								good salary but it also means to be a good and social person in life.
							</article>
						</div>
						<!-- <div class="absolute inset-0 h-full w-full bg-primaryColor opacity-50"></div> -->
					</div>
					<div class="col-span-2 flex flex-col justify-center items-start space-y-4">
						<div class="flex items-center gap-x-2">
							<img class="h-14 w-14 object-contain p-1 border border-white rounded-full" src="/images/icon/uap.png" alt="" />
							<div class="flex-1 flex-col space-y-2">
								<h1 class="text-2xl font-semibold">University Of Asia Pacific || From 2016 - 2020</h1>
								<span class="text-sm">Graduated Bsc from Computer Science and Engineering. || CGPA-3.36</span>
							</div>
						</div>
						<div class="flex items-center gap-x-2">
							<img class="h-14 w-14 object-contain p-1 border border-white rounded-full" src="/images/icon/college.jpg" alt="" />
							<div class="flex flex-col space-y-2">
								<h1 class="text-2xl font-semibold">Palashbari Government College || 2015</h1>
								<span class="text-sm">Passed H.S.C || GPA – 4.58</span>
							</div>
						</div>
						<div class="flex items-center gap-x-2">
							<img class="h-14 w-14 object-contain p-1 border border-white rounded-full" src="/images/icon/sm.jpg" alt="" />
							<div class="flex flex-col space-y-2">
								<h1 class="text-2xl font-semibold">Palashbari S.M pilot High School || 2013</h1>
								<span class="text-sm">Passed S.S.C || GPA – 5.00</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- awards -->
		<section class="container mx-auto py-8">
			<div class="grid grid-cols-5 gap-4">
				<div class="col-span-2">
					<h1 class="text-2xl sm:text-4xl font-medium capitalize text-primaryColor py-4" style="font-family: Pacifico">Award & Achivements</h1>
					<ul class="text-xl text-gray-600 font-medium space-y-3">
						<li class="flex justify-start gap-x-2">
							<img class="h-8 w-8 object-contain" src="/images/icon/award.png" alt="" />
							Academic Achievement Certificate in Dean’s Award List In 1st semester
						</li>

						<li class="flex justify-start gap-x-2">
							<img class="h-8 w-8 object-contain" src="/images/icon/award.png" alt="" />
							Champion in poster presentation at Inter University Hardware & Software Carnival
						</li>
					</ul>

					<h1 class="pt-8 text-2xl sm:text-4xl font-medium capitalize text-primaryColor py-4" style="font-family: Pacifico">ACTIVITIES</h1>
					<ul class="text-xl text-gray-600 font-medium space-y-3">
						<li class="flex justify-start gap-x-2">
							<img class="h-8 w-8 object-contain" src="/images/icon/award.png" alt="" />
							President, Math Club, CSE-UAP, Spring 2020
						</li>

						<li class="flex justify-start gap-x-2">
							<img class="h-8 w-8 object-contain" src="/images/icon/award.png" alt="" />
							Vice president, Math Club, CSE-UAP, Fall 2019
						</li>
					</ul>
				</div>
				<div class="col-span-3 flex gap-4 h-96 w-full">
					<div class="col-span-1 h-full w-full relative">
						<img class="h-full w-full object-cover rounded-sm relative" src="/images/1642265639313.JPG" alt="" />
						<div class="absolute bottom-0 bg-gray-900 opacity-70 py-4 h-auto w-full text-center">
							<span class="text-sm text-white font-semibold">With National Professor Dr. Jamilur Reza Choudhury</span>
						</div>
					</div>
					<div class="col-span-1 h-full w-full grid grid-rows-2 gap-4">
						<div class="h-full w-full relative">
							<img class="h-full w-full object-cover rounded-sm" src="/images/dean.jpg" alt="" />
							<div class="absolute bottom-0 bg-gray-900 opacity-70 py-4 h-auto w-full text-center">
								<span class="text-sm text-white font-semibold">With Dean, Pro-VC & Chairman, Board Of Trusty</span>
							</div>
						</div>
						<div class="h-full w-full relative">
							<img class="h-full w-full object-cover rounded-sm" src="/images/touhidSir.JPG" alt="" />
							<div class="absolute bottom-0 bg-gray-900 opacity-70 py-4 h-auto w-full text-center">
								<span class="text-xs text-white font-semibold">With Advisor Assistant Professor Dr. A S M Touhidul Hasan </span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</app-layout>
</template>

<style scoped>
.curveBg {
	background-image: url(" /images/icon/wave.svg");
	background-position: top;
	background-repeat: no-repeat;
	background-size: 100%;
}
.experienceBg {
	background-image: url("/images/icon/Sprinkle.svg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
.experience .carousel__item {
	min-height: 100% !important;
	width: 100%;
	/* background-color: var(--vc-clr-primary); */
}
</style>

<script>
import {defineComponent} from "vue"
import AppLayout from "../Layouts/AppLayout.vue"
import Slider3D from "../Component/Slider3D.vue"

import {Carousel, Slide} from "vue3-carousel"

import "vue3-carousel/dist/carousel.css"

export default defineComponent({
	components: {
		AppLayout,
		Slider3D,
		Carousel,
		Slide,
	},
	setup() {
		const slide = [
			{
				name: "tourhobe",
				thumbnil: "/images/icon/tourhobe.png",
				href: "https://tourhobe.com/",
				logo: "/images/icon/tourhbeLogo.png",
			},
			{
				name: "amhrtech",
				thumbnil: "/images/icon/amhrtech.png",
				href: "https://amharctech.com/.com",
				logo: "/images/icon/amharc-techLogo.png",
			},
			{
				name: "easybook",
				thumbnil: "/images/icon/easybook.png",
				href: "https://easybks.net",
				logo: "/images/icon/easylogo.png",
			},
			{
				name: "primex",
				thumbnil: "/images/icon/primex.png",
				href: "https://primex-bd.com",
				logo: "/images/icon/primex.svg",
			},
			{
				name: "dedf",
				thumbnil: "/images/icon/dedf.png",
				href: "https://dedf.org",
				logo: "/images/icon/DEDF-Logo.png",
			},
			{
				name: "primex",
				thumbnil: "/images/icon/primex.png",
				href: "https://primex-bd.com",
				logo: "/images/icon/primex.svg",
			},
			{
				name: "primex",
				thumbnil: "/images/icon/primex.png",
				href: "https://primex-bd.com",
				logo: "/images/icon/primex.svg",
			},
		]
		const experience = [
			{
				name: "Primex Information System Limited ",
				logo: "/images/icon/primex.svg",
				details: "Here I have used React .js, ES6. HTML5 , laravel API's for data fetching. This system is used for selling goods from a counter. For multiple counters, there are different admins available. I have maintained reusable components, responsive, understand naming conventions. ",
			},
			{
				name: "Mistri Solutions ",
				logo: "/images/icon/mistrisolutions.jpg",
				details: "Here I am working with Vue .js, laravel, Inertia.js , Tailwind CSS, deploying in Digitalocen using forge laravel. I have maintained reusable components, responsive, understand naming conventions. ",
			},
			{
				name: "Amharctech",
				logo: "/images/icon/amharc-techLogo.png",
				details: "Here I am working with Vue .js, laravel, Bootstrap. I have maintained reusable components, responsive, understand naming conventions. ",
			},
		]
		return {
			slide,
			experience,
		}
	},
})
</script>
