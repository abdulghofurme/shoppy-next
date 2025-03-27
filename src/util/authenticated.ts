import CONST from "@/constants/general";
import { cookies } from "next/headers";

export default async function checkIsAuthenticated() {
	return !!(await cookies()).get(CONST.Authentication)?.value
}