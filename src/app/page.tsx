import getMe from "@/actions/get-me"

export default async function Home() {
  const me = await getMe()
  return <>
    <h1>User: {me?.email}</h1>
  </>
}
