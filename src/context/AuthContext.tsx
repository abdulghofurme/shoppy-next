'use client'

import { TUser } from "@/types/user"
import { createContext, PropsWithChildren, useContext } from "react"

export type TAuthContext = {
	isAuthenticated: boolean
	user: TUser
}

const AuthContext = createContext<TAuthContext | undefined>(undefined)

export type AuthProviderProps = TAuthContext & PropsWithChildren

export function AuthProvider({ children, isAuthenticated, user }: AuthProviderProps) {
	return (
		<AuthContext.Provider value={{ isAuthenticated, user }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuthContext() {
	const context = useContext(AuthContext)
	if (!context) throw new Error("useAuthContext must be used within AuthProvider");
	return context
}