//# 解决环境变量都是字符串的问题
import _ from 'lodash'
export function parseEnv(env: Record<string, any>): ViteEnv {
	const envs: any = _.cloneDeep(env)
	Object.entries(env).forEach(([key, value]) => {
		//# 处理布尔
		if (value == "true") {
			envs[key] = true
		}
		else if (value == "false") {
			envs[key] = false
		}
		//# 处理数字
		if (/^\d+$/.test(value)) {
			envs[key] = parseInt(value)
		}

	})
	return envs
}