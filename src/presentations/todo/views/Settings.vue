<template>
	<div class="min-h-screen py-12">
		<header class="flex justify-between items-start">
			<h2 class="text-3xl font-semibold">{{ $t("TITLE-SETTINGS") }}</h2>
			<router-link
				to="/"
				class="text-theme leading-none font-semibold rounded-full p-2 block hover:bg-gray-200"
			>
				<svg
					class="w-4 h-4 stroke-1 stroke-current text-theme"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
				<!-- TODO: make icon: iconsvg.xyz -->
			</router-link>
		</header>

		<main>
			<label class="block " for="locale">{{ $t("LANGUAGE") }}</label>
			<div class="relative mt-2">
				<select
					class="block w-full py-1 px-3 appearance-none border border-gray-400 focus:outline-none focus:shadow-outline"
					id="locale"
				>
					<option value="">Nederlands</option>
				</select>
				<span
					class="absolute flex items-center justify-center right-0 top-0 bottom-0 pr-3 no pointer-events-none"
				>
					<svg
						class="w-3 h-3 stroke-current text-gray-700"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M6 9l6 6 6-6" />
					</svg>
				</span>
			</div>
		</main>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
