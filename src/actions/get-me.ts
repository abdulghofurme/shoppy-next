'use server'

import { API_URL } from "@/constants/api"
import { TUser } from "@/types/user"
import { get } from "@/util/fetch"

export default async function getMe() {
	return get<TUser>(`${API_URL}/users/me`)
}