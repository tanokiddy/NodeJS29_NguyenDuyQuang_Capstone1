const express = require('express')
const { getAllUser, getOneUser } = require('../controllers/adminController')
const authentication = require('../controllers/authentication')
const adminRouter = express.Router()

adminRouter.get('/getAllUser', authentication, getAllUser)

adminRouter.get('/getUserDetail/:id', authentication, getOneUser )

module.exports = adminRouter