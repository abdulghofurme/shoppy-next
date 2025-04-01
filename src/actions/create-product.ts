'use server'

import { API_URL } from "@/constants/api"
import { post } from "@/util/fetch"
import { redirect } from "next/navigation"

export default async function createProduct(
	_prevState: any,
	formData: FormData
) {
	const res = await post(`${API_URL}/products`, { formData })
	if (res.error) return { ...res.data, values: Object.fromEntries(formData) }
}