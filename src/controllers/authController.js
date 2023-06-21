import userSchema from "../models/userSchema.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import * as dotenv from "dotenv"

dotenv.config()

const SECRET = process.env.SECRET;

const login = async (req, res) => {
    try {
        console.log(req.body);
       let user = await userSchema.findOne({email: req.body.email})

        if (!user) {
            return res.status(401).json({
                statusCode: 401,
                message: "Usuário não encontrado!",
                data: {
                    email: req.body.email
                }
            })
        }
        
        const validacaoPassword = bcrypt.compareSync(req.body.password, user.password)

        if (!validacaoPassword) {
                return res.status(401).json({
                    statusCode: 401,
                    message: "Não autorizado!",
                })
        }
        user.password = undefined
        const token = jwt.sign({user}, SECRET)
        res.status(200).json({
            statusCode: 200,
            message: "Logado com sucesso!",
            data: {
                token
            }
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            statusCode: 500,
            message: error.message
        })
    }
}

export default {
    login,
}