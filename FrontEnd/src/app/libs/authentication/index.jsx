'use client'

import React, { createContext, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getUser } from '@/api/common'

const AuthenticationCtx = createContext(
	null
)

export function AuthenticationProvider({ children }) {
	const { isLoading, data } = useQuery({
		queryKey: ['QUERY_KEY_GET_USER_KEY'],
		queryFn: getUser,
		refetchOnWindowFocus: false,
		retry: false,
	})

	const contextValue = {
		user: data?.user,
		isAuth: data?.isAuth,
		isLoading: isLoading,
	}

	return (
		<AuthenticationCtx.Provider value={contextValue}>
			{children}
		</AuthenticationCtx.Provider>
	)
}

export function useAuthentication() {
	const user = useContext(AuthenticationCtx)
	if (!user) {
		throw Error(
			'__ERROR__: useAuthentication must be inside a AutheticationProvider with a value'
		)
	}
	return user
}
