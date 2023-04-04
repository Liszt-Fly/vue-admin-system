import Axios from "@/plugins/axios/Axios"

const http = new Axios({
	baseURL: "/api",
	timeout: 100000,
	headers: {}
})
export { http }