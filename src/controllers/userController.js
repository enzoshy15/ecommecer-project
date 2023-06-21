import bcrypt from "bcrypt"
import userSchema from "../models/userSchema.js"
import authController from "./authController.js"

const createUser = async (req, res) => {

    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    req.body.password = hashedPassword

    try {
        const newUser = new userSchema(req.body)
        const userSave = await newUser.save()

        res.status(201).json({
            statusCode: 201,
            message: 'Cadastrado com sucesso!',
            data: {userSave}
        })
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: error.message
        })
    }
}

const generateUserData = async (req, res) => {
    const getToken = authController.login.token
}


export default {createUser}

