'use server'

import { API_URL } from "@/constants/api"
import { post } from "@/util/fetch"
import { revalidatePath, revalidateTag } from "next/cache"

export default async function createProduct(
	_prevState: any,
	formData: FormData
) {
	const res = await post(`${API_URL}/products`, { formData })
	revalidateTag("products");

	if (res.error) return { ...res.data, values: Object.fromEntries(formData) }
	return {message: 'success'}
}