'use client'

import { Box, Button, Modal, Stack, TextField } from "@mui/material";
import { useActionState, useEffect } from "react";

const styles = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export type ModalCreateProductProps = {
	open: boolean;
	onClose: () => void;
	createProduct: (_prevState: any, formData: FormData) => Promise<any>;
}

function ModalCreateProduct({ open, onClose, createProduct }: ModalCreateProductProps) {
	const [state, formAction] = useActionState(
		createProduct,
		{
			message: '',
			errors: { name: '', description: '', price: '' },
			values: { name: '', description: '', price: '' },
		}
	)

	useEffect(() => {
		if (state?.message === 'success') {
			onClose()
		}
	}, [state?.message])

	return (
		<Modal open={open} onClose={onClose}>
			<Box sx={styles}>
				<form
					className="w-full max-w-xs"
					action={formAction}
				>
					<Stack spacing={2}>
						<TextField
							name="name"
							label="Name"
							variant="outlined"
							required
							defaultValue={state?.values?.name || ''}
							helperText={state?.error?.name}
							error={!!state?.error?.name}
						/>
						<TextField
							name="description"
							label="Description"
							variant="outlined"
							required
							defaultValue={state?.values?.description || ''}
							helperText={state?.error?.description}
							error={!!state?.error?.description}
						/>
						<TextField
							name="price"
							label="Price"
							variant="outlined"
							required
							defaultValue={state?.values?.price || ''}
							helperText={state?.error?.price}
							error={!!state?.error?.price}
						/>
						<Button type="submit" variant="contained">
							Submit
						</Button>
					</Stack>
				</form>
			</Box>
		</Modal>
	)
}

export default ModalCreateProduct