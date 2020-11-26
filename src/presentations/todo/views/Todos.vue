<template>
	<div class="">
		<header class="sticky top-0 pt-3 pb-6 bg-opacity-75 bg-white">
			<div class="flex justify-between items-start">
				<p class="mt-3">
					<span class="underline"
						>{{ $t(getKeyofCurrentDay(new Date().getDay())) }}
						{{ new Date().getDate() }}
						{{
							$t(getKeyofCurrentMonth(new Date().getMonth()))
						}}</span
					>
				</p>
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
			</div>
			<p class="text-3xl font-semibold">
				{{ $t("TITLE-OVERVIEW") }}
			</p>

			<div class="flex">
				<aside class="flex items-center w-1/12">
					<button @click="addTodo" class="text-theme">
						+
					</button>
				</aside>
				<div class="w-11/12 flex flex-col">
					<input
						v-model="todo.title"
						class="mb-1"
						type="text"
						placeholder="What do you need to do?"
					/>
					<div class="text-sm">
						<span class="mr-2">@</span>
						<input
							v-model="todo.time"
							placeholder="08:30"
							type="time"
							name=""
							id=""
						/>
					</div>
				</div>
			</div>
		</header>

		<main class="pt-3 pb-6">
			<div v-if="todos.items">
				<div class="flex" v-for="t of todos.items" :key="t.id">
					<aside class="flex items-center w-1/12">
						<button class="text-theme">
							-
						</button>
					</aside>
					<div class="w-11/12 flex flex-col">
						<p class="mb-1">{{ t.title }}</p>
						<div class="flex text-sm">
							<span class="mr-2">@</span>
							<p>{{ t.time }}</p>
						</div>
					</div>
				</div>
			</div>
		</main>

		<div class="my-2">
			<router-link
				to="/settings"
				class="opacity-50 hover:opacity-100 text-xs"
			>
				{{ $t("TITLE-SETTINGS") }}
			</router-link>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import {
	getKeyofCurrentDay,
	getKeyofCurrentMonth
} from "@/utils/dataFormatting";

import Todo from "@/models/Todo";
import idb from "@/utils/idb";

export default defineComponent({
	setup() {
		const todo: Todo = reactive({
			title: "",
			time: "",
			completed: false
		});

		const todos: any = reactive({
			items: []
		});

		const getTodos = async () => {
			const getTodos = async () => await idb.getItems("todos");
			todos.items = await getTodos();
		};

		const addTodo = async () => {
			if (todo.title && todo.time) {
				if (!todo.completed) {
					const { title, time, completed } = todo; // Trek de properties uit de reactive => niet meer reactive
					const success = await idb.saveTodo({
						title,
						time,
						completed
					});
					if (success) {
						todo.title = "";
						todo.time = "";
						// todo.completed = false;
						getTodos();
					}
				} else {
					// Todo: remove
				}
			}
		};

		getTodos();

		return {
			todo,
			todos,

			addTodo,

			getKeyofCurrentDay,
			getKeyofCurrentMonth
		};
	}
});
</script>
