const express = require('express')
const { getImageInfoByIdImg, getCommentInfoByIdImg, checkSaveImageByIdImg, saveCommentInfoToImg, getUserDetailById, getListImageSavedById, getListImageCreatedById, deleteImageById, postImageByUser, editUserProfile, getListImage, findListImageByName } = require('../controllers/imgController')
const authentication = require('../controllers/authentication')

const imgRouter = express.Router()

imgRouter.get('/getListImage', getListImage)

imgRouter.get('/getImage', findListImageByName)

imgRouter.get('/getImgInfoById/:id',authentication, getImageInfoByIdImg)

imgRouter.get('/getCommentInfoById/:id',authentication, getCommentInfoByIdImg)

imgRouter.get('/checkSaveImageById/:id',authentication, checkSaveImageByIdImg)

imgRouter.post('/saveCommentInfoById/:id',authentication, saveCommentInfoToImg)

imgRouter.get('/getUserDetailById/:id',authentication, getUserDetailById)

imgRouter.get('/getListImageSaved/:id',authentication, getListImageSavedById)

imgRouter.get('/getListImageCreated/:id',authentication, getListImageCreatedById)

imgRouter.delete('/deleteImage/:id',authentication, deleteImageById)

imgRouter.post('/postImage',authentication, postImageByUser)

imgRouter.put('/editProfile',authentication, editUserProfile)

module.exports = imgRouter