'use server'

import { API_URL } from "@/constants/api"
import { TProduct } from "@/types/product"
import { get } from "@/util/fetch"

export default async function getUserProducts() {
	return get<TProduct[]>(`${API_URL}/users/products`)
}