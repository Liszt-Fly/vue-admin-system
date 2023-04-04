// test.ts
import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
	{
		url: '/api/info',
		method: 'get',
		timeout: 2000,
		response: () => {
			return {
				code: 200,
				message: "请求成功",
				type: "success",
				result: {
					name: "mikeedu",
					age: 22,
					avatar: "/avatar/mike.jpg"
				}
			}
		}
	}
	, {
		url: '/api/login',
		method: 'get',
		response: () => {
			return {
				code: 200,
				message: "登陆成功",
				type: "success",
				result: {
					token: Random.guid()
				}
			}
		}
	}

] as MockMethod[]