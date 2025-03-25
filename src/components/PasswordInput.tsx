'use client'

import { VisibilityOff, Visibility } from '@mui/icons-material'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import React, { useState } from 'react'

function PasswordInput() {
	const [showPassword, setShowPassword] = useState(false)

	const handleClickShowPassword = () => { setShowPassword(v => !v) }
	return (
		<TextField label='Password' variant="outlined" type={showPassword ? 'text' : 'password'} slotProps={{
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
		}} />
	)
}

export default PasswordInput