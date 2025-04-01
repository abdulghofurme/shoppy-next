'use client'

import { useAuthContext } from "@/context/AuthContext"

export default function Profile() {
	const { user } = useAuthContext()
	return <>
		<h1>{user?.email}</h1>
	</>
}
