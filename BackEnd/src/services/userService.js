require('dotenv').config()
const initModels = require('../models/init-models')
const sequelize = require('../models')
const model = initModels(sequelize)

const bcrypt = require('bcrypt')
const { createToken } = require('../configs/jwt')

const create = async (data) => { 
    const checkEmail = await model.users.findOne({
        where: {
            email: data.email
        }
    })
    if(checkEmail) {
        return false
    } else {
        const hashedData = {
            ...data,
            pass_word: bcrypt.hashSync(data.pass_word, 10)
        }
        const newData = await model.users.create(hashedData)
        return newData
    }
}

const login = async (data) => { 
    const userCheck = await model.users.findOne({
        where: {
            email: data.email,
        }
    })
    //Check existance of email in DB
    if(userCheck){
        //if pass_word is still plain text => update db & return accessToken at last
        if(userCheck.pass_word === data.pass_word) {
            const newData = {
                ...data,
                pass_word: bcrypt.hashSync(data.pass_word, 10)
            }
            const userUpdate = await model.users.update(
                newData,
                {
                    where: {
                        email: data.email
                    }
                }
            )
            const accessToken = createToken({
                full_name: userUpdate.full_name,
                age: userUpdate.age,
                avatar: userUpdate.avatar,
                user_id: userUpdate.user_id
            })
            return accessToken
        } else {
            const checkPW = bcrypt.compareSync(data.pass_word, userCheck.pass_word)
            if(checkPW){
                const accessToken = createToken({
                    full_name: userCheck.full_name,
                    age: userCheck.age,
                    avatar: userCheck.avatar,
                    user_id: userCheck.user_id
                })
                return accessToken
            } else {
                return false
            }
        }
    } else {
        return false
    }
}

const update = async (data,id) => { 
    const userUpdate = await model.users.findOne({
        where: {
            user_id: id
        }
    })
    if(userUpdate) {
        const hashedPW = bcrypt.hashSync(userUpdate.pass_word,10)
        const newData = {
            ...data,
            pass_word: hashedPW
        }
        await model.users.update(
            newData,
            {
                where: {
                user_id: id
            }
        }
        )
        return userUpdate
    } else {
        return false
    }
}



module.exports = {
    create,
    login,
    update,
}