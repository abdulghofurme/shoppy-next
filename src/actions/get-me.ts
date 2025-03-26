'use server'

import { API_URL } from "@/constants/api"
import { get } from "@/util/fetch"

export default async function getMe() {
	return get(`${API_URL}/users/me`)
}