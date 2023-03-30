import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '../views/routes'
import layoutRoutes from "./autoload"

const router = createRouter({
	routes: [...routes, ...layoutRoutes],
	history: createWebHistory()
})

export function setupRouter(app: App) {
	app.use(router)
}
export default router