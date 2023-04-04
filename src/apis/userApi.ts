import { http } from "@/plugins/axios"

export interface User {
	name: string,
	age: number,
	avatar: string
}

export interface LoginInterface {
	token: string
}
export class userApi {
	info() {
		return http.request<User>({
			url: "info",
		})
	}
	login() {
		return http.request<LoginInterface>({
			url: "login",
		})
	}
}

export default new userApi()