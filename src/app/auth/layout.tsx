import { Box } from "@mui/material"
import { PropsWithChildren } from "react"

function AuthLayout({ children }: PropsWithChildren) {
	return (
		<Box className='h-screen flex items-center justify-center'>
			{children}
		</Box>
	)
}

export default AuthLayout 