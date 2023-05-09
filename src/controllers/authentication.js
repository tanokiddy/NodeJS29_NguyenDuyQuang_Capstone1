const { verifyToken } = require("../configs/jwt")

const authentication = (req, res, next) => { 
    const {token} = req.headers
    try {
        verifyToken(token)
        next()
    } catch(err){
        err.message === 'jwt must be provided' && res.status(401).json({
            statusCode: 401,
            content: 'Access token is missing or invalid'
        })
        err.message === 'jwt expired' && res.status(401).json({
            statusCode: 401,
            content: 'Your access token is expired'
        })
        res.send(err.message)
    }
}

module.exports = authentication