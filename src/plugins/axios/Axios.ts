import axios, { AxiosRequestConfig } from "axios"
export default class Axios {
	private instance
	constructor(config: AxiosRequestConfig) {
		this.instance = axios.create(config)
	}
	public async request<T, D = ResponseResult<T>>(config: AxiosRequestConfig): Promise<D> {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await this.instance.request<D>(config)
				resolve(response.data)
			}
			catch (error) {
				reject(error)
			}
		})

	}
	private interceptors() {
		this.interceptorRequest()
		this.interceptorResponse()
	}
	private interceptorRequest() {
		this.instance.interceptors.request.use(config => config)
	}

	private interceptorResponse() {
		this.instance.interceptors.response.use(config => config)
	}
}