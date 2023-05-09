const { successCode, failCode, notFoundCode } = require("../configs/response")
const { getAll, getOne, deleteOne } = require("../services/adminService")

const getAllUser = async (req, res) => { 
    try {
        const data = await getAll()    
        successCode(res, data)
    } catch(err){
        failCode(res, data)
        console.log(err)
    }
}

const getOneUser = async (req, res) => { 
    try {
        const {id} = req.params
        const data = await getOne(id)
        data ? successCode(res, data) : notFoundCode(res)
    } catch(err){
        failCode(res)
        console.log(err)
    }
}

module.exports = {
    getAllUser,
    getOneUser,
}