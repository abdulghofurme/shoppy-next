'use client'

import { Button, IconButton, InputAdornment, Link, Stack, TextField } from "@mui/material"
import NextLink from "next/link"
import createUser from "../../../actions/create-user"
import { VisibilityOff, Visibility } from "@mui/icons-material"
import { useActionState, useState } from "react"

function Signup() {
	const [showPassword, setShowPassword] = useState(false)
	const [state, formAction] = useActionState(createUser, { message: '', errors: { email: '', password: '' }, values: {} })
	console.log(state)

	const handleClickShowPassword = () => { setShowPassword(v => !v) }
	return (
		<form action={formAction} className="w-full max-w-sm">
			<Stack spacing={2}>
				<TextField name='email' defaultValue={state.values?.email || ''} label='Email' variant="outlined" type="email" helperText={state.errors.email} error={!!state.errors.email} />
				<TextField name='password' defaultValue={state.values?.password || ''} label='Password' variant="outlined" type={showPassword ? 'text' : 'password'} slotProps={{
					input: {
						endAdornment: <InputAdornment position="end">
							<IconButton
								aria-label={
									showPassword ? 'hide the password' : 'display the password'
								}
								onClick={handleClickShowPassword}
								edge="end"
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
				}}
					helperText={state.errors.password} error={!!state.errors.password}
				/>

				<Button type='submit'
					variant="contained">Signup</Button>
				<Link component={NextLink} href='/auth/login' className='self-center'>
					Login
				</Link>
			</Stack>
		</form>
	)
}

export default Signup