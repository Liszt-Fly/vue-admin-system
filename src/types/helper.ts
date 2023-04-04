export default new class {
	public env = {} as ImportMetaEnv
	constructor() {
		this.env = this.getEnvs()
	}
	private getEnvs(): ImportMetaEnv {
		const envs: any = {}
		Object.entries(import.meta.env).forEach(([key, value]) => {
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

			if (value == "null") envs[key] = null
			if (value == "undefined") envs[key] = undefined
		})
		return envs
	}
}