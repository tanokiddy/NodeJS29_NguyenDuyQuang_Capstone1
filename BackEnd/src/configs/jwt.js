const jwt = require('jsonwebtoken')
require('dotenv').config()
const {SECRET_KEY} = process.env

const createToken = (data) => { 
    const token = jwt.sign(data, SECRET_KEY, {
        expiresIn: 60 * 60 * 24 //In seconds
    })
    return token
}

const verifyToken = (token) => { 
    const verifiedToken = jwt.verify(token, SECRET_KEY)
    return verifiedToken
}

const decodeToken = (token) => { 
    const decodedToken = jwt.decode(token)    
    return decodedToken
}


module.exports = {
    createToken,
    verifyToken,
    decodeToken
}