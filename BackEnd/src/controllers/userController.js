const { create, update, login, profile, logOut } = require("../services/userService")
const { successCode, errorCode, failCode, notFoundCode } = require("../configs/response")

const signUp = async (req, res) => { 
    const data = req.body
    try{
        const newData = await create(data)
        newData ? successCode(res) : res.status(400).json({
            statusCode: 400,
            message: "Email has been taken, please enter another email"
        })
    }catch(err){
        failCode(res)
        console.log(err)
    }
}

const signIn = async (req, res) => {
    const data = req.body
    try {
        const accessToken = await login(data)
        if(accessToken){
            res.cookie('UUID', accessToken, {
                maxAge: 86400 * 1000, //In miliseconds - Expire: 1 day
                httpOnly: true,
                // secure: true,
            })
            successCode(res)
        } else {
            errorCode(res)
        }
    } catch(err){
        errorCode(res, null)
        console.log(err)
    }
}

const updateUser = async (req, res) => { 
    const {id} = req.params
    const data = req.body
    try {
        const newData = await update(data, id)
        newData ? successCode(res) : notFoundCode(res)
    } catch(err){
        notFoundCode(res)
        console.log(err)
    }
}

const getProfile = async (req, res) => { 
    const cookies = req.cookies.UUID
    try {
        const user = await profile(cookies)
        user ? successCode(res, user) : notFoundCode(res)
    } catch(err){
        failCode(res)
        console.log(err)
    }
}

const signOut = async (req, res) => { 
    const cookies = req.cookies.UUID
    try {
        const user = await logOut(cookies)
        if(user){
            res.clearCookie('UUID')
            successCode(res)
        } else {
            notFoundCode(res)
        }
    } catch(err){
        failCode(res)
        console.log(err)
    }
}

module.exports = {
    signUp,
    signIn,
    updateUser,
    getProfile,
    signOut
}