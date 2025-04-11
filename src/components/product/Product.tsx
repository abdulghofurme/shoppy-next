import { API_URL } from "@/constants/api"
import { TProduct } from "@/types/product"
import { Card, Stack, Typography } from "@mui/material"
import Image from "next/image"

type ProductProps = {
	product: TProduct
}

function Product({ product }: ProductProps) {
	return (
		<Card className="p-4">
			<Stack gap={2}>
				<Typography variant="h4">{product.name}</Typography>
				{product.image && (
					<Image
						src={`${API_URL}/${product.image}`}
						width={0}
						height={0}
						className="w-full h-auto"
						sizes="100vw"
						alt='Product picture'
					/>
				)}
				<Typography>{product.description}</Typography>
				<Typography>${product.price}</Typography>
			</Stack>
		</Card>
	)
}

export default Product