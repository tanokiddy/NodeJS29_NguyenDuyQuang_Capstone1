import Cookies from 'js-cookie'

import { get } from './fetch'

export const AUTH_COOKIE_NAME = process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME || ''
export const getUser = async () => {
	try {
		const user = await get(`user/userProfile`)
		const isAuth = Cookies.get(AUTH_COOKIE_NAME) === '1' //
		return { user, isAuth }
	} catch (error) {
		const e = error
		if (e.auto_redirect) {
			window.location.href = e.redirect_link
			return
		}
		return { user: undefined, isAuth: false }
	}
}
