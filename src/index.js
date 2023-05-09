const express = require('express')
const cors = require('cors')
const rootRouter = require('./routers/rootRouter')
const app = express()

app.use(express.json())
app.use(express.static('.'))
app.disable('x-powered-by')
app.use(cors())
app.listen(8080)

app.use('/api/v1', rootRouter)


