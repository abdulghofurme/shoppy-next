import getUserProducts from "@/actions/get-user-products"

export default async function UserProducts() {
	const products = await getUserProducts()
	return <>
		{products.map(product => <div key={product.id}>{product.name}</div>)}
	</>
}
