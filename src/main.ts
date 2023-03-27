import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router, { setupRouter } from './router'

async function bootstrap() {
	const app = createApp(App)
	setupRouter(app)
	//等路由挂载好以后,再进行挂载
	await router.isReady()
	app.mount('#app')
}
bootstrap()

