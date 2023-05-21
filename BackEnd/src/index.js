const express = require('express')
const cors = require('cors')
const rootRouter = require('./routers/rootRouter')
const cookieParser = require('cookie-parser')

const app = express()
app.listen(8080)
app.disable('x-powered-by')

app.use(express.json())
app.use(express.static('.'))
app.use(cors({
    'origin': '*',
    'credentials': true
}))
app.use(cookieParser())
app.use('/api/v1', rootRouter)







