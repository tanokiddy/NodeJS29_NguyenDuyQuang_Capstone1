const initModels = require('../models/init-models')
const sequelize = require('../models')
const model = initModels(sequelize)


const getAll = async () => { 
    const userList = await model.users.findAll()
    return userList    
}

const getOne = async (id) => { 
    const userDetail = await model.users.findOne({
        where: {
            user_id: id
        }
    })    
    return userDetail
}

module.exports = {
    getAll, 
    getOne,
}