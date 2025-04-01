import createProduct from "@/actions/create-product"
import getUserProducts from "@/actions/get-user-products"
import CreateProductFab from "@/components/product/CreateProductFAB"
import Products from "@/components/product/Products"

export default async function UserProducts() {
	const products = await getUserProducts()
	return <>
		<Products products={products} />
		<CreateProductFab createProduct={createProduct} />
	</>
}
