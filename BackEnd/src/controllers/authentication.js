const { verifyToken } = require("../configs/jwt")

const authentication = (req, res, next) => { 
    const cookies = req.cookies.UUID
    try {
        verifyToken(cookies)
        next()
    } catch(err){
        err.message === 'jwt must be provided' && res.status(401).json({
            statusCode: 401,
            content: 'cookies is missing or invalid'
        })
        err.message === 'jwt expired' && res.status(401).json({
            statusCode: 401,
            content: 'Your cookies is expired'
        })
        res.send(err.message)
    }
}

module.exports = authentication