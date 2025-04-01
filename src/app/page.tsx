import getMe from "@/actions/get-me"
import getProducts from "@/actions/get-products"
import Products from "../components/product/Products"

export default async function Home() {
  const me = await getMe()
  const products = await getProducts()
  return <>
    <h1>Hello {me?.email}</h1>
    <Products products={products}/>

  </>
}
