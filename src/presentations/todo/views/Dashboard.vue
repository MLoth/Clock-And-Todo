<template>
	<div class="flex min-h-screen flex-col justify-between py-12">
		<header>
			<p class="text-3xl font-semibold">{{ now }}</p>
			<p class="text-lg">
				{{ $t(dayOfTheWeek) }} {{ new Date().getDate() }}
				{{ $t(monthOfTheYear) }}
				<router-link
					to="/todos"
					class="inline-block text-white bg-theme rounded-full leading-none p-2 ml-2"
					>19</router-link
				>
			</p>
		</header>

		<div>
			<ClockFace />
		</div>

		<footer>
			<p class="text-2xl leading-tight">{{ $t("EMPTY-MESSAGE") }}</p>
			<button v-if="false">
				<!-- TODO: icon -->
				{{ $t("TODO-DONE-BUTTON") }}
			</button>
		</footer>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

import {
	addPaddingZeros,
	getKeyofCurrentDay,
	getKeyofCurrentMonth
} from "@/utils/dataFormatting";
import ClockFace from "../components/ClockFace.vue";

export default defineComponent({
	components: {
		ClockFace
	},

	setup() {
		const now: Ref<String> = ref(
			`${addPaddingZeros(new Date().getHours())}:${addPaddingZeros(
				new Date().getMinutes()
			)}`
		);

		const dayOfTheWeek: string = getKeyofCurrentDay(new Date().getDay());
		const monthOfTheYear: string = getKeyofCurrentMonth(
			new Date().getMonth()
		);

		return {
			now,
			dayOfTheWeek,
			monthOfTheYear
		};
	}
});
</script>
