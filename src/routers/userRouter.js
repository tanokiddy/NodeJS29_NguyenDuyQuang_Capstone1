const express = require('express')
const userRouter = express.Router()
const {updateUser, signUp, signIn } = require('../controllers/userController')
const authentication = require('../controllers/authentication')

userRouter.post('/signUp', signUp)

userRouter.post('/login', signIn)

userRouter.put('/updateUser/:id',authentication, updateUser)

module.exports = userRouter