'use server'

import { API_URL } from "@/constants/api"
import { post } from "@/util/fetch"
import { redirect } from "next/navigation"

export default async function loginUser(
	_prevState: any,
	formData: FormData
) {
	const res = await post(`${API_URL}/auth/login`, formData)
	if (res.error) return { ...res.data, values: Object.fromEntries(formData) }

	redirect('/')

}