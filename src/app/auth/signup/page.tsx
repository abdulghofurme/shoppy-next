import PasswordInput from "@/components/PasswordInput"
import { Button, Link, TextField } from "@mui/material"
import NextLink from "next/link"

function Signup() {
	return (
		<>
			<TextField label='Email' variant="outlined" type="email" />
			<PasswordInput />
			<Button variant="contained">Signup</Button>
			<Link component={NextLink} href='/auth/login' className='self-center'>
				Login
			</Link>
		</>
	)
}

export default Signup