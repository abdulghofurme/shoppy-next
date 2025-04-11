'use server'

import { API_URL } from "@/constants/api"
import { post } from "@/util/fetch"
import { revalidateTag } from "next/cache"
import uploadImage from "./upload-image"

export default async function createProduct(
	_prevState: any,
	formData: FormData
) {
	const imageRes = await uploadImage(formData.get('image') as File, 'products')
	console.log(imageRes)
	if (imageRes.error) {
		return { ...imageRes, values: Object.fromEntries(formData) }
	}
	formData.append('image', imageRes.data.path)
	const res = await post(`${API_URL}/products`, { formData })
	revalidateTag("products");

	if (res.error) return { ...res.data, values: Object.fromEntries(formData) }
	return { message: 'success' }
}

