import { defineConfig, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { alias } from "./vite/alias"
import { parseEnv } from './vite/util'
// https://vitejs.dev/config/

export default ({ command, mode }: ConfigEnv) => {
	const isBuild = command == "build"
	const env = parseEnv(loadEnv(mode, "."))
	console.log('env', env)

	return {
		resolve: { alias },
		plugins: [vue()],
	}
}