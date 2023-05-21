'use client'

import React from 'react'

import { useListImageClient } from './stately'

const ImageHydrate = ({
	state,
	children,
}) => {
	useListImageClient(state.listImage.content)
	return <>{children}</>
}

export default ImageHydrate
