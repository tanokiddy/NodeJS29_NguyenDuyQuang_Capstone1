const { decodeToken } = require("../configs/jwt")
const { successCode, failCode, notFoundCode } = require("../configs/response")
const { getImageDetail, getInfoCommentById, checkImageSaveById, saveCommentToImg, getUserDetail, getListImageSaved, getListImageCreated, deleteImage, postImage, getAllImage, findImageByName, updateImage } = require("../services/imgService")


const getListImage = async (req, res) => { 
    try {
        const data = await getAllImage()
        successCode(res, data)
    }catch(err){
        failCode(res)
        console.log(err)
    }
}

const findListImageByName = async (req, res) => { 
    const {keyword} = req.query
    try{
        const image = await findImageByName(keyword)
        image ? successCode(res, image) : notFoundCode(res)
    }catch(err){
        failCode(res)
        console.log(err)
    }
}


const getImageInfoByIdImg = async (req, res) => { 
    const {id} = req.params
    try {
        const data = await getImageDetail(id)
        data ? successCode(res, data) : notFoundCode(res)
    } catch(err){
        failCode(res)
        console.log(err)
    }
}

const getCommentInfoByIdImg = async (req, res) => { 
    const {id} = req.params    
    try {
        const data = await getInfoCommentById(id)
        data ? successCode(res, data) : notFoundCode(res)
    }catch(err){
        failCode(res)
        console.log(err)
    }
}

const checkSaveImageByIdImg = async (req, res) => { 
    const {id} = req.params    
    try {
        const data = await checkImageSaveById(id)
        data ? successCode(res, data) : notFoundCode(res)
    } catch(err){
        failCode(res)
        console.log(err)
    }
}

const saveCommentInfoToImg = async (req, res) => { 
    const {id} = req.params    
    const data = req.body
    try {
        const newData = await saveCommentToImg(data, id)
        newData ? successCode(res) : notFoundCode(res)
    } catch(err){
        failCode(res)
        console.log(err)
    }
}

const getUserDetailById = async (req, res) => { 
    const {id} = req.params    
    try {
        const user = await getUserDetail(id)
        user ? successCode(res, user) : notFoundCode(res)
    } catch(err){
        failCode(res)
        console.log(err)
    }
}

const getListImageSavedById = async (req, res) => { 
    const {id} = req.params    
    try {
        const listImage = await getListImageSaved(id)
        listImage ? successCode(res, listImage) : notFoundCode(res)
    }catch(err){
        failCode(res)
        console.log(err)
    }
}

const getListImageCreatedById = async (req, res) => { 
    const {id} = req.params    
    try {
        const listImage = await getListImageCreated(id)
        listImage ? successCode(res, listImage) : notFoundCode(res)
    } catch(err){
        failCode(res)
        console.log(err)
    }
}

const deleteImageById = async (req, res) => { 
    const {id} = req.params    
    try {
        const image = await deleteImage(id)
        image ? successCode(res) : notFoundCode(res)
    } catch(err){
        failCode(res)
        console.log(err)
    }
}

const postImageByUser = async (req, res) => { 
    const {token} = req.headers
    const {user_id} = decodeToken(token)
    const data = req.body
    try{
        const newImage = await postImage(data,user_id)    
        newImage ? successCode(res, newImage) : res.status(400).json({
            statusCode: 400,
            message: "Image url is invalid"
        })
    } catch(err){
        failCode(res)
        console.log(err)
    }
}

const editUserProfile = async (req, res) => { 
    const {token} = req.headers    
    const {user_id, email} = decodeToken(token)
    const data = req.body
    try {
        const userUpdate = await editUser(data,user_id,email)
        userUpdate ? successCode(res) : res.status(400).json({
            statusCode: 400,
            message: "password must not be empty"
        })
    } catch(err){
        failCode(res)
        console.log(err)
    }
}

const updateImageById = async (req, res) => { 
    const data = req.body
    try {
        const newImage = await updateImage(data)
        newImage ? successCode(res) : notFoundCode(res)
    } catch(err){
        failCode(res)
        console.log(err)
    }
}


module.exports = {
    getListImage,
    findListImageByName,
    getImageInfoByIdImg,
    getCommentInfoByIdImg,
    checkSaveImageByIdImg,
    saveCommentInfoToImg,
    getUserDetailById,
    getListImageSavedById,
    getListImageCreatedById,
    deleteImageById,
    postImageByUser,
    editUserProfile,
    updateImageById
}