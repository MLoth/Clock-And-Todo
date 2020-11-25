<template>
	<div class="">
		<header class="sticky top-0 pt-3 pb-6 bg-opacity-75 bg-white">
			<div class="flex justify-between items-start">
				<p class="mt-3">
					On <span class="underline">Monday 19 March</span>
				</p>
				<router-link
					to="/"
					class="text-theme leading-none font-semibold rounded-full p-3 block hover:bg-gray-200"
					>x
					<!-- TODO: make icon: iconsvg.xyz -->
				</router-link>
			</div>
			<p class="text-3xl font-semibold">You need to...</p>

			<div class="flex">
				<aside class="flex items-center w-1/12">
					<button class="text-theme">
						+
					</button>
				</aside>
				<div class="w-11/12 flex flex-col">
					<input
						class="mb-1"
						type="text"
						placeholder="What do you need to do?"
					/>
					<div class="text-sm">
						<span class="mr-2">@</span>
						<input placeholder="08:30" type="time" name="" id="" />
					</div>
				</div>
			</div>
		</header>

		<main class="pt-3 pb-6">
			<div class="flex" v-for="t of new Array(100)" :key="t">
				<aside class="flex items-center w-1/12">
					<button class="text-theme">
						-
					</button>
				</aside>
				<div class="w-11/12 flex flex-col">
					<p class="mb-1">Water the cactus 🌵.</p>
					<div class="flex text-sm">
						<span class="mr-2">@</span>
						<p>12:30</p>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
