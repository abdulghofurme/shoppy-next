'use server'

import { API_URL } from "@/constants/api"
import { post } from "@/util/fetch"
import { jwtDecode } from "jwt-decode"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const setAuthCookie = async (response: Response) => {
	const setCookieHeader = response.headers.get('Set-Cookie')
	if (setCookieHeader) {
		const token = setCookieHeader.split(';')[0].split('=')[1]
		const cookiesStore = await cookies()
		cookiesStore.set('Authentication', token, {
			secure: true,
			httpOnly: true,
			expires: new Date(jwtDecode(token).exp! * 1000)
		})

	}
}

export default async function loginUser(
	_prevState: any,
	formData: FormData
) {
	const res = await post(`${API_URL}/auth/login`, formData, setAuthCookie)
	if (res.error) return { ...res.data, values: Object.fromEntries(formData) }

	redirect('/')

}