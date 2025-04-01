import Product from "./Product"
import { TProduct } from "@/types/product"

type ProductsProps = {
	products: TProduct[]
}

function Products({ products }: ProductsProps) {
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</div>
	)
}

export default Products