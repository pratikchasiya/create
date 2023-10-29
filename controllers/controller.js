const UserModal = require('../models/userModel')

const createUser = async (req, res) => {
    try {
        const { name, email, password, isAdmin } = req.body;
        /* await use for get data from database and it is require time thats why we use await */
        const user = await UserModal.create({
            name, email, password, isAdmin
        })
        res.status(201).json({
            user,
            message: 'success'
        })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({
            messgae: false,
            error: error
        })
    }
}

const getUser = async (req, res) => {
    try {
        /* await use for get data from database and it is require time thats why we use await */
        const users = await UserModal.find({})
        res.status(200).json({
            message: 'success',
            data: users
        })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({
            messgae: false,
            error: error
        })
    }

}

const getSingleUser = async (req, res) => {
    try {
        /* await use for get data from database and it is require time thats why we use await */
        const users = await UserModal.findById(req.params.id)
        if (users) {
            res.status(200).json({
                message: 'success',
                data: users
            })
        }
        else {
            res.status(400).json({
                messgae: false,
                error: "no any data for given id"
            })
        }
    }
    catch (error) {
        console.log(error)
        res.status(400).json({
            messgae: false,
            error: error
        })
    }

}
const updateUser = async (req, res) => {
    try {
        /* await use for get data from database and it is require time thats why we use await */
        const users = await UserModal.findById(req.params.id)
        if (users) {
            users.name = req.body.name || users.name;
            users.password = req.body.password || users.password;
            users.email = req.body.email || users.email;
            users.isAdmin = req.body.isAdmin || users.email;
            const updatedUser = await users.save()
            res.status(200).json({
                success: true,
                _id:updatedUser._id,
                name:updatedUser.name,
                email:updatedUser.email,
            })
        }
        else {
            res.status(400)
            throw new Error("user not found")
        }
    }
    catch (error) {
        console.log(error)
        res.status(400).json({
            messgae: false,
            error: error
        })
    }

}
const deleteUser = async (req, res) => {
    try {
        /* await use for get data from database and it is require time thats why we use await */
        const users = await UserModal.findById(req.params.id)
        if (users) {
            await users.deleteOne()
            res.status(200).json({
                "success":"user deleted successfully",
                "user":users
            })
        }   
        else {
            res.status(400)
            throw new Error("user not found")
        }
    }
    catch (error) {
        console.log(error)
        res.status(400).json({
            messgae: "error from client",
            error: error
        })
    }

}
module.exports = { getUser, createUser, getSingleUser, updateUser,deleteUser }