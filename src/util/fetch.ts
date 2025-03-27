import { cookies } from "next/headers"

const getHeaders = () => ({
	Cookie: cookies().toString(),
});

export const post = async (path: string, options?: {
	formData?: FormData,
	responseCB?: (res: Response) => Promise<void>
}) => {
	const res = await fetch(path, {
		method: 'POST',
		headers: { "Content-Type": 'application/json', ...getHeaders() },
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

export const get = async (path: string) => {
	const res = await fetch(path, {
		headers: { ...getHeaders() }
	})
	return res.json()
}