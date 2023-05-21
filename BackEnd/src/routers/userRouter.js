const express = require('express')
const userRouter = express.Router()
const {updateUser, signUp, signIn, getProfile, signOut } = require('../controllers/userController')
const authentication = require('../controllers/authentication')

userRouter.post('/signUp', signUp)

userRouter.post('/login', signIn)

userRouter.put('/updateUser/:id',authentication, updateUser)

userRouter.get('/userProfile', authentication, getProfile)

userRouter.get('/signOut', authentication, signOut)

module.exports = userRouter