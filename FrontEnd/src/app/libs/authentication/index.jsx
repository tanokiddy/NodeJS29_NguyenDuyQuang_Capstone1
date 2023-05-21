'use client'

import React, { createContext, useContext } from 'react'
import { getUser } from '@/api/common'
import { useQuery } from 'react-query'

const AuthenticationCtx = createContext(
	null
)

export function AuthenticationProvider({ children }) {
	const { isLoading, data: user } = useQuery({
		queryKey: ['QUERY_KEY_GET_USER_KEY'],
		queryFn: getUser,
		refetchOnWindowFocus: false,
		retry: false,
	})

	const contextValue = {
		user,
		isLoading
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
