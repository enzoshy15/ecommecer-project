import express from "express"
import userController from "../controllers/userController.js"
import authController from "../controllers/authController.js"

const router = express.Router()


router.post("/criar", userController.createUser)
router.post("/login", authController.login)



export default router
