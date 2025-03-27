'use server'

import CONST from "@/constants/general"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function logoutUser() {
	(await cookies()).delete(CONST.Authentication)
	redirect('/auth/login')
}