'use client'

import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClientConfig = {
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false,
		},
	},
}

export const QueryProvider = ({ children }) => {
	const [queryClient] = useState(() => new QueryClient(queryClientConfig))
	return (
		<QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
	)
}
