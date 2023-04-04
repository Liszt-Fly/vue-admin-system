import 'mockjs'
import { env } from 'process'
import { ConfigEnv } from 'vite'
import { alias } from "./vite/alias"
import { setupPlugin } from './vite/plugins'
// https://vitejs.dev/config/

export default ({ command, mode }: ConfigEnv) => {
	const isBuild = command == "build"


	return {
		resolve: { alias },
		plugins: setupPlugin(isBuild, env)
	}
}