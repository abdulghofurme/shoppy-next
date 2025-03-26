export const post = async (path: string, formData: FormData) => {
	const res = await fetch(path, {
		method: 'POST',
		headers: { "Content-Type": 'application/json' },
		body: JSON.stringify(Object.fromEntries(formData))
	})
	const resJson = await res.json()
	if (!res.ok) {
		return {error: true, data: resJson} 
	}

	return {error: false, data: resJson}
}