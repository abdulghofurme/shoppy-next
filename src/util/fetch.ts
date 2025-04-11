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
	payloadType?: 'json' | 'formData'
}) => {
	const authHeader = await getHeaders()
	const res = await fetch(path, {
		method: 'POST',
		headers: {
			...(options?.payloadType === 'formData' ? {} : { "Content-Type": 'application/json' }),
			...authHeader,
		},
		...(options?.formData ? {
			body: options.payloadType === 'formData' ?
				options.formData :
				JSON.stringify(Object.fromEntries(options.formData)),
		} : {})
	})
	if (options?.responseCB) await options?.responseCB?.(res)
	const resJson = await res.json()
	if (!res.ok) {
		return { error: true, data: resJson }
	}

	return { error: false, data: resJson }
}

export const get = async <T>(path: string, options?: { next: NextFetchRequestConfig }) => {
	const authHeader = await getHeaders()
	const res = await fetch(path, {
		headers: { ...authHeader },
		next: options?.next
	})
	return res.json() as T
}