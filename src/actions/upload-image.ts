import { API_URL } from "@/constants/api";
import { post } from "@/util/fetch";

export default async function uploadImage(file: File, relativePath: string) {
	const formData = new FormData();

	formData.append('image', file)
	formData.append('relative_path', relativePath)

	const res = await post(`${API_URL}/images`, {
		formData,
		payloadType: 'formData',
	})

	console.log(res)
	if (res.error) return { error: res.error, ...res.data, values: Object.fromEntries(formData) }
	return { message: 'success', ...res.data }
}