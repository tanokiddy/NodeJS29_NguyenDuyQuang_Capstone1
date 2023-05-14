const express = require('express')
const userRouter = require('./userRouter')
const imgRouter = require('./imgRouter')
const adminRouter = require('./adminRouter')

const rootRouter = express.Router()

rootRouter.use('/user', userRouter)

rootRouter.use('/img', imgRouter)

rootRouter.use('/admin', adminRouter)

module.exports = rootRouter
