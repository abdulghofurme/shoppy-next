import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem, Typography } from '@mui/material'
import Link from 'next/link';
import { MouseEvent, useState } from 'react';

export type HeaderUserMenuProps = {
	logout: () => Promise<void>
}

function HeaderUserMenu({ logout }: HeaderUserMenuProps) {
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title="Open settings">
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
				</IconButton>
			</Tooltip>
			<Menu
				sx={{ mt: '45px' }}
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				<MenuItem component={Link} href='/profile'>
					<Typography sx={{ textAlign: 'center' }}>Profile</Typography>
				</MenuItem>
				<MenuItem component={Link} href='/products'>
					<Typography sx={{ textAlign: 'center' }}>Products</Typography>
				</MenuItem>
				<MenuItem onClick={async () => {
					await logout()
					handleCloseUserMenu()
				}}>
					<Typography sx={{ textAlign: 'center' }}>Logout</Typography>
				</MenuItem>
			</Menu>
		</Box>
	)
}

export default HeaderUserMenu