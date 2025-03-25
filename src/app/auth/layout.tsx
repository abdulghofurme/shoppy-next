import { Box, Stack } from "@mui/material"
import { PropsWithChildren } from "react"

function AuthLayout({ children }: PropsWithChildren) {
	return (
		<Box className='h-screen flex items-center justify-center'>
			<Stack spacing={2} className="w-full max-w-xs">
				{children}
			</Stack>
		</Box>
	)
}

export default AuthLayout 