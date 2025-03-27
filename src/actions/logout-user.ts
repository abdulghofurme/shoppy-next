'use server'

import { API_URL } from "@/constants/api"
import CONST from "@/constants/general"
import { post } from "@/util/fetch"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function logoutUser() {
	await post(`${API_URL}/auth/logout`, {
		responseCB: async () => {
			(await cookies()).delete(CONST.Authentication)
		}
	})

	redirect('/auth/login')
}