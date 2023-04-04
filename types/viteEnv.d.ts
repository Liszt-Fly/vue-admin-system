
interface ImportMetaEnv extends ViteEnv {
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

interface ViteEnv {
	VITE_SOME_KEY: number
	VITE_API_AUTOLOAD: boolean
	VITE_API_URL: string
}