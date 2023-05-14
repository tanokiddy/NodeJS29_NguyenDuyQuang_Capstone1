const initModels = require('../models/init-models')
const sequelize = require('../models')
const model = initModels(sequelize)
const{ Op } = require('sequelize')

//Get danh sach anh ve
const getAllImage = async () => { 
    const imgList = await model.images.findAll()
    return imgList
}
//Get tim kiem danh sach anh theo ten
const findImageByName = async (imageName) => { 
    const data = await model.images.findAll({
        where: {
            image_name: {
                [Op.like]: `%${imageName}%`
            }
        }
    })
    if(data.length) {
        return data
    } else {
        return false
    }
}
//Get thong tin anh va nguoi tao anh bang id anh #####
const getImageDetail = async (id) => { 
    const data = await model.images.findOne({
        where: {
            image_id: id
        },
        include: {
            model: model.users,
            as: 'user',
        }
    })
    if(data){
        return data
    } else {
        return false
    }
}
//Get thong tin binh luan theo id anh
const getInfoCommentById = async (id) => { 
    const data = await model.images.findOne({
        where: {
            image_id: id
        },
        include: {
            model: model.comments,
            as: 'comments'
        }
    })
    if(data){
        return data
    } else {
        return false
    }
}
//Get thong tin da luu anh nay chua theo id anh
const checkImageSaveById = async (id) => { 
    const statusSaveImg = await model.images.findOne({
        where: {
            image_id: id
        },
        include: {
            model: model.users,
            as: "user",
            include: {
                model: model.save_image,
                as: "save_images",
                where: {
                    image_id: id
                }
            }
        }
    })
    return statusSaveImg
}
//Post luu thong tin binh luan cua nguoi dung voi hinh anh
const saveCommentToImg = async (data, id) => { 
    const checkImg = await model.images.findOne({
        where: {
            image_id: id
        }
    })
    const dateNow = new Date().toJSON().slice(0, 10)
    if(checkImg) {
        const newData = {
            ...data,
            image_id: id,
            comment_date: dateNow
        }
        const newComment = await model.comments.create(newData)
        return newComment
    } else {
        return false
    }
}

//Trang quan ly anh
//Get thong tin user
const getUserDetail = async (id) => { 
    const checkUser = await model.users.findOne({
        where: {
            user_id: id
        }
    })
    if(checkUser) {
        return checkUser
    } else {
        return false
    }
}
//Get danh sach anh da luu theo user id
const getListImageSaved = async (id) => { 
    const checkUser = await model.users.findOne({
        where: {
            user_id: id
        },
        include: {
            model: model.save_image,
            as: "save_images"
        }
    })  
    if(checkUser){
        return checkUser
    } else {
        return false
    }
}
//Get danh sach anh da tao theo user id
const getListImageCreated = async (id) => { 
    const listImage = await model.users.findOne({
        where: {
            user_id: id
        },
        include: {
            model: model.images,
            as: "images"
        }
    })    
    if(listImage){
        return listImage
    } else {
        return false
    }
}
//Delete xoa anh da tao theo id anh
const deleteImage = async (id) => { 
    const checkImage = await model.images.findOne({
        where: {
            image_id: id
        }
    })
    if(checkImage) {
        const statusDelete = await model.images.destroy({
            where: {
                image_id: id,
            },
            force: true
        })
        return statusDelete
    } else {
        return false
    }
}
//Post them 1 anh cua user
const postImage = async (data, user_id) => { 
    const {image_url} = data
    const checkUrl = image_url.includes('.')
    if(checkUrl){
        const parseImgName = image_url.split('.')[0].split('/')[2]
        const newData = {
            image_name: parseImgName,
            image_url,
            description: parseImgName,
            user_id
        }   
        const newImage = await model.images.create(newData)
        return newImage
    } else {
        return false
    }
}

const updateImage = async (data) => { 
    const {image_id, image_url } = data
    const imageUpdate = await model.images.findOne({
        where: {
            image_id,
        }
    })
    if(imageUpdate) {
        const parseImgName = image_url.split('.')[0].split('/')[2]
        const newData = {
            image_name: parseImgName,
            image_url,
            description: parseImgName,
        }
        const newImage = await model.images.update(
            newData,
            {
                where: {
                    image_id,
                }
            }
        )
        return newImage
    } else {
        return false
    }
}

module.exports = {
    getAllImage,
    findImageByName,
    getImageDetail,
    getInfoCommentById,
    checkImageSaveById,
    saveCommentToImg,
    getUserDetail,
    getListImageSaved,
    getListImageCreated,
    deleteImage,
    postImage,
    updateImage
}


