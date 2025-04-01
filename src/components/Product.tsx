import { TProduct } from "@/types/product"
import { Card, Typography } from "@mui/material"

type ProductProps = {
	product: TProduct
}

function Product({ product }: ProductProps) {
	return (
		<Card className="p-4">
			<Typography variant="h4">{product.name}</Typography>
			<Typography>{product.description}</Typography>
			<Typography>${product.price}</Typography>
		</Card>
	)
}

export default Product