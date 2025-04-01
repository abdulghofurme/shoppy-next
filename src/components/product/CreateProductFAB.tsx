'use client'

import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import ModalCreateProduct, { ModalCreateProductProps } from "./ModalCreateProduct";

type CreateProductFabProps = Pick<ModalCreateProductProps, 'createProduct'>

function CreateProductFab({ createProduct }: CreateProductFabProps) {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<ModalCreateProduct
				open={modalVisible}
				onClose={() => setModalVisible(false)}
				createProduct={createProduct}
			/>

			<div className="absolute left-10 bottom-10">
				<Fab color="primary" onClick={() => setModalVisible(true)}>
					<AddIcon />
				</Fab>
			</div>
		</>
	);
}

export default CreateProductFab
