import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	routes: [
		{
			path: "/",
			component: () => import("../views/home.vue")
		}
	],
	history: createWebHistory()
})

export function setupRouter(app: App) {
	app.use(router)
}
export default router