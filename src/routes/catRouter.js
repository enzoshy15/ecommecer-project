import express from "express"
import catController from "../controllers/catController.js"

const router = express.Router()

router.get("/", catController.getAllCat)
router.post("/criar", catController.createCat)
router.post("/:id", catController.getOneCat)
router.put("/:id", catController.updateCat)
router.delete("/:id", catController.deleteCat)


export default router

