import { App } from "vue"
import { setupTailwindcss } from "./tailwindcss"
import _ from "lodash"
export function setupPlugins(app: App) {
	autoRegisterComponent(app)
	setupTailwindcss()
}
//全局组件的自动注册
function autoRegisterComponent(app: App) {
	const components: any = import.meta.glob("../components/form/*.vue", { eager: true })
	Object.keys(components).forEach(key => {
		console.log('key.split("/")', key.split("/"))
		let name = key.split("/").pop()?.split(".").shift() as string
		app.component(_.camelCase(name), components[key].default)
	})
}