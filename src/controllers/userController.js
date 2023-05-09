const { create, update, login } = require("../services/userService")
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
        const newData = await login(data)
        newData ? successCode(res, newData) : errorCode(res)
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

module.exports = {
    signUp,
    signIn,
    updateUser,
}