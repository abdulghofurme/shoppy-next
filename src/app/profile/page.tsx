import getMe from "@/actions/get-me"

export default async function Profile() {
	const me = await getMe()
	return <>
		<h1>{me?.email}</h1>
	</>
}
