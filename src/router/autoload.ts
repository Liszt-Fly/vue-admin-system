import { RouteRecordRaw } from "vue-router"
import { parseEnv } from "@/utils/helper"
const layouts = import.meta.glob("../layouts/*.vue", { eager: true })
const views = import.meta.glob("../views/**/*.vue", { eager: true })
function getRoutes() {
	const layoutRouts = [] as RouteRecordRaw[]
	Object.entries(layouts).forEach(([file, module]) => {
		const route = getRouteByModule(file, module)

		route.children = getChildrenRoutes(route)
		layoutRouts.push(route)
	})
	return layoutRouts
}
//获取布局路由的子路由
function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
	let routes: RouteRecordRaw[] = []
	Object.entries(views).forEach(([file, module]) => {
		//# 只能获取模板文件架中的,如果不在模板文件夹中,需要自己注册
		if (file.includes(`../views/${layoutRoute.name as string}`)) {
			const route = getRouteByModule(file, module)
			routes.push(route)
		}

	})
	return routes
}

function getRouteByModule(file: string, module: any) {
	let name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, "")
	const route = {
		name: name.replace("/", "-"),
		path: `/${name}`,
		component: module.default
	} as RouteRecordRaw

	return Object.assign(route, module.default?.route)
}
export default parseEnv(import.meta.env).VITE_ROUTE_AUTOLOAD == true ? getRoutes() : []
