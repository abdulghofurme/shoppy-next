import PasswordInput from "@/components/PasswordInput"
import { Button, Link, TextField } from "@mui/material"
import NextLink from "next/link"

function Login() {
	return (
		<>
			<TextField label='Email' variant="outlined" type="email" />
			<PasswordInput />
			<Button variant="contained">Login</Button>
			<Link component={NextLink} href='/auth/signup' className='self-center'>
				Signup
			</Link>
		</>
	)
}

export default Login 