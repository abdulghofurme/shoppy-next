'use client'

import loginUser from "@/actions/login-user"
import { VisibilityOff, Visibility } from "@mui/icons-material"
import { Button, IconButton, InputAdornment, Link, Stack, TextField, Typography } from "@mui/material"
import NextLink from "next/link"
import { useState, useActionState } from "react"

function Login() {
	const [showPassword, setShowPassword] = useState(false)
	const [state, formAction] = useActionState(loginUser, { message: '', errors: {}, values: {} })

	const handleClickShowPassword = () => { setShowPassword(v => !v) }
	return (
		<form action={formAction} className="w-full max-w-sm">
			<Stack spacing={2}>
				<TextField name='email' defaultValue={state.values.email || ''} label='Email' variant="outlined" type="email" helperText={state.errors.email} error={!!state.errors.email} />
				<TextField name='password' defaultValue={state.values.password || ''} label='Password' variant="outlined" type={showPassword ? 'text' : 'password'} slotProps={{
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

				{state.error &&
					<Typography variant="body2" color="error" align="center">{state.error}</Typography>
				}

				<Button type='submit'
					variant="contained">Login</Button>
				<Link component={NextLink} href='/auth/login' className='self-center'>
					Signup
				</Link>
			</Stack>
		</form>
	)
}

export default Login 