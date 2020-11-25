<template>
	<div class="clock relative">
		<span
			:style="`transform: rotate(${degrees.hour}deg)`"
			class="clock-pointer absolute block rounded-lg bg-gray-900 clock-pointer--hour"
		></span>
		<span
			:style="`transform: rotate(${degrees.minute}deg)`"
			class="clock-pointer absolute block rounded-lg bg-gray-900 clock-pointer--minutes"
		></span>
		<span
			:style="`transform: rotate(${degrees.second}deg)`"
			class="clock-pointer absolute block rounded-lg bg-theme clock-pointer--seconds"
		></span>

		<span class="clock-center absolute block rounded-full bg-white"></span>

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

<style lang="scss" scoped>
.clock {
	padding-bottom: 100%; // Weird hack, maakt dit een vierkant...
}

.clock-pointer {
	--local-size: 3px;

	width: var(--local-size);
	bottom: calc(50% - calc(var(--local-size) / 2));
	left: calc(50% - calc(var(--local-size) / 2));

	transform-origin: bottom;
	will-change: transform;

	&--hour {
		height: 30%;
	}

	&--minutes {
		height: 40%;
	}

	&--seconds {
		height: 50%;

		// transition: transform 1000ms linear;
	}
}

.clock-center {
	--local-size: 13px;

	top: calc(50% - calc(var(--local-size) / 2));
	left: calc(50% - calc(var(--local-size) / 2));

	width: var(--local-size);
	height: var(--local-size);

	border: 3px solid var(--global-theme-color);
}
</style>
