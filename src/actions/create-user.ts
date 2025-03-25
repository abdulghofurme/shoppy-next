'use server'

import { API_URL } from "@/constants/api"
import { redirect } from "next/navigation"

export default async function createUser(
	_prevState: any,
	formData: FormData
) {
	const res = await fetch(`${API_URL}/users`, {
		method: 'POST',
		body: formData
	})
	const resJson = await res.json()
	if (!res.ok) {
		return resJson
	}

	redirect('/')

}