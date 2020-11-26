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
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

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

			addTodo
		};
	}
});
</script>
