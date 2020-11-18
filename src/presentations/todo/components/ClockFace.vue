<template>
	<div class="clock block relative">
		<span class="clock-pointer clock-hour"></span>
		<span class="clock-pointer clock-minutes"></span>
		<span class="clock-pointer clock-seconds"></span>

		<span class="clock-center"></span>

		<!-- <span class="sr-only">
			{{ $t('EXPLANATION-CLOCK-FACE') }}
		</span> -->
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, Ref, ref } from "vue";

export default defineComponent({
	setup() {
		const degrees = reactive({
			hour: 0,
			minute: 0,
			second: 0
		});

		const elapsed = reactive({
			hours: 0,
			minutes: 0,
			seconds: 0
		});

		const timerId: Ref<number> = ref(0);

		const startTheClock = function() {
			timerId.value = setInterval(() => {
				degrees.hour += 0.0083333333333333333;
				degrees.second = degrees.second + 6;
				elapsed.seconds++;

				if (elapsed.seconds >= 60) {
					degrees.minute += 6;

					elapsed.seconds = 0;
					elapsed.minutes++;
				}
			}, 1000);
		};

		const getCurrentTime = () => {
			const now: Date = new Date();
			degrees.hour =
				now.getHours() > 12 // Prevent 24 hour notation
					? (now.getHours() - 12) * 30 + now.getMinutes() * 0.5
					: now.getHours() * 30 + now.getMinutes() * 0.5;
			degrees.minute = now.getMinutes() * 6;
			degrees.second = now.getSeconds() * 6;

			elapsed.seconds = now.getSeconds();
		};

		getCurrentTime();
		startTheClock();

		return {
			degrees,
			elapsed
		};
	}
});
</script>
