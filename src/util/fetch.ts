import { cookies } from "next/headers"

const getHeaders = async () => {
	const cookie = await cookies()
	return {
		Cookie: cookie.toString(),
	}
}

export const post = async (path: string, options?: {
	formData?: FormData,
	responseCB?: (res: Response) => Promise<void>
}) => {
	const authHeader = await getHeaders()
	const res = await fetch(path, {
		method: 'POST',
		headers: { "Content-Type": 'application/json', ...authHeader },
		...(options?.formData ? {
			body: JSON.stringify(Object.fromEntries(options.formData))
		} : {})
	})
	if (options?.responseCB) await options?.responseCB?.(res)
	const resJson = await res.json()
	if (!res.ok) {
		return { error: true, data: resJson }
	}

	return { error: false, data: resJson }
}

export const get = async <T>(path: string) => {
	const authHeader = await getHeaders()
	const res = await fetch(path, {
		headers: { ...authHeader }
	})
	return res.json() as T
}