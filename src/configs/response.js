const successCode = (res, data) => {
    return res.status(200).json({
        statusCode: 200,
        message: 'success',
        content: data
    })
}

const errorCode = (res, data) => { 
    return res.status(400).json({
        statusCode: 400,
        message: 'password or email is invalid',
        content: data
    })    
}

const notFoundCode = (res, data) => { 
    return res.status(404).json({
        statusCode: 404,
        message: "not found!",
        content: data
    })    
}

const failCode = (res, data) => { 
    return res.status(500).json({
        statusCode: 500,
        message: "server error",
        content: data
    })    
}

module.exports = {
    successCode,
    notFoundCode,
    errorCode,
    failCode
}