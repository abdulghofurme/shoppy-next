import getMe from "@/actions/get-me"
import getProducts from "@/actions/get-products"

export default async function Home() {
  const me = await getMe()
  const products = await getProducts()
  return <>
    <h1>Hello {me?.email}</h1>

    {products.map(product => <div key={product.id}>{product.name}</div>)}
  </>
}
