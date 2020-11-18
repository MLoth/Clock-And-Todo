import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Dashboard',
		component: () => import(/* webpackChunkName: "dashboard" */ '../presentations/todo/views/Dashboard.vue')
	},

	{
		path: '/settings',
		name: 'Settings',
		component: () => import(/* webpackChunkName: "settings" */ '../presentations/todo/views/Settings.vue')
	},

	{
		path: '/todos',
		name: 'Todos',
		component: () => import(/* webpackChunkName: "todos" */ '../presentations/todo/views/Todos.vue')
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
