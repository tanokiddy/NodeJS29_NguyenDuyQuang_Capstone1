import { get } from "./api"

export const getUser = async () => {
	try {
		const response = await get(`user/userProfile`)
		if(response.statusCode == 200){
			return response.content
		} else {
			return undefined
		}
	} catch (err) {
		console.log(err)
		return
		// const e = error
		// if (e.auto_redirect) {
		// 	window.location.href = e.redirect_link
		// 	return
		// }
		// return { user: undefined, isAuth: false }
	}
}
