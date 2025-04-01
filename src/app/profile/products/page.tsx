import getUserProducts from "@/actions/get-user-products"
import Products from "@/components/Products"

export default async function UserProducts() {
	const products = await getUserProducts()
	return <>
		<Products products={products} />
	</>
}
